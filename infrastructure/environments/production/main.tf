module "frontend" {
  source = "../../modules/frontend"

  # Site configuration
  site_id       = var.site_id
  team_id       = var.team_id
  custom_domain = var.custom_domain
  github_repo   = var.github_repo
  github_branch = "main"

  # Build configuration
  build_command = "cd frontend && npm ci && npm run build"
  publish_dir   = "frontend/.next"

  # Environment variables for the frontend
  environment_variables = {
    NEXT_PUBLIC_GITHUB_USERNAME = {
      value   = "fadhilahm"
      context = "all"
    }
  }
}

module "db" {
  source = "../../modules/db"

  railway_project_id       = var.railway_project_id
  railway_environment_name = var.railway_environment_name
  db_name                  = var.db_name
  db_user                  = var.db_user
  db_password              = var.db_password
  db_root_password         = var.db_root_password
  db_volume_enabled        = var.db_volume_enabled
  db_volume_name           = var.db_volume_name
}
