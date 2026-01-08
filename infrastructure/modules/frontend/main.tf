# Deploy key for GitHub integration
# Note: This creates a deploy key, but linking it to a GitHub repo must be done
# manually in the Netlify UI after the site is created
resource "netlify_deploy_key" "frontend" {}

# Reference to existing Netlify site
# IMPORTANT: The site must be created manually first via Netlify UI/API.
# After creation, link the GitHub repository in the Netlify UI using the deploy key
# from the output `deploy_key_public`.
data "netlify_site" "frontend" {
  id = var.site_id
}

# Build settings for the site
resource "netlify_site_build_settings" "frontend" {
  site_id           = data.netlify_site.frontend.id
  build_command     = var.build_command
  publish_directory = var.publish_dir
  production_branch = var.github_branch
}

# Domain settings (optional custom domain)
resource "netlify_site_domain_settings" "frontend" {
  count   = var.custom_domain != null ? 1 : 0
  site_id = data.netlify_site.frontend.id

  custom_domain = var.custom_domain
}

# Environment variables for the frontend
resource "netlify_environment_variable" "frontend_vars" {
  for_each = var.environment_variables

  site_id = data.netlify_site.frontend.id
  team_id = var.team_id
  key     = each.key

  values = [
    {
      value   = each.value.value
      context = each.value.context
    }
  ]
}
