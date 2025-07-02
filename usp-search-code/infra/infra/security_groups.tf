resource "aws_security_group" "es-access" {

  name = "es-${var.security_group_cluster}-sg-${var.env}"
  tags = {
    Name        = "es-${var.security_group_cluster}-sg-${var.env}"
    Role        = "Allow HTTP & HTTPS access to elasticsearch cluster and related infrastructure"
    Creator     = "Search Team"
    Entity      = var.domain
    Environment = var.env
    Project     = var.project
    Owner       = "Search Team"
    Created     = "${timestamp()}"
    CreatedBy   = "Terraform"
  }

  lifecycle {
    ignore_changes = ["tags.Created"]
  }

  description = "Allow HTTP and HTTPS access"

  vpc_id = var.security_group_vpc_id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "tcp connection on port 80 for HTTP access"
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "tcp connection on port 443 for HTTPS access"
  }

  ingress {
    from_port   = 9600
    to_port     = 9600
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "tcp connection on port 9600 for logstash monitoring"
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
