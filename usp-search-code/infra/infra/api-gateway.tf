resource "aws_api_gateway_rest_api" "usp" {
  name                         = "${var.rest_api_name}-${var.env}"
  description                  = "USP API Gateway"
  disable_execute_api_endpoint = false

  policy = jsonencode({
    Version : "2012-10-17",
    Statement : [
      {
        Effect : "Allow",
        Principal : "*",
        Action : "execute-api:Invoke",
        Resource : ["*"]
      },
      {
        Effect : "Deny",
        Principal : "*",
        Action : "execute-api:Invoke",
        Resource : ["*"],
        Condition : {
          StringNotEquals : {
            "aws:SourceVpce" : "${aws_vpc_endpoint.usp.id}"
          }
        }
      }
    ]
  })
  lifecycle {
    create_before_destroy = true
  }
  endpoint_configuration {
    types            = ["PRIVATE"]
    vpc_endpoint_ids = [aws_vpc_endpoint.usp.id]
  }
}

# resource "aws_api_gateway_request_validator" "usp_validator" {
#   name                        = "USP API request validator"
#   rest_api_id                 = aws_api_gateway_rest_api.usp.id
#   validate_request_body       = true
#   validate_request_parameters = true
# }

resource "aws_api_gateway_resource" "usp_companies" {
  rest_api_id = aws_api_gateway_rest_api.usp.id
  parent_id   = aws_api_gateway_rest_api.usp.root_resource_id
  path_part   = "companies"
}

resource "aws_api_gateway_resource" "usp_search_criteria" {
  rest_api_id = aws_api_gateway_rest_api.usp.id
  parent_id   = aws_api_gateway_rest_api.usp.root_resource_id
  path_part   = "searchcriteria"
}

resource "aws_api_gateway_resource" "usp_search_criteria_company" {
  rest_api_id = aws_api_gateway_rest_api.usp.id
  parent_id   = aws_api_gateway_resource.usp_search_criteria.id
  path_part   = "company"
}

resource "aws_api_gateway_resource" "usp_search_criteria_director" {
  rest_api_id = aws_api_gateway_rest_api.usp.id
  parent_id   = aws_api_gateway_rest_api.usp.root_resource_id
  path_part   = "peopleSearchCriteria"
}

resource "aws_api_gateway_resource" "usp_search_criteria_merge" {
  rest_api_id = aws_api_gateway_rest_api.usp.id
  parent_id   = aws_api_gateway_resource.usp_search_criteria.id
  path_part   = "merge"
}

resource "aws_api_gateway_resource" "usp_search_criteria_validate" {
  rest_api_id = aws_api_gateway_rest_api.usp.id
  parent_id   = aws_api_gateway_resource.usp_search_criteria.id
  path_part   = "validate"
}

resource "aws_api_gateway_resource" "usp_directors" {
  rest_api_id = aws_api_gateway_rest_api.usp.id
  parent_id   = aws_api_gateway_rest_api.usp.root_resource_id
  path_part   = "people"
}

resource "aws_api_gateway_resource" "usp_search_autocomplete" {
  rest_api_id = aws_api_gateway_rest_api.usp.id
  parent_id   = aws_api_gateway_resource.usp_companies.id
  path_part   = "autocomplete"
}

resource "aws_api_gateway_method" "usp_companies" {
  rest_api_id      = aws_api_gateway_rest_api.usp.id
  resource_id      = aws_api_gateway_resource.usp_companies.id
  http_method      = "GET"
  authorization    = "NONE"
  api_key_required = false
  request_parameters = {
    "method.request.header.Authorization"            = false,
    "method.request.querystring.acronym"             = false,
    "method.request.querystring.activityCodes"       = false,
    "method.request.querystring.address"             = false,
    "method.request.querystring.city"                = false,
    "method.request.querystring.companyType"         = false,
    "method.request.querystring.countries"           = true,
    "method.request.querystring.county"              = false,
    "method.request.querystring.exact"               = false,
    "method.request.querystring.fileNo"              = false,
    "method.request.querystring.groupResults"        = false,
    "method.request.querystring.houseNo"             = false,
    "method.request.querystring.id"                  = false,
    "method.request.querystring.includePreviousName" = false,
    "method.request.querystring.increaseRecall"      = false,
    "method.request.querystring.isGGS"               = false,
    "method.request.querystring.name"                = false,
    "method.request.querystring.officeType"          = false,
    "method.request.querystring.page"                = false,
    "method.request.querystring.pageSize"            = false,
    "method.request.querystring.phoneNo"             = false,
    "method.request.querystring.postCode"            = false,
    "method.request.querystring.province"            = false,
    "method.request.querystring.regNo"               = false,
    "method.request.querystring.safeNo"              = false,
    "method.request.querystring.searchMode"          = false,
    "method.request.querystring.simpleValue"         = false,
    "method.request.querystring.status"              = false,
    "method.request.querystring.street"              = false,
    "method.request.querystring.tradeName"           = false,
    "method.request.querystring.type"                = false,
    "method.request.querystring.vatNo"               = false,
    "method.request.querystring.website"             = false
  }
}

