resource "aws_route53_record" "usp" {
  zone_id = var.route53_zone_id
  name    = var.api_domain_name
  type    = "A"

  alias {
    name                   = aws_lb.usp_gateway.dns_name
    zone_id                = aws_lb.usp_gateway.zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "usp_cert" {
  for_each = {
    for dvo in aws_acm_certificate.usp.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = var.route53_zone_id
}