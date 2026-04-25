module "vpc" {
  source = "./modules/vpc"
}

module "eks" {
  source = "./modules/eks"

  subnet_ids = [
    module.vpc.public_subnet_id,
    module.vpc.private_subnet_id
  ]

  vpc_id = module.vpc.vpc_id
}
