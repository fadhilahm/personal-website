variable "project_name" {
  description = "Name of the Vercel project"
  type        = string
}

variable "github_repo" {
  description = "GitHub repository name (format: username/repo)"
  type        = string
}

variable "environment_variables" {
  description = "Environment variables for the Vercel project"
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