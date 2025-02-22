terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.4"
    }
  }
}

resource "vercel_project" "frontend" {
  name      = var.project_name
  framework = "nextjs"
  root_directory = "frontend"
  git_repository = {
    type = "github"
    repo = var.github_repo
  }
  environment = [
    for key, value in var.environment_variables : {
      key    = key
      value  = value
      target = ["production"]
    }
  ]
}

resource "vercel_deployment" "frontend" {
  project_id  = vercel_project.frontend.id
  production  = var.is_production
  ref         = var.git_branch
} 