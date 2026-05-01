terraform {
  backend "s3" {
    bucket         = "satya-terraform-state-052004"
    key            = "vpc/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-lock"
  }
}

provider "aws" {
  region = "us-east-1"
}
