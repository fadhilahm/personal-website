variable "project_name" {
  description = "Name of the Railway project"
  type        = string
}

variable "environment" {
  description = "Environment name (e.g., production, development)"
  type        = string
  default     = "production"
}

variable "team_id" {
  description = "Railway team ID (optional - for team projects)"
  type        = string
  default     = null  # Individual account by default
}

variable "organization_id" {
  description = "Supabase organization ID"
  type        = string
}

variable "region" {
  description = "Region for the Supabase project"
  type        = string
  default     = "us-east-1"
}

variable "db_password" {
  description = "Database password"
  type        = string
  sensitive   = true
} 