resource "aws_security_group" "usp_gateway_alb_sg" {
  name        = "usp-${var.env}-gateway-lb-sg"
  description = "Allows trafic to the USP ${var.env} Gateway API ALB"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = var.alb_ingress_cidrs
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_lb" "usp_gateway" {
  name                       = "usp-${var.env}-gateway-lb"
  internal                   = true
  load_balancer_type         = "application"
  security_groups            = [aws_security_group.usp_gateway_alb_sg.id]
  subnets                    = var.private_subnets
  enable_deletion_protection = false
}

resource "aws_lb_target_group" "usp_gateway" {
  name        = "usp-${var.env}-gateway-alb-tg"
  target_type = "ip"
  port        = 443
  protocol    = "HTTPS"
  vpc_id      = var.vpc_id
  health_check {
    enabled  = true
    port     = 443
    matcher  = "200,403"
    protocol = "HTTPS"
  }
}

resource "aws_lb_listener" "usp_gateway" {
  load_balancer_arn = aws_lb.usp_gateway.id
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-TLS-1-2-2017-01" # Enforce TLS 1.2
  certificate_arn   = aws_acm_certificate.usp_lb.arn

  default_action {
    target_group_arn = aws_lb_target_group.usp_gateway.id
    type             = "forward"
  }
}

data "aws_network_interface" "usp_gateway" {
  depends_on = [aws_vpc_endpoint.usp]
  for_each   = aws_vpc_endpoint.usp.network_interface_ids
  id         = each.value
}

resource "aws_lb_target_group_attachment" "usp_gateway" {
  for_each         = data.aws_network_interface.usp_gateway
  target_group_arn = aws_lb_target_group.usp_gateway.arn
  target_id        = each.value.private_ip
  port             = 443
}
