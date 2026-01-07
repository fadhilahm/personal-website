# Call the frontend module
module "frontend" {
  source = "../../modules/frontend"

  # Site configuration
  site_name     = "ai-portfolio-${var.environment}"
  github_repo   = var.github_repo
  github_branch = "main"

  # Build configuration
  build_command = "cd frontend && npm ci && npm run build"
  publish_dir   = "frontend/dist"

  # Environment variables for the frontend
  environment_variables = {
    NEXT_PUBLIC_GITHUB_USERNAME = {
      value   = "fadhilahm"
      context = "all"
    }
  }
}
