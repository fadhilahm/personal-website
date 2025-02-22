terraform {
  required_providers {
    railway = {
      source = "terraform-community-providers/railway"
      version = "~> 0.1"
    }
  }
}

resource "railway_project" "main" {
  name = var.project_name
}

resource "railway_service" "database" {
  project_id = railway_project.main.id
  name       = "postgresql"
  environment = var.environment
}

# Outputs for verification
output "project_name" {
  value = railway_project.main.name
  description = "Name of the Railway project"
}

output "project_id" {
  value = railway_project.main.id
  description = "Railway project ID - use this for project-specific operations"
}

output "environment" {
  value = railway_service.database.environment
  description = "Environment name"
}

output "database_url" {
  value     = railway_service.database.database_url
  sensitive = true
  description = "Database connection URL"
} 