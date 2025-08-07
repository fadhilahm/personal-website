terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.4"
    }
  }
}

resource "vercel_project" "frontend" {
  name           = var.project_name
  framework      = "nextjs"
  root_directory = "frontend"
  git_repository = {
    type              = "github"
    repo              = var.github_repo
    production_branch = "main"
  }
  build_command        = "npm run build"
  dev_command         = "npm run dev"
  install_command     = "npm install"
  output_directory    = ".next"
  # Environment variables will be managed separately using vercel_project_environment_variable resources
}

resource "vercel_deployment" "frontend" {
  project_id  = vercel_project.frontend.id
  production  = var.is_production
  ref         = var.git_branch
  delete_on_destroy = true
}

# Environment variables for all environments (production, preview, development)
resource "vercel_project_environment_variable" "environment_variables" {
  for_each = var.environment_variables

  project_id = vercel_project.frontend.id
  key        = each.key
  value      = each.value
  target     = ["production", "preview", "development"]
}

# Production-only environment variables
resource "vercel_project_environment_variable" "production_only" {
  for_each = var.production_only_variables

  project_id = vercel_project.frontend.id
  key        = each.key
  value      = each.value
  target     = ["production"]
}

# Preview-only environment variables  
resource "vercel_project_environment_variable" "preview_only" {
  for_each = var.preview_only_variables

  project_id = vercel_project.frontend.id
  key        = each.key
  value      = each.value
  target     = ["preview"]
}

# Development-only environment variables
resource "vercel_project_environment_variable" "development_only" {
  for_each = var.development_only_variables

  project_id = vercel_project.frontend.id
  key        = each.key
  value      = each.value
  target     = ["development"]
}

resource "vercel_project_domain" "domain" {
  for_each = toset(var.domains)

  project_id = vercel_project.frontend.id
  domain     = each.value
}

output "domains" {
  value = [for domain in vercel_project_domain.domain : domain.domain]
  description = "List of configured domains"
} 