resource "aws_api_gateway_method" "usp_directors" {
  rest_api_id      = aws_api_gateway_rest_api.usp.id
  resource_id      = aws_api_gateway_resource.usp_directors.id
  http_method      = "GET"
  authorization    = "NONE"
  api_key_required = false
  request_parameters = {
    "method.request.header.Authorization"            = false,
    "method.request.querystring.ageMax"              = false,
    "method.request.querystring.ageMin"              = false,
    "method.request.querystring.city"                = false,
    "method.request.querystring.companyName"         = false,
    "method.request.querystring.companyNumber"       = false,
    "method.request.querystring.countries"           = true,
    "method.request.querystring.dateOfBirth"         = false,
    "method.request.querystring.firstName"           = false,
    "method.request.querystring.houseNo"             = false,
    "method.request.querystring.id"                  = false,
    "method.request.querystring.lastName"            = false,
    "method.request.querystring.localDirectorNumber" = false,
    "method.request.querystring.page"                = false,
    "method.request.querystring.pageSize"            = false,
    "method.request.querystring.peopleId"            = false,
    "method.request.querystring.postCode"            = false,
    "method.request.querystring.province"            = false,
    "method.request.querystring.regNo"               = false,
    "method.request.querystring.safeNo"              = false,
    "method.request.querystring.status"              = false,
    "method.request.querystring.street"              = false,
    "method.request.querystring.type"                = false,
  }
}

resource "aws_api_gateway_method" "usp_search_criteria" {
  rest_api_id      = aws_api_gateway_rest_api.usp.id
  resource_id      = aws_api_gateway_resource.usp_search_criteria.id
  http_method      = "GET"
  authorization    = "NONE"
  api_key_required = false
  request_parameters = {
    "method.request.header.Authorization"  = false,
    "method.request.querystring.countries" = true
  }
}

resource "aws_api_gateway_method" "usp_search_criteria_company" {
  rest_api_id      = aws_api_gateway_rest_api.usp.id
  resource_id      = aws_api_gateway_resource.usp_search_criteria_company.id
  http_method      = "GET"
  authorization    = "NONE"
  api_key_required = false
  request_parameters = {
    "method.request.header.Authorization"  = false,
    "method.request.querystring.countries" = true
  }
}

resource "aws_api_gateway_method" "usp_search_criteria_director" {
  rest_api_id      = aws_api_gateway_rest_api.usp.id
  resource_id      = aws_api_gateway_resource.usp_search_criteria_director.id
  http_method      = "GET"
  authorization    = "NONE"
  api_key_required = false
  request_parameters = {
    "method.request.header.Authorization"  = false,
    "method.request.querystring.countries" = true
  }
}

resource "aws_api_gateway_method" "usp_search_criteria_merge" {
  rest_api_id      = aws_api_gateway_rest_api.usp.id
  resource_id      = aws_api_gateway_resource.usp_search_criteria_merge.id
  http_method      = "POST"
  authorization    = "NONE"
  api_key_required = false
  request_parameters = {
    "method.request.header.Authorization" = false
  }
}

resource "aws_api_gateway_method" "usp_search_criteria_validate" {
  rest_api_id      = aws_api_gateway_rest_api.usp.id
  resource_id      = aws_api_gateway_resource.usp_search_criteria_validate.id
  http_method      = "POST"
  authorization    = "NONE"
  api_key_required = false
  request_parameters = {
    "method.request.header.Authorization" = false
  }
}

resource "aws_api_gateway_method" "usp_search_autocomplete" {
  rest_api_id      = aws_api_gateway_rest_api.usp.id
  resource_id      = aws_api_gateway_resource.usp_search_autocomplete.id
  http_method      = "GET"
  authorization    = "NONE"
  api_key_required = false
  request_parameters = {
    "method.request.header.Authorization"     = false,
    "method.request.querystring.countryCode"  = true,
    "method.request.querystring.size"         = false,
    "method.request.querystring.name"         = false,
    "method.request.querystring.contextField" = false,
    "method.request.querystring.contextValue" = false,
    "method.request.querystring.city"         = false,
    "method.request.querystring.postCode"     = false,
    "method.request.querystring.regNo"        = false,
    "method.request.querystring.vatNo"        = false
  }
}

