variable "vercel_token" {
  description = "Vercel API token"
  type        = string
  sensitive   = true
}

variable "supabase_access_token" {
  description = "Supabase access token"
  type        = string
  sensitive   = true
}

variable "github_repo" {
  description = "GitHub repository name (format: username/repo)"
  type        = string
}

variable "supabase_org_id" {
  description = "Supabase organization ID"
  type        = string
}

variable "database_password" {
  description = "Database password"
  type        = string
  sensitive   = true
} 