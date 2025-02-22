terraform {
  required_providers {
    railway = {
      source = "terraform-community-providers/railway"
      version = "~> 0.1"
    }
  }
}

# Create new project
resource "railway_project" "main" {
  name = var.project_name
}

# Add MySQL service
resource "railway_service" "database" {
  project_id = railway_project.main.id
  name       = "mysql"
  environment = var.environment
}

# Outputs for verification
output "project_name" {
  value = railway_project.main.name
  description = "Name of the Railway project"
}

output "project_id" {
  value = railway_project.main.id
  description = "Railway project ID"
}

output "environment" {
  value = railway_service.database.environment
  description = "Environment name"
}

output "database_url" {
  value     = railway_service.database.database_url
  sensitive = true
  description = "MySQL connection URL"
} 