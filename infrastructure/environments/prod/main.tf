terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.4"
    }
    railway = {
      source = "terraform-community-providers/railway"
      version = "~> 0.1"
    }
  }
}

provider "vercel" {
  api_token = var.vercel_token
}

provider "railway" {
  token = var.railway_token
}

module "frontend" {
  source = "../../modules/frontend"

  project_name = "personal-website"
  github_repo  = var.github_repo
  is_production = true
  environment_variables = {
    DATABASE_URL = module.database.database_url
  }
}

module "database" {
  source = "../../modules/database"

  project_name = "personal-website"
  environment  = "production"
}

# Outputs to verify Railway configuration
output "railway_project_name" {
  value = module.database.project_name
  description = "Name of the Railway project created"
}

output "railway_environment" {
  value = module.database.environment
  description = "Railway environment (production/development)"
}

output "database_connection_status" {
  value = module.database.database_url != "" ? "Database URL configured successfully" : "Database URL not configured"
  description = "Status of database connection configuration"
} 