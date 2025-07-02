provider "template" {
  version = "~> 2.1"
}

provider "aws" {
  assume_role {
    role_arn = "arn:aws:iam::${var.account_number}:role/terraformRole"
  }
  region = var.aws_region
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
  backend "s3" {
    bucket = "enviroment.terraform.creditsafe.com"
    region = "eu-west-1"
    key    = "Enviroment/workspaces/Identity_Resolution/usp-opensearch-infra"
  }
}
resource "aws_kms_key" "key" {
  count                    = var.kms_enabled ? 1 : 0
  description              = "KMS Key for Opensearch Domain"
  customer_master_key_spec = "SYMMETRIC_DEFAULT"
  deletion_window_in_days  = 30
  enable_key_rotation      = true

  tags = {
    Name        = "Search_${var.environment}_Key"
    Role        = "KMS Key for Opensearch"
    Creator     = "csuksnss"
    Entity      = var.domain
    Environment = var.environment
    Project     = var.project
    Owner       = "Search Team"
    Created     = "09/2022"
    CreatedBy   = "Terraform"
  }
}

resource "aws_cloudwatch_log_group" "opensearch_logs" {
  count = length(var.log_publishing_type)
  name  = "/aws/OpenSearchService/domains/${var.domain}-${var.environment}/${var.log_publishing_type[count.index]}"
  tags = {
    Name        = "USP_Search_${var.environment}_Logs"
    Role        = "Logs for USP Opensearch"
    Creator     = "csuksnss"
    Entity      = var.domain
    Environment = var.environment
    Project     = var.project
    Owner       = "Search Team"
    Created     = "09/2022"
    CreatedBy   = "Terraform"
  }
}

resource "aws_cloudwatch_log_resource_policy" "opensearch-log-publishing-policy" {
  policy_name     = "usp-opensearch-log-publishing-policy"
  policy_document = <<CONFIG
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "es.amazonaws.com"
      },
      "Action": [
        "logs:PutLogEvents",
        "logs:PutLogEventsBatch",
        "logs:CreateLogStream"
      ],
      "Resource": "arn:aws:logs:*"
    }
  ]
}
CONFIG
}

locals {
  os_domain = "${var.domain}_${var.environment}"
  log_publishing_option_list = var.log_publishing_options_enabled ? flatten([
    for index, log_type in var.log_publishing_type : [{
      log_group_arn = aws_cloudwatch_log_group.opensearch_logs[index].arn
      log_type      = log_type
    }]
  ]) : null
}

data "aws_region" "current" {}
data "aws_caller_identity" "current" {}

resource "aws_opensearch_domain" "os" {
  domain_name    = "${var.domain}-${var.environment}"
  engine_version = var.opensearch_version

  cluster_config {
    dedicated_master_enabled = var.dedicated_master_enabled
    dedicated_master_count   = var.master_instance_count
    dedicated_master_type    = var.master_instance_type
    instance_count           = var.instance_count
    instance_type            = var.instance_type
    zone_awareness_enabled   = var.is_zone_aware
    zone_awareness_config {
      availability_zone_count = var.zone_region_count
    }
  }

  advanced_security_options {
    enabled                        = true
    internal_user_database_enabled = true

    master_user_options {
      master_user_name     = var.opensearch_user
      master_user_password = var.opensearch_pass
    }
  }

  vpc_options {
    subnet_ids         = var.subnet_ids
    security_group_ids = var.security_group_ids
  }

  ebs_options {
    ebs_enabled = true
    volume_type = var.volume_type
    volume_size = var.total_storage
    iops        = var.iops
    throughput  = var.throughput
  }

  dynamic "log_publishing_options" {
    for_each = var.log_publishing_options_enabled ? local.log_publishing_option_list : []
    content {
      cloudwatch_log_group_arn = log_publishing_options.value.log_group_arn
      log_type                 = log_publishing_options.value.log_type
      enabled                  = var.log_publishing_options_enabled
    }
  }
  encrypt_at_rest {
    enabled    = var.encrypt_at_rest_enabled
    kms_key_id = var.kms_key_id
  }

  node_to_node_encryption {
    enabled = var.node_to_node_encryption
  }

  domain_endpoint_options {
    enforce_https       = true
    tls_security_policy = "Policy-Min-TLS-1-2-2019-07"
  }
  snapshot_options {
    automated_snapshot_start_hour = 00
  }

  access_policies = <<CONFIG
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Action": "es:*",
                "Principal": "*",
                "Effect": "Allow",
                "Resource": "arn:aws:es:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:domain/${var.domain}-${var.environment}/*"
            }
        ]
    }
    CONFIG

  tags = {
    Name        = "opensearch_domain_${var.environment}"
    Role        = "Opensearch Domain"
    Creator     = "csuksnss"
    Entity      = var.domain
    Environment = var.environment
    Project     = var.project
    Owner       = "Search Team"
    Created     = "03/2023"
  }
}

resource "null_resource" "example" {
  provisioner "local-exec" {
    command = "echo ${var.opensearch_user}"
  }
  triggers = {
    always_run = "${timestamp()}"
  }
}
