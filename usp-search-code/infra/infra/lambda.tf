// --- USP Company Search Lambda ---
resource "aws_security_group" "usp_companies" {
  name_prefix = "usp-company-search-"
  description = "USP company search lambda security group"
  vpc_id      = var.vpc_id

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}

resource "aws_lambda_alias" "usp_companies" {
  depends_on       = [aws_lambda_function.usp_companies]
  name             = "usp-${var.env}-company-search"
  function_name    = aws_lambda_function.usp_companies.function_name
  function_version = aws_lambda_function.usp_companies.version
}

resource "aws_lambda_provisioned_concurrency_config" "usp_companies" {
  depends_on                        = [aws_lambda_alias.usp_companies]
  function_name                     = aws_lambda_alias.usp_companies.function_name
  qualifier                         = aws_lambda_alias.usp_companies.function_version
  provisioned_concurrent_executions = var.minimum_usp_companies_lambda_provisioned_concurrent_executions
}

resource "aws_appautoscaling_target" "usp_companies" {
  depends_on         = [aws_lambda_alias.usp_companies]
  min_capacity       = var.minimum_usp_companies_lambda_provisioned_concurrent_executions
  max_capacity       = var.maximum_usp_companies_lambda_provisioned_concurrent_executions
  resource_id        = "function:${aws_lambda_function.usp_companies.function_name}:${aws_lambda_alias.usp_companies.name}"
  scalable_dimension = "lambda:function:ProvisionedConcurrency"
  service_namespace  = "lambda"
}

resource "aws_appautoscaling_policy" "usp_companies" {
  depends_on         = [aws_lambda_alias.usp_companies]
  name               = "auto-scaling-policy-${aws_lambda_function.usp_companies.function_name}"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.usp_companies.resource_id
  scalable_dimension = aws_appautoscaling_target.usp_companies.scalable_dimension
  service_namespace  = aws_appautoscaling_target.usp_companies.service_namespace

  target_tracking_scaling_policy_configuration {
    scale_in_cooldown  = 60
    scale_out_cooldown = 30
    target_value       = 0.8
    customized_metric_specification {
      metric_name = "LambdaProvisionedConcurrencyUtilization"
      statistic   = "Maximum"
      namespace   = aws_appautoscaling_target.usp_companies.service_namespace
    }
  }
}

resource "aws_lambda_function" "usp_companies" {
  depends_on    = [aws_opensearch_domain.os]
  function_name = "usp-${var.env}-company-search"
  filename      = data.archive_file.usp_companies.output_path
  runtime       = "nodejs22.x"
  handler       = "index.handler"
  role          = aws_iam_role.usp_companies.arn
  timeout       = 15
  memory_size   = var.lambda_memory_size

  ephemeral_storage {
    size = var.lambda_ephemeral_disk_size
  }

  vpc_config {
    subnet_ids         = local.subnets
    security_group_ids = [aws_security_group.usp_companies.id]
  }

  tracing_config {
    mode = "Active"
  }

  # adding aws distro of OTEL https://github.com/aws-observability/aws-otel-collector
  layers = [
    "arn:aws:lambda:eu-west-1:901920570463:layer:aws-otel-nodejs-amd64-ver-1-13-0:2",
    "arn:aws:lambda:eu-west-1:580247275435:layer:LambdaInsightsExtension:38"
  ]

  environment {
    variables = {
      AWS_LAMBDA_EXEC_WRAPPER = "/opt/otel-handler" # Required for OTEL
      SEARCH_CRITERIA_BUCKET  = "usp-${var.env}-search-criterias",
      SEARCH_CRITERIA_FILE    = "criterias.json",
      OPENSEARCH_ENDPOINT     = "https://${aws_opensearch_domain.os.endpoint}:443",
      OPENSEARCH_USER         = var.opensearch_user,
      OPENSEARCH_PASS         = var.opensearch_pass
      LOG_LEVEL               = var.log_level 
      IT_VAT_NO_ENABLED       = var.it_vat_no_enabled
    }
  }
}



data "archive_file" "usp_companies" {
  type        = "zip"
  output_path = ".terraform/lambda_companysearch.zip"

  source {
    content  = "hello"
    filename = "dummy.txt"
  }
}
// --- End USP Company Search Lambda ---


