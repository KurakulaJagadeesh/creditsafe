locals {
  snapshot_bucket = "usp-${var.env}-os-snapshots"
  s3_buckets = [
    "usp-${var.env}-lambda-bucket",
    "usp-${var.env}-search-criterias-code",
    "usp-${var.env}-search-criterias-merge-code",
    "usp-${var.env}-search-criterias",
    "usp-${var.env}-search-criterias-validate-code",
    "usp-${var.env}-search-autocomplete-code",
    "${local.snapshot_bucket}"
  ]
}

resource "aws_s3_bucket" "s3_buckets" {
  for_each = toset(local.s3_buckets)

  bucket        = each.value
  force_destroy = false
}

resource "aws_s3_bucket_server_side_encryption_configuration" "s3_buckets" {
  for_each = aws_s3_bucket.s3_buckets

  bucket = each.value.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm     = "aws:kms"
      kms_master_key_id = aws_kms_key.usp.arn
    }
  }
}

resource "aws_s3_bucket_public_access_block" "s3_buckets" {
  for_each = aws_s3_bucket.s3_buckets

  bucket = each.value.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "s3_buckets" {
  for_each = { for bucket_name in local.s3_buckets : bucket_name => bucket_name if bucket_name != "${local.snapshot_bucket}" }

  bucket = aws_s3_bucket.s3_buckets[each.key].id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_policy" "snapshot_bucket_allow_access_from_prod_account" {
  bucket = local.snapshot_bucket
  policy = data.aws_iam_policy_document.snapshot_bucket_allow_access_from_prod_account.json
}

data "aws_iam_policy_document" "snapshot_bucket_allow_access_from_prod_account" {
  version = "2012-10-17"

  statement {
    sid     = "Stmt1687894628072"
    effect  = "Allow"
    actions = ["s3:*"]
    resources = [
      "arn:aws:s3:::${local.snapshot_bucket}/*",
      "arn:aws:s3:::${local.snapshot_bucket}",
    ]

    principals {
      type = "AWS"
      identifiers = [
        "arn:aws:iam::712390586371:root",
        "arn:aws:iam::826903919394:root"
      ]
    }
  }
  statement {
    sid    = "Statement1"
    effect = "Allow"
    actions = [
      "s3:ListBucket",
      "s3:GetObject",
    ]
    resources = [
      "arn:aws:s3:::${local.snapshot_bucket}/*",
      "arn:aws:s3:::${local.snapshot_bucket}",
    ]

    principals {
      type = "AWS"
      identifiers = [
        "arn:aws:iam::712390586371:role/usp_dev_os_snapshot_role",
        "arn:aws:iam::712390586371:role/usp_test_os_snapshot_role",
        "arn:aws:iam::826903919394:role/usp_stage_os_snapshot_role"
      ]
    }
  }
}

