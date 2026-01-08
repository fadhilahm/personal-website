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
  description = "Directory to publish (relative to repo root)"
  default     = "frontend/dist"
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
