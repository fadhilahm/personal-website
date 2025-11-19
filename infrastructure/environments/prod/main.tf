terraform {
  required_version = ">= 1.0"
}

module "frontend" {
  source = "../../modules/frontend"

  netlify_api_token         = var.netlify_api_token
  netlify_site_name         = var.netlify_site_name
  github_repo               = var.github_repo
  netlify_environment_variables = var.netlify_environment_variables
}
