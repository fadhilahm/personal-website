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
