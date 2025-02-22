variable "project_name" {
  description = "Name of the Supabase project"
  type        = string
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