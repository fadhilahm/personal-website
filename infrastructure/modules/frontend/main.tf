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

resource "vercel_project_git" "frontend" {
  project_id = vercel_project.frontend.id
  
  git_repository = {
    type = "github"
    repo = var.github_repo
  }

  production_branch_configuration = {
    branch_name                   = "main"
    auto_deployment_enabled       = false
    comments_enabled             = true
    pull_request_preview_enabled = true
  }
}

resource "vercel_deployment" "frontend" {
  project_id  = vercel_project.frontend.id
  production  = var.is_production
  ref         = var.git_branch
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