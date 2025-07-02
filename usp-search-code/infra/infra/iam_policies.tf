resource "aws_iam_policy" "os_snapshot_policy" {
  name = "usp_${var.env}_os_snapshot_policy"
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "s3:ListBucket",
          "kms:ListKeys",
          "kms:ListAliases",
          "kms:DescribeKey",
          "kms:GetPublicKey",
          "kms:Decrypt",
          "kms:Encrypt",
          "kms:GenerateDataKey",
          "kms:GenerateDataKeyPair",
        ],
        Effect = "Allow",
        Resource = [
          "arn:aws:s3:::usp-dev-os-snapshots",
          "arn:aws:s3:::usp-test-os-snapshots",
          "arn:aws:s3:::usp-stage-os-snapshots",
          "arn:aws:s3:::usp-prod-os-snapshots",
          "arn:aws:kms:eu-west-1:712390586371:key/03148a19-f351-4cc0-8849-c7a01e42b38d", # usp-dev-key
          "arn:aws:kms:eu-west-1:712390586371:key/f7447fb7-fa77-4837-b6e6-afdc697b3bd2", # usp-test-key
          "arn:aws:kms:eu-west-1:826903919394:key/1f219b2a-23a6-4c10-9e9e-b791fda01353", # usp-stage-key
          "arn:aws:kms:eu-west-1:826903919394:key/420c4132-b6e3-4614-ab8b-6e7cb4da25db", # usp-prod-key
        ]
      },
      {
        Action = [
          "s3:GetObject",
          "s3:PutObject",
          "s3:DeleteObject",
          "iam:PassRole",
          "es:ESHttpPut"
        ],
        Effect = "Allow",
        Resource = [
          "arn:aws:s3:::usp-dev-os-snapshots/*",
          "arn:aws:s3:::usp-test-os-snapshots/*",
          "arn:aws:s3:::usp-stage-os-snapshots/*",
          "arn:aws:s3:::usp-prod-os-snapshots/*",
          "arn:aws:iam::712390586371:role/usp_dev_os_snapshot_role",
          "arn:aws:iam::712390586371:role/usp_test_os_snapshot_role",
          "arn:aws:iam::826903919394:role/usp_stage_os_snapshot_role",
          "arn:aws:iam::826903919394:role/usp_prod_os_snapshot_role",
          "arn:aws:es:eu-west-1:826903919394:domain/usp-stage",
        ]
      },
      {
        Action = [
          "es:*"
        ],
        Effect = "Allow",
        Resource = [
          "arn:aws:es:eu-west-1:826903919394:domain/usp-stage",
        ]
        Sid = "AllowESActions"
      }
    ]
  })
}

resource "aws_iam_policy_attachment" "os_snapshot_policy_attach" {
  name       = "usp_${var.env}_os_snapshot_policy_attachment"
  roles      = [aws_iam_role.os_snapshot_role.name]
  policy_arn = aws_iam_policy.os_snapshot_policy.arn
}

resource "aws_iam_policy" "usp_companies" {
  name = "usp-${var.env}-company-search-policy"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents",
          "lambda:CreateCodeSigningConfig",
          "lambda:UpdateCodeSigningConfig",
          "lambda:GetCodeSigningConfig"
        ]
        Resource = ["arn:aws:logs:*:*:*"]
      },
      {
        Action = [
          "xray:PutTraceSegments",
          "xray:PutTelemetryRecords"
        ]
        Effect   = "Allow"
        Resource = "*"
      },
      {
        Action = [
          "ec2:CreateNetworkInterface",
          "ec2:DescribeNetworkInterfaces",
          "ec2:DeleteNetworkInterface"
        ]
        Effect   = "Allow"
        Resource = "*"
      }
    ]
  })
}

# Required for Lambda Insights
resource "aws_iam_role_policy_attachment" "usp_companies_insights_policy" {
  policy_arn = "arn:aws:iam::aws:policy/CloudWatchLambdaInsightsExecutionRolePolicy"
  role       = aws_iam_role.usp_companies.name
}

resource "aws_iam_role_policy_attachment" "usp_companies" {
  policy_arn = aws_iam_policy.usp_companies.arn
  role       = aws_iam_role.usp_companies.name
}

resource "aws_iam_policy" "usp_search_criteria" {
  name = "usp-${var.env}-search-criteria-lambda-policy"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = ["arn:aws:logs:*:*:*"]
      },
      {
        Action = [
          "xray:PutTraceSegments",
          "xray:PutTelemetryRecords"
        ]
        Effect   = "Allow"
        Resource = "*"
      },
      {
        Action = [
          "ec2:CreateNetworkInterface",
          "ec2:DescribeNetworkInterfaces",
          "ec2:DeleteNetworkInterface"
        ]
        Effect   = "Allow"
        Resource = "*"
      }
    ]
  })
}

# Required for Lambda Insights
resource "aws_iam_role_policy_attachment" "usp_search_criteria_insights_policy" {
  policy_arn = "arn:aws:iam::aws:policy/CloudWatchLambdaInsightsExecutionRolePolicy"
  role       = aws_iam_role.usp_search_criteria.name
}

