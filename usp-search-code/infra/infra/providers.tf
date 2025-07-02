terraform {
  backend "s3" {
    bucket = "enviroment.terraform.creditsafe.com"
    region = "eu-west-1"
    key    = "Enviroment/workspaces/search/usp-api-gateway"
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.87.0"
    }
    archive = {
      source  = "hashicorp/archive"
      version = "2.3.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 3.31.0"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

provider "aws" {
  region = var.aws_region
  assume_role {
    role_arn = "arn:aws:iam::${var.account_number}:role/terraformRole"
  }
  default_tags {
    tags = local.default_tags
  }
}

provider "aws" {
  region = "us-east-1"
  alias  = "cloudflare"
  assume_role {
    role_arn = "arn:aws:iam::${var.account_number}:role/terraformRole"
  }
}

data "external" "git_origin" {
  program = ["bash", "-c", "echo \"{ \\\"Origin\\\": \\\"$(git config --get remote.origin.url)\\\"}\""]
}

data "aws_ssm_parameter" "ami" {
  name = "/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2"
}

locals {
  default_tags = {
    TFGitRepo   = replace(data.external.git_origin.result.Origin, "/(http.*@)/", "")
    Creator     = "csinjhka"
    Entity      = "Group"
    Environment = terraform.workspace
    Project     = "usp-api-gateway"
    Owner       = "Search Team"
    CreatedBy   = "Terraform"
  }
}
