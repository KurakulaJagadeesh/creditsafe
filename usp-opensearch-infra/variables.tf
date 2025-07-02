variable "aws_region" {
  description = "AWS Region to deploy resources into, defaults to Ireland, if changing ensure this isn't blocked by account SCPs"
  default     = "eu-west-1"
  type        = string
}

variable "account_number" {
  description = "Account number of AWS account to deploy resources into"
  type        = string
}

variable "environment" {
  description = "The env that should be constructed from the script"
}

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

variable "opensearch_user" {}
variable "opensearch_pass" {}
