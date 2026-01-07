variable "site_name" {
  type        = string
  description = "Name for the Netlify site"
}

variable "github_repo" {
  type        = string
  description = "GitHub repository path (owner/repo)"
}

variable "github_branch" {
  type        = string
  description = "Branch to deploy from"
  default     = "main"
}

variable "build_command" {
  type        = string
  description = "Build command to run"
  default     = "cd frontend && npm install && npm run build"
}

variable "publish_dir" {
  type        = string
  description = "Directory to publish"
  default     = "/frontend/dist"
}

variable "custom_domain" {
  type        = string
  description = "Custom domain (optional)"
  default     = null
}

variable "environment_variables" {
  type = map(object({
    value   = string
    context = string
  }))
  description = "Environment variables for the site"
  default     = {}
}
