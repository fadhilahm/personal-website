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