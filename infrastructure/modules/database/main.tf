terraform {
  required_version = ">= 1.0.0"
}

output "database_url" {
  value       = var.database_url
  description = "MySQL database connection URL"
  sensitive   = true
} 
