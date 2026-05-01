variable "cluster_name" {
  default = "task-eks-cluster"
}

variable "subnet_ids" {
  type = list(string)
}

variable "vpc_id" {}