resource "aws_api_gateway_method_settings" "usp" {
  depends_on = [aws_api_gateway_deployment.usp]

  rest_api_id = aws_api_gateway_rest_api.usp.id
  stage_name  = aws_api_gateway_stage.usp.stage_name
  method_path = "*/*"
  settings {
    metrics_enabled      = true
    logging_level        = "INFO"
    cache_data_encrypted = true
    caching_enabled      = true
    cache_ttl_in_seconds = 300
  }
}


resource "aws_api_gateway_integration" "usp_companies" {
  depends_on              = [aws_lambda_alias.usp_companies, aws_api_gateway_method.usp_companies]
  rest_api_id             = aws_api_gateway_rest_api.usp.id
  resource_id             = aws_api_gateway_resource.usp_companies.id
  http_method             = aws_api_gateway_method.usp_companies.http_method
  uri                     = aws_lambda_alias.usp_companies.invoke_arn
  type                    = "AWS_PROXY"
  integration_http_method = "POST"
  cache_key_parameters = [
    "method.request.querystring.acronym",
    "method.request.querystring.activityCodes",
    "method.request.querystring.address",
    "method.request.querystring.city",
    "method.request.querystring.companyType",
    "method.request.querystring.countries",
    "method.request.querystring.county",
    "method.request.querystring.exact",
    "method.request.querystring.fileNo",
    "method.request.querystring.groupResults",
    "method.request.querystring.houseNo",
    "method.request.querystring.id",
    "method.request.querystring.includePreviousName",
    "method.request.querystring.increaseRecall",
    "method.request.querystring.isGGS",
    "method.request.querystring.name",
    "method.request.querystring.officeType",
    "method.request.querystring.page",
    "method.request.querystring.pageSize",
    "method.request.querystring.phoneNo",
    "method.request.querystring.postCode",
    "method.request.querystring.province",
    "method.request.querystring.regNo",
    "method.request.querystring.safeNo",
    "method.request.querystring.searchMode",
    "method.request.querystring.simpleValue",
    "method.request.querystring.status",
    "method.request.querystring.street",
    "method.request.querystring.tradeName",
    "method.request.querystring.type",
    "method.request.querystring.vatNo",
    "method.request.querystring.website"
  ]
  cache_namespace = "usp_companies_${var.env}"
}

resource "aws_api_gateway_integration" "usp_directors" {
  depends_on              = [aws_lambda_alias.usp_directors, aws_api_gateway_method.usp_directors]
  rest_api_id             = aws_api_gateway_rest_api.usp.id
  resource_id             = aws_api_gateway_resource.usp_directors.id
  http_method             = aws_api_gateway_method.usp_directors.http_method
  uri                     = aws_lambda_alias.usp_directors.invoke_arn
  type                    = "AWS_PROXY"
  integration_http_method = "POST"
  cache_key_parameters = [
    "method.request.header.Authorization",
    "method.request.querystring.ageMax",
    "method.request.querystring.ageMin",
    "method.request.querystring.city",
    "method.request.querystring.companyName",
    "method.request.querystring.companyNumber",
    "method.request.querystring.countries",
    "method.request.querystring.dateOfBirth",
    "method.request.querystring.firstName",
    "method.request.querystring.houseNo",
    "method.request.querystring.id",
    "method.request.querystring.lastName",
    "method.request.querystring.localDirectorNumber",
    "method.request.querystring.page",
    "method.request.querystring.pageSize",
    "method.request.querystring.peopleId",
    "method.request.querystring.postCode",
    "method.request.querystring.province",
    "method.request.querystring.regNo",
    "method.request.querystring.safeNo",
    "method.request.querystring.status",
    "method.request.querystring.street",
    "method.request.querystring.type",
  ]
  cache_namespace = "usp_directors_${var.env}"
}

resource "aws_api_gateway_integration" "usp_search_criteria" {
  depends_on              = [aws_lambda_alias.usp_search_criteria, aws_api_gateway_method.usp_search_criteria]
  rest_api_id             = aws_api_gateway_rest_api.usp.id
  resource_id             = aws_api_gateway_resource.usp_search_criteria.id
  http_method             = aws_api_gateway_method.usp_search_criteria.http_method
  uri                     = aws_lambda_alias.usp_search_criteria.invoke_arn
  type                    = "AWS_PROXY"
  integration_http_method = "POST"
  cache_key_parameters = [
    "method.request.querystring.countries",
  ]
  cache_namespace = "usp_search_criterias_${var.env}"
}

