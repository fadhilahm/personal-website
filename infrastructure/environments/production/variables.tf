variable "netlify_api_token" {
  type        = string
  sensitive   = true
  description = "Netlify Personal Access Token"
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
