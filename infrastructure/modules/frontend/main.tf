# Deploy key for GitHub integration
resource "netlify_deploy_key" "frontend" {}

# Frontend site on Netlify
resource "netlify_site" "frontend" {
  name = var.site_name

  repo {
    provider      = "github"
    repo_path     = var.github_repo
    repo_branch   = var.github_branch
    command       = var.build_command
    dir           = var.publish_dir
    deploy_key_id = netlify_deploy_key.frontend.id
  }

  # Optional custom domain
  dynamic "custom_domain" {
    for_each = var.custom_domain != null ? [1] : []
    content {
      domain_name = var.custom_domain
    }
  }
}

# Environment variables for the frontend
resource "netlify_environment_variable" "frontend_vars" {
  for_each = var.environment_variables

  site_id = netlify_site.frontend.id
  key     = each.key

  values = [
    {
      value   = each.value.value
      context = each.value.context
    }
  ]
}