resource "aws_api_gateway_integration" "usp_search_criteria_company" {
  depends_on              = [aws_lambda_alias.usp_search_criteria, aws_api_gateway_method.usp_search_criteria_company]
  rest_api_id             = aws_api_gateway_rest_api.usp.id
  resource_id             = aws_api_gateway_resource.usp_search_criteria_company.id
  http_method             = aws_api_gateway_method.usp_search_criteria_company.http_method
  uri                     = aws_lambda_alias.usp_search_criteria.invoke_arn
  type                    = "AWS_PROXY"
  integration_http_method = "POST"
  cache_key_parameters = [
    "method.request.querystring.countries",
  ]
  cache_namespace = "usp_search_criterias_company_${var.env}"
}

resource "aws_api_gateway_integration" "usp_search_criteria_director" {
  depends_on              = [aws_lambda_alias.usp_search_criteria, aws_api_gateway_method.usp_search_criteria_director]
  rest_api_id             = aws_api_gateway_rest_api.usp.id
  resource_id             = aws_api_gateway_resource.usp_search_criteria_director.id
  http_method             = aws_api_gateway_method.usp_search_criteria_director.http_method
  uri                     = aws_lambda_alias.usp_search_criteria.invoke_arn
  type                    = "AWS_PROXY"
  integration_http_method = "POST"
  cache_key_parameters = [
    "method.request.querystring.countries",
  ]
  cache_namespace = "usp_search_criterias_director_${var.env}"
}

resource "aws_api_gateway_integration" "usp_search_criteria_merge" {
  depends_on              = [aws_lambda_alias.usp_search_criteria_merge, aws_api_gateway_method.usp_search_criteria_merge]
  rest_api_id             = aws_api_gateway_rest_api.usp.id
  resource_id             = aws_api_gateway_resource.usp_search_criteria_merge.id
  http_method             = aws_api_gateway_method.usp_search_criteria_merge.http_method
  uri                     = aws_lambda_alias.usp_search_criteria_merge.invoke_arn
  type                    = "AWS_PROXY"
  integration_http_method = "POST"
}

resource "aws_api_gateway_integration" "usp_search_criteria_validate" {
  depends_on              = [aws_lambda_alias.usp_search_criteria_validate, aws_api_gateway_method.usp_search_criteria_validate]
  rest_api_id             = aws_api_gateway_rest_api.usp.id
  resource_id             = aws_api_gateway_resource.usp_search_criteria_validate.id
  http_method             = aws_api_gateway_method.usp_search_criteria_validate.http_method
  uri                     = aws_lambda_alias.usp_search_criteria_validate.invoke_arn
  type                    = "AWS_PROXY"
  integration_http_method = "POST"
}

resource "aws_api_gateway_integration" "usp_search_autocomplete" {
  depends_on              = [aws_lambda_alias.usp_search_autocomplete, aws_api_gateway_method.usp_search_autocomplete]
  rest_api_id             = aws_api_gateway_rest_api.usp.id
  resource_id             = aws_api_gateway_resource.usp_search_autocomplete.id
  http_method             = aws_api_gateway_method.usp_search_autocomplete.http_method
  uri                     = aws_lambda_alias.usp_search_autocomplete.invoke_arn
  type                    = "AWS_PROXY"
  integration_http_method = "POST"
  cache_key_parameters = [
    "method.request.querystring.countryCode",
    "method.request.querystring.size",
    "method.request.querystring.name",
    "method.request.querystring.contextField",
    "method.request.querystring.contextValue",
    "method.request.querystring.city",
    "method.request.querystring.postCode",
    "method.request.querystring.regNo",
    "method.request.querystring.vatNo"
  ]
  cache_namespace = "usp_search_autocomplete_${var.env}"
}

