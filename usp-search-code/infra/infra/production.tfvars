env             = "prod"
account_number  = "826903919394"                                            # CS Production
vpc_id          = "vpc-37118851"                                            # CS Master Production
private_subnets = ["subnet-b78422d1", "subnet-130eba5b", "subnet-c214f598"] #1a, 1b, 1c Private1
api_domain_name = "api.usp.search.creditsafe.com"
route53_zone_id = "Z080564223TG0NOCGAS2M"
alb_ingress_cidrs = [
  "10.0.0.0/8", # Internal CS
  "172.16.0.0/12",
  "192.168.0.0/16",
  "54.73.207.9/32",   # AWS Wokspaces
  "54.195.155.68/32", # AWS Wokspaces
  "172.16.82.0/24",   # GGS P Search
  "172.16.85.0/24",   # GGS P Search
  "172.16.88.0/24",   # GGS P Search
  "64.253.39.0/27",   # DataServices Current Prodnet Outbound
  "52.214.54.24/32",  # DataServices PreProd and future production (AWS AZ1)
  "54.170.94.117/32"  # DataServices PreProd and future production (AWS AZ2)
]

minimum_usp_search_autocomplete_lambda_provisioned_concurrent_executions = 5
maximum_usp_search_autocomplete_lambda_provisioned_concurrent_executions = 30

minimum_usp_companies_lambda_provisioned_concurrent_executions = 5
maximum_usp_companies_lambda_provisioned_concurrent_executions = 30

minimum_usp_directors_lambda_provisioned_concurrent_executions = 5
maximum_usp_directors_lambda_provisioned_concurrent_executions = 30

#### Opensearch Variables
domain                         = "usp"
opensearch_version             = "OpenSearch_2.17"
instance_count                 = 9
instance_type                  = "or1.2xlarge.search"
is_zone_aware                  = true
zone_region_count              = 3
multi_az_with_standby_enabled  = false
subnet_ids                     = ["subnet-b78422d1", "subnet-130eba5b", "subnet-c214f598"] #1a, 1b, 1c Private1
security_group_ids             = ["sg-03b965d2708182ad7"]
total_storage                  = 700
volume_type                    = "gp3"
iops                           = 8000
throughput                     = 593
dedicated_master_enabled       = true
master_instance_count          = 3
master_instance_type           = "m7g.large.search"
node_to_node_encryption        = true
auto_tune_desired_state        = "ENABLED"
project                        = "USP"
kms_enabled                    = true
encrypt_at_rest_enabled        = true
log_publishing_options_enabled = true
log_publishing_type            = ["ES_APPLICATION_LOGS", "AUDIT_LOGS"]

security_group_vpc_id = "vpc-37118851"

#### Feature Flags
company_search_autocomplete_enable_sort_by_weight = false
log_level = "INFO"
it_vat_no_enabled = false