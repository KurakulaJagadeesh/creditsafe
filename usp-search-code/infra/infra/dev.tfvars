env             = "dev"
account_number  = "712390586371" # CS Test/Dev
vpc_id          = "vpc-8c11cdea" # CS AWS Dev Test
private_subnets = ["subnet-23728345", "subnet-1775b15f", "subnet-c57f429e"]
api_domain_name = "api.usp.searchdev.creditsafe.com"
route53_zone_id = "Z02233552QXBQ971KSTV1"
alb_ingress_cidrs = [
  "208.50.66.224/27",
  "208.50.80.32/27",
  "111.93.14.240/29",
  "64.253.32.138/32",
  "64.253.38.10/32",
  "195.26.57.59/32",
  "54.228.56.169/32",
  "54.73.207.9/32",   # AWS Wokspaces
  "54.195.155.68/32", # AWS Wokspaces
  "10.0.0.0/8",       # Internal CS
  "172.16.67.0/24",   # GGS P Search
  "172.16.70.0/24",   # GGS P Search
  "172.16.64.0/24",   # GGS P Search
  "172.16.100.0/24",  # TESTNET Data Services
  "192.168.70.0/24"   # Italy Office IP
]

#### Opensearch Variables
domain                         = "usp"
opensearch_version             = "OpenSearch_2.17"
instance_count                 = 1
instance_type                  = "r7g.2xlarge.search"
is_zone_aware                  = false
zone_region_count              = 1
subnet_ids                     = ["subnet-23728345"]
security_group_ids             = ["sg-07721ea5677ef6eca"]
total_storage                  = 700
volume_type                    = "gp3"
iops                           = 8000
throughput                     = 593
node_to_node_encryption        = true
project                        = "USP"
kms_enabled                    = true
encrypt_at_rest_enabled        = true
log_publishing_options_enabled = true
log_publishing_type            = ["ES_APPLICATION_LOGS", "AUDIT_LOGS"]

security_group_vpc_id = "vpc-8c11cdea"
