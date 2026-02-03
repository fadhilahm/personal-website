variable "netlify_api_token" {
  type        = string
  sensitive   = true
  description = "Netlify Personal Access Token"
}

variable "site_id" {
  type        = string
  description = "ID of the Netlify site"
  nullable    = false
}

variable "team_id" {
  type        = string
  description = "ID of the Netlify team"
  nullable    = false
}

variable "github_repo" {
  type        = string
  description = "GitHub repository path"
  default     = "fadhilahm/personal-website"
}

variable "environment" {
  type        = string
  description = "Environment name"
  default     = "production"
}

variable "custom_domain" {
  type        = string
  description = "Custom domain"
  default     = "fadhilahm.dev"
}

variable "railway_api_token" {
  type        = string
  description = "Railway API token"
  sensitive   = true
}

variable "railway_project_id" {
  type        = string
  description = "Railway project ID"
}

variable "railway_environment_name" {
  type        = string
  description = "Railway environment name for service variables"
  default     = "production"
}

variable "db_name" {
  type        = string
  description = "Railway MySQL database name"
  default     = "personal_website_db"
}

variable "db_user" {
  type        = string
  description = "Railway MySQL database user"
  default     = "app_user"
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
