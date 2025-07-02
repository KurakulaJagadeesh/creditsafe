resource "aws_cloudwatch_log_group" "usp_companies_api" {
  depends_on        = [aws_kms_key.usp]
  name              = "/aws/api-gw/usp-${var.env}-company-search"
  retention_in_days = 0
  kms_key_id        = aws_kms_key.usp.arn
}

resource "aws_cloudwatch_log_group" "usp_directors_api" {
  depends_on        = [aws_kms_key.usp]
  name              = "/aws/api-gw/usp-${var.env}-director-search"
  retention_in_days = 0
  kms_key_id        = aws_kms_key.usp.arn
}

resource "aws_cloudwatch_log_group" "usp_search_criteria_api" {
  depends_on        = [aws_kms_key.usp]
  name              = "/aws/api-gw/usp-${var.env}-search-criteria"
  retention_in_days = 0
  kms_key_id        = aws_kms_key.usp.arn
}

resource "aws_cloudwatch_log_group" "usp_search_autocomplete_api" {
  depends_on        = [aws_kms_key.usp]
  name              = "/aws/api-gw/usp-${var.env}-search-autocomplete"
  retention_in_days = 0
  kms_key_id        = aws_kms_key.usp.arn
}

resource "aws_cloudwatch_log_group" "usp_companies_lambda" {
  depends_on        = [aws_kms_key.usp]
  name              = "/aws/lambda/${aws_lambda_function.usp_companies.function_name}"
  retention_in_days = 0
  kms_key_id        = aws_kms_key.usp.arn
}

resource "aws_cloudwatch_log_group" "usp_search_criteria_lambda" {
  depends_on        = [aws_kms_key.usp]
  name              = "/aws/lambda/${aws_lambda_function.usp_search_criteria.function_name}"
  retention_in_days = 0
  kms_key_id        = aws_kms_key.usp.arn
}

resource "aws_cloudwatch_log_group" "usp_search_autocomplete_lambda" {
  depends_on        = [aws_kms_key.usp]
  name              = "/aws/lambda/${aws_lambda_function.usp_search_autocomplete.function_name}"
  retention_in_days = 0
  kms_key_id        = aws_kms_key.usp.arn
}
