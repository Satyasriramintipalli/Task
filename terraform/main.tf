##################################
# VPC MODULE
##################################
module "vpc" {
  source = "./modules/vpc"
}

##################################
# EKS MODULE
##################################
module "eks" {
  source = "./modules/eks"

  cluster_name = var.cluster_name

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnet_ids
}

##################################
# S3 BUCKET
##################################
resource "aws_s3_bucket" "app_bucket" {
  bucket = "crud-app-bucket-${var.cluster_name}"
}
