terraform {
  required_providers {
    netlify = {
      source  = "netlify/netlify"
      version = "0.3.2"
    }
  }
}

provider "netlify" {
  token = var.netlify_api_token
}

resource "netlify_site" "main" {
  name = var.netlify_site_name

  dynamic "repo" {
    for_each = var.github_repo != null ? [1] : []
    content {
      provider    = "github"
      repo        = var.github_repo
      branch      = "main"
      base        = "frontend"
      dir         = ".next"
      cmd         = "npm run build"
    }
  }

  build_settings {
    base        = "frontend"
    command     = "npm run build"
    publish     = ".next"
    node_version = "20"
  }
}

# Environment Variables
resource "netlify_environment_variable" "main" {
  for_each = var.netlify_environment_variables

  site_id = netlify_site.main.id
  key     = each.key
  values  = each.value.values
  scopes  = each.value.scopes
}
