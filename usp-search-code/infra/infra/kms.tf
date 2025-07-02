resource "aws_kms_key" "usp" {
  description              = "KMS Key for USP Search API-Gateway Infra"
  customer_master_key_spec = "SYMMETRIC_DEFAULT"
  deletion_window_in_days  = 30
  enable_key_rotation      = true
}

resource "aws_kms_alias" "s3" {
  name          = "alias/usp-${var.env}-key"
  target_key_id = aws_kms_key.usp.key_id
}

resource "aws_kms_key_policy" "usp" {
  key_id = aws_kms_key.usp.id
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Sid" : "Enable IAM User Permissions",
        "Effect" : "Allow",
        "Principal" : {
          "AWS" : [
            "arn:aws:iam::712390586371:root",
            "arn:aws:iam::826903919394:root",
            "*"
          ]
        },
        "Action" : "kms:*",
        "Resource" : "*"
      }
    ]
  })
}