// --- Search Criteria Lambda ---

resource "aws_security_group" "usp_search_criteria" {
  name_prefix = "usp-search-criteria-lambda-sg-"
  description = "USP Search Criteria Lambda Security Group"
  vpc_id      = var.vpc_id

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}

data "archive_file" "usp_search_criteria" {
  type        = "zip"
  output_path = ".terraform/usp_search_criteria.zip"

  source {
    content  = "hello"
    filename = "dummy.txt"
  }
}

resource "aws_lambda_alias" "usp_search_criteria" {
  depends_on       = [aws_lambda_function.usp_search_criteria]
  name             = "usp-${var.env}-search-criteria"
  function_name    = aws_lambda_function.usp_search_criteria.function_name
  function_version = aws_lambda_function.usp_search_criteria.version
}

resource "aws_lambda_provisioned_concurrency_config" "usp_search_criteria" {
  depends_on                        = [aws_lambda_alias.usp_search_criteria]
  function_name                     = aws_lambda_alias.usp_search_criteria.function_name
  qualifier                         = aws_lambda_alias.usp_search_criteria.function_version
  provisioned_concurrent_executions = var.minimum_usp_search_criteria_lambda_provisioned_concurrent_executions
}

resource "aws_appautoscaling_target" "usp_search_criteria" {
  depends_on         = [aws_lambda_alias.usp_search_criteria]
  min_capacity       = var.minimum_usp_search_criteria_lambda_provisioned_concurrent_executions
  max_capacity       = var.maximum_usp_search_criteria_lambda_provisioned_concurrent_executions
  resource_id        = "function:${aws_lambda_function.usp_search_criteria.function_name}:${aws_lambda_alias.usp_search_criteria.name}"
  scalable_dimension = "lambda:function:ProvisionedConcurrency"
  service_namespace  = "lambda"
}

resource "aws_appautoscaling_policy" "usp_search_criteria" {
  depends_on         = [aws_lambda_alias.usp_search_criteria]
  name               = "auto-scaling-policy-${aws_lambda_function.usp_search_criteria.function_name}"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.usp_search_criteria.resource_id
  scalable_dimension = aws_appautoscaling_target.usp_search_criteria.scalable_dimension
  service_namespace  = aws_appautoscaling_target.usp_search_criteria.service_namespace

  target_tracking_scaling_policy_configuration {
    scale_in_cooldown  = 60
    scale_out_cooldown = 30
    target_value       = 0.8
    customized_metric_specification {
      metric_name = "LambdaProvisionedConcurrencyUtilization"
      statistic   = "Maximum"
      namespace   = aws_appautoscaling_target.usp_search_criteria.service_namespace
    }
  }
}

resource "aws_lambda_function" "usp_search_criteria" {
  function_name = "usp-${var.env}-search-criteria"
  filename      = data.archive_file.usp_search_criteria.output_path
  runtime       = "nodejs22.x"
  handler       = "index.handler"
  role          = aws_iam_role.usp_search_criteria.arn
  timeout       = 15
  memory_size   = var.lambda_memory_size

  ephemeral_storage {
    size = var.lambda_ephemeral_disk_size
  }

  vpc_config {
    subnet_ids         = local.subnets
    security_group_ids = [aws_security_group.usp_search_criteria.id]
  }

  tracing_config {
    mode = "Active"
  }

  # adding aws distro of OTEL https://github.com/aws-observability/aws-otel-collector
  layers = [
    "arn:aws:lambda:eu-west-1:901920570463:layer:aws-otel-nodejs-amd64-ver-1-13-0:2",
    "arn:aws:lambda:eu-west-1:580247275435:layer:LambdaInsightsExtension:38"
  ]

  environment {
    variables = {
      AWS_LAMBDA_EXEC_WRAPPER = "/opt/otel-handler" # Required for OTEL
      SEARCH_CRITERIA_BUCKET  = "usp-${var.env}-search-criterias",
      SEARCH_CRITERIA_FILE    = "criterias.json"
      SWAGGER_BUCKET          = "usp-${var.env}-search-criterias",
      SWAGGER_FILE            = "criterias.json"
    }
  }
}


// --- End Search Criteria Lambda ---

