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
  build_command        = "npm run build"
  dev_command         = "npm run dev"
  install_command     = "npm install"
  output_directory    = ".next"
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
  delete_on_destroy = true
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