resource "aws_api_gateway_deployment" "usp" {
  depends_on = [
    aws_api_gateway_method.usp_companies,
    aws_api_gateway_method.usp_directors,
    aws_api_gateway_method.usp_search_criteria,
    aws_api_gateway_method.usp_search_criteria_company,
    aws_api_gateway_method.usp_search_criteria_director,
    aws_api_gateway_integration.usp_companies,
    aws_api_gateway_integration.usp_directors,
    aws_api_gateway_integration.usp_search_criteria,
    aws_api_gateway_integration.usp_search_criteria_company,
    aws_api_gateway_integration.usp_search_criteria_director,
    aws_api_gateway_integration.usp_search_criteria_merge,
    aws_api_gateway_integration.usp_search_criteria_validate,
    aws_api_gateway_integration.usp_search_autocomplete
  ]
  rest_api_id       = aws_api_gateway_rest_api.usp.id
  stage_name        = var.env
  stage_description = timestamp()                  // forces to 'create' a new deployment each run
  description       = "Deployed at ${timestamp()}" // just some comment field which can be seen in deployment history

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "usp" {
  depends_on = [
    aws_api_gateway_method.usp_companies,
    aws_api_gateway_method.usp_directors,
    aws_api_gateway_method.usp_search_criteria,
    aws_api_gateway_method.usp_search_autocomplete,
    aws_api_gateway_integration.usp_companies,
    aws_api_gateway_integration.usp_directors,
    aws_api_gateway_integration.usp_search_criteria,
    aws_api_gateway_integration.usp_search_criteria_merge,
    aws_api_gateway_integration.usp_search_criteria_validate,
    aws_api_gateway_integration.usp_search_autocomplete
  ]
  deployment_id         = aws_api_gateway_deployment.usp.id
  rest_api_id           = aws_api_gateway_rest_api.usp.id
  stage_name            = var.env
  xray_tracing_enabled  = true
  cache_cluster_enabled = true
  cache_cluster_size    = 0.5
  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.usp_companies_api.arn

    format = jsonencode({
      requestId               = "$context.requestId"
      sourceIp                = "$context.identity.sourceIp"
      requestTime             = "$context.requestTime"
      protocol                = "$context.protocol"
      httpMethod              = "$context.httpMethod"
      resourcePath            = "$context.resourcePath"
      routeKey                = "$context.routeKey"
      status                  = "$context.status"
      responseLength          = "$context.responseLength"
      integrationErrorMessage = "$context.integrationErrorMessage"
      }
    )
  }
}

resource "aws_lambda_permission" "usp_companies" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_alias.usp_companies.function_name
  qualifier     = aws_lambda_alias.usp_companies.name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.usp.execution_arn}/*/*"
}

resource "aws_lambda_permission" "usp_directors" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_alias.usp_directors.function_name
  qualifier     = aws_lambda_alias.usp_directors.name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.usp.execution_arn}/*/*"
}

resource "aws_lambda_permission" "usp_search_criteria" {
  statement_id  = "AllowExecutionFromAPIGateway1"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_alias.usp_search_criteria.function_name
  qualifier     = aws_lambda_alias.usp_search_criteria.name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.usp.execution_arn}/${aws_api_gateway_deployment.usp.stage_name}/GET/searchcriteria"
}

resource "aws_lambda_permission" "usp_search_criteria_company" {
  statement_id  = "AllowExecutionFromAPIGateway2"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_alias.usp_search_criteria.function_name
  qualifier     = aws_lambda_alias.usp_search_criteria.name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.usp.execution_arn}/${aws_api_gateway_deployment.usp.stage_name}/GET/searchcriteria/company"
}

resource "aws_lambda_permission" "usp_search_criteria_director" {
  statement_id  = "AllowExecutionFromAPIGateway3"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_alias.usp_search_criteria.function_name
  qualifier     = aws_lambda_alias.usp_search_criteria.name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.usp.execution_arn}/${aws_api_gateway_deployment.usp.stage_name}/GET/peopleSearchCriteria"
}

resource "aws_lambda_permission" "usp_search_criteria_validate" {
  depends_on    = [aws_lambda_function.usp_search_criteria_validate]
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_alias.usp_search_criteria_validate.function_name
  qualifier     = aws_lambda_alias.usp_search_criteria_validate.name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.usp.execution_arn}/*/*"
}

resource "aws_lambda_permission" "usp_search_autocomplete" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_alias.usp_search_autocomplete.function_name
  qualifier     = aws_lambda_alias.usp_search_autocomplete.name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.usp.execution_arn}/*/*"
}


resource "aws_api_gateway_domain_name" "usp" {
  regional_certificate_arn = aws_acm_certificate_validation.usp.certificate_arn
  domain_name              = var.api_domain_name
  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

resource "aws_api_gateway_base_path_mapping" "usp" {
  api_id      = aws_api_gateway_rest_api.usp.id
  domain_name = aws_api_gateway_domain_name.usp.domain_name
  stage_name  = aws_api_gateway_deployment.usp.stage_name
}
