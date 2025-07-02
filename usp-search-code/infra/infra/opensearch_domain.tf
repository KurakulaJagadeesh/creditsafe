resource "aws_kms_key" "key" {
  count                    = var.kms_enabled ? 1 : 0
  description              = "KMS Key for Opensearch Domain"
  customer_master_key_spec = "SYMMETRIC_DEFAULT"
  deletion_window_in_days  = 30
  enable_key_rotation      = true

  tags = {
    Name        = "Search_${var.env}_Key"
    Role        = "KMS Key for Opensearch"
    Creator     = "csuksnss"
    Entity      = var.domain
    Environment = var.env
    Project     = var.project
    Owner       = "Search Team"
    Created     = "09/2022"
    CreatedBy   = "Terraform"
  }
}

resource "aws_cloudwatch_log_group" "opensearch_logs" {
  count = length(var.log_publishing_type)
  name  = "/aws/OpenSearchService/domains/${var.domain}-${var.env}/${var.log_publishing_type[count.index]}"
  tags = {
    Name        = "USP_Search_${var.env}_Logs"
    Role        = "Logs for USP Opensearch"
    Creator     = "csuksnss"
    Entity      = var.domain
    Environment = var.env
    Project     = var.project
    Owner       = "Search Team"
    Created     = "09/2022"
    CreatedBy   = "Terraform"
  }
}

resource "aws_cloudwatch_log_resource_policy" "elasticsearch-log-publishing-policy" {
  policy_name     = "elasticsearch-log-publishing-policy"
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
  os_domain = "${var.domain}_${var.env}"
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
  depends_on     = [aws_security_group.es-access]
  domain_name    = "${var.domain}-${var.env}"
  engine_version = var.opensearch_version

  cluster_config {
    dedicated_master_enabled = var.dedicated_master_enabled
    dedicated_master_count   = var.master_instance_count
    dedicated_master_type    = var.master_instance_type
    instance_count           = var.instance_count
    instance_type            = var.instance_type
    zone_awareness_enabled   = var.is_zone_aware

    dynamic "zone_awareness_config" {
      for_each = var.is_zone_aware ? [1] : []
      content {
        availability_zone_count = var.zone_region_count
      }
    }

    multi_az_with_standby_enabled = var.multi_az_with_standby_enabled
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
    security_group_ids = [aws_security_group.es-access.id]
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
                "Resource": "arn:aws:es:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:domain/${var.domain}-${var.env}/*"
            }
        ]
    }
    CONFIG

  auto_tune_options {
    desired_state       = var.auto_tune_desired_state
    rollback_on_disable = var.auto_tune_desired_state == "ENABLED" ? "NO_ROLLBACK" : null
  }

  tags = {
    Name        = "opensearch_domain_${var.env}"
    Role        = "Opensearch Domain"
    Creator     = "csuksnss"
    Entity      = var.domain
    Environment = var.env
    Project     = var.project
    Owner       = "Search Team"
    Created     = "03/2023"
  }
}