resource "aws_iam_role_policy_attachment" "usp_search_criteria" {
  policy_arn = aws_iam_policy.usp_search_criteria.arn
  role       = aws_iam_role.usp_search_criteria.name
}

resource "aws_iam_policy" "usp_search_criteria_merge" {
  name = "usp-${var.env}-search-criteria-merge-lambda-policy"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = ["arn:aws:logs:*:*:*"]
      },
      {
        Action = [
          "xray:PutTraceSegments",
          "xray:PutTelemetryRecords"
        ]
        Effect   = "Allow"
        Resource = "*"
      },
      {
        Action = [
          "ec2:CreateNetworkInterface",
          "ec2:DescribeNetworkInterfaces",
          "ec2:DeleteNetworkInterface"
        ]
        Effect   = "Allow"
        Resource = "*"
      }
    ]
  })
}

# Required for Lambda Insights
resource "aws_iam_role_policy_attachment" "usp_search_criteria_merge_insights_policy" {
  policy_arn = "arn:aws:iam::aws:policy/CloudWatchLambdaInsightsExecutionRolePolicy"
  role       = aws_iam_role.usp_search_criteria_merge.name
}

resource "aws_iam_role_policy_attachment" "usp_search_criteria_merge" {
  policy_arn = aws_iam_policy.usp_search_criteria_merge.arn
  role       = aws_iam_role.usp_search_criteria_merge.name
}

resource "aws_iam_policy" "usp_search_criteria_validate" {
  name = "usp-${var.env}-search-criteria-validate-lambda-policy"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = ["arn:aws:logs:*:*:*"]
      },
      {
        Action = [
          "xray:PutTraceSegments",
          "xray:PutTelemetryRecords"
        ]
        Effect   = "Allow"
        Resource = "*"
      },
      {
        Action = [
          "ec2:CreateNetworkInterface",
          "ec2:DescribeNetworkInterfaces",
          "ec2:DeleteNetworkInterface"
        ]
        Effect   = "Allow"
        Resource = "*"
      }
    ]
  })
}

# Required for Lambda Insights
resource "aws_iam_role_policy_attachment" "usp_search_criteria_validate_insights_policy" {
  policy_arn = "arn:aws:iam::aws:policy/CloudWatchLambdaInsightsExecutionRolePolicy"
  role       = aws_iam_role.usp_search_criteria_validate.name
}

resource "aws_iam_role_policy_attachment" "usp_search_criteria_validate" {
  policy_arn = aws_iam_policy.usp_search_criteria_validate.arn
  role       = aws_iam_role.usp_search_criteria_validate.name
}

resource "aws_iam_policy" "usp_search_autocomplete" {
  name = "usp-${var.env}-search-autocomplete-lambda-policy"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = ["arn:aws:logs:*:*:*"]
      },
      {
        Action = [
          "xray:PutTraceSegments",
          "xray:PutTelemetryRecords"
        ]
        Effect   = "Allow"
        Resource = "*"
      },
      {
        Action = [
          "ec2:CreateNetworkInterface",
          "ec2:DescribeNetworkInterfaces",
          "ec2:DeleteNetworkInterface"
        ]
        Effect   = "Allow"
        Resource = "*"
      }
    ]
  })
}

# Required for Lambda Insights
resource "aws_iam_role_policy_attachment" "usp_search_autocomplete_insights_policy" {
  policy_arn = "arn:aws:iam::aws:policy/CloudWatchLambdaInsightsExecutionRolePolicy"
  role       = aws_iam_role.usp_search_autocomplete.name
}

resource "aws_iam_role_policy_attachment" "usp_search_autocomplete" {
  policy_arn = aws_iam_policy.usp_search_autocomplete.arn
  role       = aws_iam_role.usp_search_autocomplete.name
}

resource "aws_iam_policy" "usp_directors" {
  name = "usp-${var.env}-director-search-policy"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents",
          "lambda:CreateCodeSigningConfig",
          "lambda:UpdateCodeSigningConfig",
          "lambda:GetCodeSigningConfig"
        ]
        Resource = ["arn:aws:logs:*:*:*"]
      },
      {
        Action = [
          "xray:PutTraceSegments",
          "xray:PutTelemetryRecords"
        ]
        Effect   = "Allow"
        Resource = "*"
      },
      {
        Action = [
          "ec2:CreateNetworkInterface",
          "ec2:DescribeNetworkInterfaces",
          "ec2:DeleteNetworkInterface"
        ]
        Effect   = "Allow"
        Resource = "*"
      }
    ]
  })
}

# Required for Lambda Insights
resource "aws_iam_role_policy_attachment" "usp_directors_insights_policy" {
  policy_arn = "arn:aws:iam::aws:policy/CloudWatchLambdaInsightsExecutionRolePolicy"
  role       = aws_iam_role.usp_directors.name
}

resource "aws_iam_role_policy_attachment" "usp_directors" {
  policy_arn = aws_iam_policy.usp_directors.arn
  role       = aws_iam_role.usp_directors.name
}
