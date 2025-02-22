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

output "service_id" {
  value = railway_service.database.id
  description = "Railway service ID for the database"
} 
