terraform {
  required_providers {
    netlify = {
      source  = "netlify/netlify"
      version = "~> 4.0"
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
      provider  = "github"
      repo_path = var.github_repo
      branch    = "main"
      base      = "frontend"
      dir       = ".next"
      cmd       = "npm run build"
    }
  }

  build_settings {
    base        = "frontend"
    cmd         = "npm run build"
    dir         = ".next"
    node_version = "20"
  }

  lifecycle {
    ignore_changes = [
      # Ignore changes to repo settings as they might be managed via Netlify UI
      # This is especially important when importing existing sites
      repo,
    ]
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