// --- Search Criteria Merge Lambda ---

resource "aws_security_group" "usp_search_criteria_merge" {
  name_prefix = "usp-search-criteria-merge-lambda-sg-"
  description = "USP Search Criteria Merge Lambda Security Group"
  vpc_id      = var.vpc_id

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}

data "archive_file" "usp_search_criteria_merge" {
  type        = "zip"
  output_path = ".terraform/usp_search_criteria_merge.zip"

  source {
    content  = "hello"
    filename = "dummy.txt"
  }
}

resource "aws_lambda_alias" "usp_search_criteria_merge" {
  depends_on       = [aws_lambda_function.usp_search_criteria_merge]
  name             = "usp-${var.env}-search-criteria-merge"
  function_name    = aws_lambda_function.usp_search_criteria_merge.function_name
  function_version = aws_lambda_function.usp_search_criteria_merge.version
}

resource "aws_lambda_provisioned_concurrency_config" "usp_search_criteria_merge" {
  depends_on                        = [aws_lambda_alias.usp_search_criteria_merge]
  function_name                     = aws_lambda_alias.usp_search_criteria_merge.function_name
  qualifier                         = aws_lambda_alias.usp_search_criteria_merge.function_version
  provisioned_concurrent_executions = var.minimum_usp_search_criteria_merge_lambda_provisioned_concurrent_executions
}

resource "aws_appautoscaling_target" "usp_search_criteria_merge" {
  depends_on         = [aws_lambda_alias.usp_search_criteria_merge]
  min_capacity       = var.minimum_usp_search_criteria_merge_lambda_provisioned_concurrent_executions
  max_capacity       = var.maximum_usp_search_criteria_merge_lambda_provisioned_concurrent_executions
  resource_id        = "function:${aws_lambda_function.usp_search_criteria_merge.function_name}:${aws_lambda_alias.usp_search_criteria_merge.name}"
  scalable_dimension = "lambda:function:ProvisionedConcurrency"
  service_namespace  = "lambda"
}

resource "aws_appautoscaling_policy" "usp_search_criteria_merge" {
  depends_on         = [aws_lambda_alias.usp_search_criteria_merge]
  name               = "auto-scaling-policy-${aws_lambda_function.usp_search_criteria_merge.function_name}"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.usp_search_criteria_merge.resource_id
  scalable_dimension = aws_appautoscaling_target.usp_search_criteria_merge.scalable_dimension
  service_namespace  = aws_appautoscaling_target.usp_search_criteria_merge.service_namespace

  target_tracking_scaling_policy_configuration {
    scale_in_cooldown  = 60
    scale_out_cooldown = 30
    target_value       = 0.8
    customized_metric_specification {
      metric_name = "LambdaProvisionedConcurrencyUtilization"
      statistic   = "Maximum"
      namespace   = aws_appautoscaling_target.usp_search_criteria_merge.service_namespace
    }
  }
}

resource "aws_lambda_function" "usp_search_criteria_merge" {
  function_name = "usp-${var.env}-search-criteria-merge"
  filename      = data.archive_file.usp_search_criteria_merge.output_path
  runtime       = "nodejs22.x"
  handler       = "index.handler"
  role          = aws_iam_role.usp_search_criteria_merge.arn
  timeout       = 15
  memory_size   = var.lambda_memory_size

  ephemeral_storage {
    size = var.lambda_ephemeral_disk_size
  }

  vpc_config {
    subnet_ids         = local.subnets
    security_group_ids = [aws_security_group.usp_search_criteria_merge.id]
  }

  tracing_config {
    mode = "Active"
  }

  # adding aws distro of OTEL https://github.com/aws-observability/aws-otel-collector
  layers = [
    "arn:aws:lambda:eu-west-1:901920570463:layer:aws-otel-nodejs-amd64-ver-1-13-0:2",
    "arn:aws:lambda:eu-west-1:580247275435:layer:LambdaInsightsExtension:38"
  ]

  environment {
    variables = {
      AWS_LAMBDA_EXEC_WRAPPER = "/opt/otel-handler" # Required for OTEL
    }
  }
}

// --- End Search Criteria Merge Lambda ---

// --- Search Criteria validate Lambda ---

