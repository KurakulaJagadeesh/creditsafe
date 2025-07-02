variable "account_number" {
  description = "AWS Account number to deploy resources into"
  type        = string
}

variable "aws_region" {
  description = "AWS Region to deploy resources into, defaults to `eu-west-1` (Ireland)"
  type        = string
  default     = "eu-west-1"
}

variable "vpc_id" {
  description = "AWS VPC to deploy resources into"
  type        = string
}

variable "private_subnets" {
  description = "List of Private subnets in AWS VPC"
  type        = list(string)
}

variable "rest_api_name" {
  type        = string
  description = "Name of the API Gateway created"
  default     = "usp-api-gateway"
}

variable "env" {
  type        = string
  description = "The env that should be constructed from the script"
}

variable "application" {
  description = "application name"
  default     = "usp"
}

variable "api_domain_name" {
  description = "API domain name"
}

variable "route53_zone_id" {
  description = "AWS Route53 Zone ID (managed outside of this TF repo)"
}

variable "alb_ingress_cidrs" {
  description = "Ingress IP Addresses for LB"
}

variable "opensearch_user" {}
variable "opensearch_pass" {}

variable "lambda_memory_size" {
  description = "Memory size for the lambda"
  default     = 1024
}

variable "lambda_ephemeral_disk_size" {
  description = "Ephemeral disk size for the lambda"
  default     = 512
}

# opensearch_domain.tf variables

variable "domain" {
  default     = "usp"
  description = "Domain of the project - eg USP"
}

variable "opensearch_version" {
  description = "Version of Opensearch"
}
variable "instance_count" {}
variable "instance_type" {}
variable "is_zone_aware" {}
variable "zone_region_count" {}
variable "subnet_ids" {}
variable "security_group_ids" {}
variable "total_storage" {}
variable "volume_type" {}
variable "iops" {
  default = null
}
variable "throughput" {
  default = null
}
variable "dedicated_master_enabled" {
  default = false
}
variable "node_to_node_encryption" {
  default = false
}
variable "master_instance_count" {
  default = null
}
variable "master_instance_type" {
  default = null
}

variable "log_publishing_option_list" {
  type = list(object({
    log_group_arn = string
    log_type      = string
  }))
  default = null
}

variable "log_publishing_options_enabled" {
  type    = bool
  default = false
}
variable "project" {
  default     = "Opensearch Domain"
  type        = string
  description = "Project tag value"
}
variable "kms_enabled" {
  default     = false
  type        = bool
  description = "Use KMS Key for Encryption at Rest?"
}
variable "kms_key_id" {
  default     = null
  description = "ID of KMS key to be used for encryption"
}
variable "encrypt_at_rest_enabled" {
  default     = false
  type        = bool
  description = "Encryption at rest enabled"
}
variable "log_publishing_type" {
  default     = null
  type        = list(any)
  description = "List of index types for opensearch cloudwatch logs, eg INDEX_SLOW_LOGS"
}

variable "multi_az_with_standby_enabled" {
  default     = false
  type        = bool
  description = "Multi AZ with standby enabled"
}

variable "auto_tune_desired_state" {
  default     = "DISABLED"
  description = "Auto-Tune desired state for the domain"
}

variable "cloudflare_api_token" {
  description = "Cloudflare API Token"
}

variable "minimum_usp_companies_lambda_provisioned_concurrent_executions" {
  description = "Minimum provisioned concurrent executions for the usp_companies lambda"
  type        = number
  default     = 1
}

variable "maximum_usp_companies_lambda_provisioned_concurrent_executions" {
  description = "Maximum provisioned concurrent executions for the usp_companies lambda"
  type        = number
  default     = 1
}

variable "minimum_usp_search_criteria_lambda_provisioned_concurrent_executions" {
  description = "Minimum provisioned concurrent executions for the usp_search_criteria lambda"
  type        = number
  default     = 1
}

variable "maximum_usp_search_criteria_lambda_provisioned_concurrent_executions" {
  description = "Maximum provisioned concurrent executions for the usp_search_criteria lambda"
  type        = number
  default     = 1
}

variable "minimum_usp_search_criteria_merge_lambda_provisioned_concurrent_executions" {
  description = "Minimum provisioned concurrent executions for the usp_search_criteria_merge lambda"
  type        = number
  default     = 1
}

variable "maximum_usp_search_criteria_merge_lambda_provisioned_concurrent_executions" {
  description = "Maximum provisioned concurrent executions for the usp_search_criteria_merge lambda"
  type        = number
  default     = 1
}

variable "minimum_usp_search_criteria_validate_lambda_provisioned_concurrent_executions" {
  description = "Minimum provisioned concurrent executions for the usp_search_criteria_validate lambda"
  type        = number
  default     = 1
}

variable "maximum_usp_search_criteria_validate_lambda_provisioned_concurrent_executions" {
  description = "Maximum provisioned concurrent executions for the usp_search_criteria_validate lambda"
  type        = number
  default     = 1
}

variable "minimum_usp_search_autocomplete_lambda_provisioned_concurrent_executions" {
  description = "Minimum provisioned concurrent executions for the usp_search_autocomplete lambda"
  type        = number
  default     = 1
}

variable "maximum_usp_search_autocomplete_lambda_provisioned_concurrent_executions" {
  description = "Maximum provisioned concurrent executions for the usp_search_autocomplete lambda"
  type        = number
  default     = 1
}

variable "minimum_usp_directors_lambda_provisioned_concurrent_executions" {
  description = "Minimum provisioned concurrent executions for the usp_directors lambda"
  type        = number
  default     = 1
}

variable "maximum_usp_directors_lambda_provisioned_concurrent_executions" {
  description = "Maximum provisioned concurrent executions for the usp_directors lambda"
  type        = number
  default     = 1
}

variable "security_group_vpc_id" {
  type        = string
  description = "The VPC ID to use for the security group"
}

variable "security_group_cluster" {
  type        = string
  description = "The cluster name to use for the security group"
  default     = "usp"
}

variable "log_level" {
  type        = string
  description = "Log level for the application"
  default     = "DEBUG"
}

variable it_vat_no_enabled {
  type        = bool
  description = "Enable IT VAT number validation"
  default     = true
}

variable "company_search_autocomplete_enable_sort_by_weight" {
  description = "Enable sorting by weight in the company search autocomplete"
  type        = bool
  default     = true
}
