variable "vercel_token" {
  description = "Vercel API token"
  type        = string
  sensitive   = true
}

variable "railway_token" {
  description = "Railway API token"
  type        = string
  sensitive   = true
}

variable "github_repo" {
  description = "GitHub repository name (format: username/repo)"
  type        = string
}

variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "personal-website"
}

variable "database_url" {
  description = "MySQL database connection URL from Railway"
  type        = string
  sensitive   = true
}

variable "domains" {
  description = "List of custom domains to add to the Vercel project"
  type        = list(string)
  default     = []
}

variable "github_username" {
  description = "GitHub username for public environment variables"
  type        = string
} 