resource "aws_security_group" "usp_search_criteria_validate" {
  name_prefix = "usp-search-criteria-validate-lambda-sg-"
  description = "USP Search Criteria validate Lambda Security Group"
  vpc_id      = var.vpc_id

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}

data "archive_file" "usp_search_criteria_validate" {
  type        = "zip"
  output_path = ".terraform/usp_search_criteria_validate.zip"

  source {
    content  = "hello"
    filename = "dummy.txt"
  }
}

resource "aws_lambda_alias" "usp_search_criteria_validate" {
  depends_on       = [aws_lambda_function.usp_search_criteria_validate]
  name             = "usp-${var.env}-search-criteria-validate"
  function_name    = aws_lambda_function.usp_search_criteria_validate.function_name
  function_version = aws_lambda_function.usp_search_criteria_validate.version
}

resource "aws_lambda_provisioned_concurrency_config" "usp_search_criteria_validate" {
  depends_on                        = [aws_lambda_alias.usp_search_criteria_validate]
  function_name                     = aws_lambda_alias.usp_search_criteria_validate.function_name
  qualifier                         = aws_lambda_alias.usp_search_criteria_validate.function_version
  provisioned_concurrent_executions = var.minimum_usp_search_criteria_validate_lambda_provisioned_concurrent_executions
}

resource "aws_appautoscaling_target" "usp_search_criteria_validate" {
  depends_on         = [aws_lambda_alias.usp_search_criteria_validate]
  min_capacity       = var.minimum_usp_search_criteria_validate_lambda_provisioned_concurrent_executions
  max_capacity       = var.maximum_usp_search_criteria_validate_lambda_provisioned_concurrent_executions
  resource_id        = "function:${aws_lambda_function.usp_search_criteria_validate.function_name}:${aws_lambda_alias.usp_search_criteria_validate.name}"
  scalable_dimension = "lambda:function:ProvisionedConcurrency"
  service_namespace  = "lambda"
}

resource "aws_appautoscaling_policy" "usp_search_criteria_validate" {
  depends_on         = [aws_lambda_alias.usp_search_criteria_validate]
  name               = "auto-scaling-policy-${aws_lambda_function.usp_search_criteria_validate.function_name}"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.usp_search_criteria_validate.resource_id
  scalable_dimension = aws_appautoscaling_target.usp_search_criteria_validate.scalable_dimension
  service_namespace  = aws_appautoscaling_target.usp_search_criteria_validate.service_namespace

  target_tracking_scaling_policy_configuration {
    scale_in_cooldown  = 60
    scale_out_cooldown = 30
    target_value       = 0.8
    customized_metric_specification {
      metric_name = "LambdaProvisionedConcurrencyUtilization"
      statistic   = "Maximum"
      namespace   = aws_appautoscaling_target.usp_search_criteria_validate.service_namespace
    }
  }
}

resource "aws_lambda_function" "usp_search_criteria_validate" {
  function_name = "usp-${var.env}-search-criteria-validate"
  filename      = data.archive_file.usp_search_criteria_validate.output_path
  runtime       = "nodejs22.x"
  handler       = "index.handler"
  role          = aws_iam_role.usp_search_criteria_validate.arn
  timeout       = 15
  memory_size   = var.lambda_memory_size

  ephemeral_storage {
    size = var.lambda_ephemeral_disk_size
  }

  vpc_config {
    subnet_ids         = local.subnets
    security_group_ids = [aws_security_group.usp_search_criteria_validate.id]
  }

  tracing_config {
    mode = "Active"
  }

  # adding aws distro of OTEL https://github.com/aws-observability/aws-otel-collector
  layers = [
    "arn:aws:lambda:eu-west-1:901920570463:layer:aws-otel-nodejs-amd64-ver-1-13-0:2",
    "arn:aws:lambda:eu-west-1:580247275435:layer:LambdaInsightsExtension:38"
  ]

  environment {
    variables = {
      AWS_LAMBDA_EXEC_WRAPPER = "/opt/otel-handler" # Required for OTEL
    }
  }
}

// --- End Search Criteria validate Lambda ---

// --- Search autocomplete Lambda ---

