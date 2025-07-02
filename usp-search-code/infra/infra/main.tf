locals {
  name_prefix = "${var.application}-${var.env}"
  subnets     = var.private_subnets
}