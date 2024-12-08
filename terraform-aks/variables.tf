variable "subscription_id" {}
variable "resource_group_name" {
  default = "project-cr"
}
variable "location" {
  default = "UK South"
}
variable "container_registry_name" {
  default = "carwash"
}
variable "aks_cluster_name" {
  default = "nodejs-devops-cluster"
}
variable "node_count" {
  default = 2
}