resource "aws_security_group" "usp_search_autocomplete" {
  name_prefix = "usp-search-autocomplete-lambda-sg-"
  description = "USP Search autocomplete Lambda Security Group"
  vpc_id      = var.vpc_id

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}


data "archive_file" "usp_search_autocomplete" {
  type        = "zip"
  output_path = ".terraform/usp_search_autocomplete.zip"

  source {
    content  = "hello"
    filename = "dummy.txt"
  }
}

resource "aws_lambda_alias" "usp_search_autocomplete" {
  depends_on       = [aws_lambda_function.usp_search_autocomplete]
  name             = "usp-${var.env}-search-autocomplete"
  function_name    = aws_lambda_function.usp_search_autocomplete.function_name
  function_version = aws_lambda_function.usp_search_autocomplete.version
}

resource "aws_lambda_provisioned_concurrency_config" "usp_search_autocomplete" {
  depends_on                        = [aws_lambda_alias.usp_search_autocomplete]
  function_name                     = aws_lambda_alias.usp_search_autocomplete.function_name
  qualifier                         = aws_lambda_alias.usp_search_autocomplete.function_version
  provisioned_concurrent_executions = var.minimum_usp_search_autocomplete_lambda_provisioned_concurrent_executions
}

resource "aws_appautoscaling_target" "usp_search_autocomplete" {
  depends_on         = [aws_lambda_alias.usp_search_autocomplete]
  min_capacity       = var.minimum_usp_search_autocomplete_lambda_provisioned_concurrent_executions
  max_capacity       = var.maximum_usp_search_autocomplete_lambda_provisioned_concurrent_executions
  resource_id        = "function:${aws_lambda_function.usp_search_autocomplete.function_name}:${aws_lambda_alias.usp_search_autocomplete.name}"
  scalable_dimension = "lambda:function:ProvisionedConcurrency"
  service_namespace  = "lambda"
}

resource "aws_appautoscaling_policy" "usp_search_autocomplete" {
  depends_on         = [aws_lambda_alias.usp_search_autocomplete]
  name               = "auto-scaling-policy-${aws_lambda_function.usp_search_autocomplete.function_name}"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.usp_search_autocomplete.resource_id
  scalable_dimension = aws_appautoscaling_target.usp_search_autocomplete.scalable_dimension
  service_namespace  = aws_appautoscaling_target.usp_search_autocomplete.service_namespace

  target_tracking_scaling_policy_configuration {
    scale_in_cooldown  = 60
    scale_out_cooldown = 30
    target_value       = 0.8
    customized_metric_specification {
      metric_name = "LambdaProvisionedConcurrencyUtilization"
      statistic   = "Maximum"
      namespace   = aws_appautoscaling_target.usp_search_autocomplete.service_namespace
    }
  }
}

resource "aws_lambda_function" "usp_search_autocomplete" {
  function_name = "usp-${var.env}-search-autocomplete"
  filename      = data.archive_file.usp_search_autocomplete.output_path
  runtime       = "nodejs22.x"
  handler       = "index.handler"
  role          = aws_iam_role.usp_search_autocomplete.arn
  timeout       = 15
  memory_size   = var.lambda_memory_size

  ephemeral_storage {
    size = var.lambda_ephemeral_disk_size
  }

  vpc_config {
    subnet_ids         = local.subnets
    security_group_ids = [aws_security_group.usp_search_autocomplete.id]
  }

  tracing_config {
    mode = "Active"
  }

  # adding aws distro of OTEL https://github.com/aws-observability/aws-otel-collector
  layers = [
    "arn:aws:lambda:eu-west-1:901920570463:layer:aws-otel-nodejs-amd64-ver-1-13-0:2",
    "arn:aws:lambda:eu-west-1:580247275435:layer:LambdaInsightsExtension:38"
  ]

  environment {
    variables = {
      AWS_LAMBDA_EXEC_WRAPPER = "/opt/otel-handler" # Required for OTEL
      OPENSEARCH_ENDPOINT     = "https://${aws_opensearch_domain.os.endpoint}:443",
      OPENSEARCH_USER         = var.opensearch_user,
      OPENSEARCH_PASS         = var.opensearch_pass
      COMPANY_SEARCH_AUTOCOMPLETE_ENABLE_SORT_BY_WEIGHT = var.company_search_autocomplete_enable_sort_by_weight
    }
  }
}

