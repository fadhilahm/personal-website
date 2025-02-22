variable "project_name" {
  description = "Name of the Railway project"
  type        = string
}

variable "environment" {
  description = "Environment name (e.g., production, development)"
  type        = string
  default     = "production"
}

variable "database_url" {
  description = "MySQL database connection URL from Railway"
  type        = string
  sensitive   = true
} 