variable "railway_project_id" {
  type        = string
  description = "Railway project ID"
}

variable "railway_environment_name" {
  type        = string
  description = "Railway environment name for service variables"
}

variable "db_name" {
  type        = string
  description = "Railway MySQL database name"
}

variable "db_user" {
  type        = string
  description = "Railway MySQL database user"
}

variable "db_password" {
  type        = string
  description = "Railway MySQL database user password"
  sensitive   = true
}

variable "db_root_password" {
  type        = string
  description = "Railway MySQL root password"
  sensitive   = true
}

variable "db_volume_enabled" {
  type        = bool
  description = "Whether to provision a Railway volume for MySQL"
  default     = true
}

variable "db_volume_name" {
  type        = string
  description = "Optional Railway volume name override"
  default     = null
  nullable    = true
}

