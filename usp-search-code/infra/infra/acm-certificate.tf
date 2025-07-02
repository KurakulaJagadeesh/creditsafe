resource "aws_acm_certificate" "usp" {
  provider          = aws
  domain_name       = var.api_domain_name
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "usp" {
  provider                = aws
  certificate_arn         = aws_acm_certificate.usp.arn
  validation_record_fqdns = [for record in aws_route53_record.usp_cert : record.fqdn]
}

resource "aws_acm_certificate" "usp_lb" {
  provider          = aws
  domain_name       = var.api_domain_name
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "usp_lb" {
  provider                = aws
  certificate_arn         = aws_acm_certificate.usp_lb.arn
  validation_record_fqdns = [for record in aws_route53_record.usp_cert : record.fqdn]
}