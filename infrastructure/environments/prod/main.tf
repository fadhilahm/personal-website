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

locals {
  project_name = var.project_name
}

module "frontend" {
  source = "../../modules/frontend"

  project_name = local.project_name
  github_repo  = var.github_repo
  is_production = true
  environment_variables = {
    DATABASE_URL = module.database.database_url
  }
  domains = ["fadhilahm.dev"]
}

module "database" {
  source = "../../modules/database"

  project_name = local.project_name
  database_url = var.database_url
}

# Outputs to verify configuration
output "database_connection_status" {
  value = module.database.database_url != "" ? "Database URL configured successfully" : "Database URL not configured"
  description = "Status of database connection configuration"
  sensitive   = true
}

output "configured_domains" {
  value       = module.frontend.domains
  description = "List of configured domains for the Vercel project"
} 