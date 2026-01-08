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
