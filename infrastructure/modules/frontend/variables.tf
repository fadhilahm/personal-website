variable "project_name" {
  description = "Name of the Vercel project"
  type        = string
}

variable "github_repo" {
  description = "GitHub repository name (format: username/repo)"
  type        = string
}

variable "environment_variables" {
  description = "Environment variables for all environments (production, preview, development)"
  type        = map(string)
  default     = {}
}

variable "production_only_variables" {
  description = "Environment variables for production environment only"
  type        = map(string)
  default     = {}
}

variable "preview_only_variables" {
  description = "Environment variables for preview environment only"
  type        = map(string)
  default     = {}
}

variable "development_only_variables" {
  description = "Environment variables for development environment only"
  type        = map(string)
  default     = {}
}

variable "is_production" {
  description = "Whether this is a production deployment"
  type        = bool
  default     = false
}

variable "git_branch" {
  description = "Git branch to deploy"
  type        = string
  default     = "main"
}

variable "domains" {
  description = "List of custom domains to add to the Vercel project"
  type        = list(string)
  default     = []
} 