// --- End Search autocomplete Lambda ---

// --- USP Director Search Lambda ---

resource "aws_security_group" "usp_directors" {
  name_prefix = "usp-director-search-"
  description = "USP director search lambda security group"
  vpc_id      = var.vpc_id

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}

resource "aws_lambda_alias" "usp_directors" {
  depends_on       = [aws_lambda_function.usp_directors]
  name             = "usp-${var.env}-director-search"
  function_name    = aws_lambda_function.usp_directors.function_name
  function_version = aws_lambda_function.usp_directors.version
}

resource "aws_lambda_provisioned_concurrency_config" "usp_directors" {
  depends_on                        = [aws_lambda_alias.usp_directors]
  function_name                     = aws_lambda_alias.usp_directors.function_name
  qualifier                         = aws_lambda_alias.usp_directors.function_version
  provisioned_concurrent_executions = var.minimum_usp_directors_lambda_provisioned_concurrent_executions
}

resource "aws_appautoscaling_target" "usp_directors" {
  depends_on         = [aws_lambda_alias.usp_directors]
  min_capacity       = var.minimum_usp_directors_lambda_provisioned_concurrent_executions
  max_capacity       = var.maximum_usp_directors_lambda_provisioned_concurrent_executions
  resource_id        = "function:${aws_lambda_function.usp_directors.function_name}:${aws_lambda_alias.usp_directors.name}"
  scalable_dimension = "lambda:function:ProvisionedConcurrency"
  service_namespace  = "lambda"
}

resource "aws_appautoscaling_policy" "usp_directors" {
  depends_on         = [aws_lambda_alias.usp_directors]
  name               = "auto-scaling-policy-${aws_lambda_function.usp_directors.function_name}"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.usp_directors.resource_id
  scalable_dimension = aws_appautoscaling_target.usp_directors.scalable_dimension
  service_namespace  = aws_appautoscaling_target.usp_directors.service_namespace

  target_tracking_scaling_policy_configuration {
    scale_in_cooldown  = 60
    scale_out_cooldown = 30
    target_value       = 0.8
    customized_metric_specification {
      metric_name = "LambdaProvisionedConcurrencyUtilization"
      statistic   = "Maximum"
      namespace   = aws_appautoscaling_target.usp_directors.service_namespace
    }
  }
}

resource "aws_lambda_function" "usp_directors" {
  depends_on    = [aws_opensearch_domain.os]
  function_name = "usp-${var.env}-director-search"
  filename      = data.archive_file.usp_directors.output_path
  runtime       = "nodejs22.x"
  handler       = "index.handler"
  role          = aws_iam_role.usp_directors.arn
  timeout       = 15
  memory_size   = var.lambda_memory_size

  ephemeral_storage {
    size = var.lambda_ephemeral_disk_size
  }

  vpc_config {
    subnet_ids         = local.subnets
    security_group_ids = [aws_security_group.usp_directors.id]
  }

  tracing_config {
    mode = "Active"
  }

  # adding aws distro of OTEL https://github.com/aws-observability/aws-otel-collector
  layers = [
    "arn:aws:lambda:eu-west-1:901920570463:layer:aws-otel-nodejs-amd64-ver-1-13-0:2",
    "arn:aws:lambda:eu-west-1:580247275435:layer:LambdaInsightsExtension:38"
  ]

  environment {
    variables = {
      AWS_LAMBDA_EXEC_WRAPPER = "/opt/otel-handler" # Required for OTEL
      SEARCH_CRITERIA_BUCKET  = "usp-${var.env}-search-criterias",
      SEARCH_CRITERIA_FILE    = "criterias.json",
      OPENSEARCH_ENDPOINT     = "https://${aws_opensearch_domain.os.endpoint}:443",
      OPENSEARCH_USER         = var.opensearch_user,
      OPENSEARCH_PASS         = var.opensearch_pass
    }
  }
}

data "archive_file" "usp_directors" {
  type        = "zip"
  output_path = ".terraform/lambda_directorsearch.zip"

  source {
    content  = "hello"
    filename = "dummy.txt"
  }
}

// --- End USP Director Search Lambda ---
