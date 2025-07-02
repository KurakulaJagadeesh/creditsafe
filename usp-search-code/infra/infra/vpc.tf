resource "aws_security_group" "usp_allow_alb" {
  name        = "usp-${var.env}-vpc-allow-alb"
  description = "USP ${var.env} - Allow ALB inbound traffic"
  vpc_id      = var.vpc_id

  ingress {
    description     = "443 HTTPS from ALB"
    from_port       = 443
    to_port         = 443
    protocol        = "tcp"
    security_groups = [aws_security_group.usp_gateway_alb_sg.id]
    cidr_blocks     = ["10.0.0.0/8"]
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_vpc_endpoint" "usp" {
  private_dns_enabled = false
  service_name        = "com.amazonaws.${var.aws_region}.execute-api"
  subnet_ids          = var.private_subnets
  vpc_endpoint_type   = "Interface"
  vpc_id              = var.vpc_id
  security_group_ids  = [aws_security_group.usp_allow_alb.id]
}