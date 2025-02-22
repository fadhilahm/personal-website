terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.4"
    }
    supabase = {
      source  = "supabase/supabase"
      version = "~> 0.1"
    }
    onepassword = {
      source  = "1password/onepassword"
      version = "~> 1.0"
    }
  }
}

provider "vercel" {
  api_token = var.vercel_token
}

provider "supabase" {
  access_token = var.supabase_access_token
}

provider "onepassword" {
  token = var.onepassword_token
}

module "frontend" {
  source = "../../modules/frontend"

  project_name = "personal-website"
  github_repo  = var.github_repo
  is_production = true
  environment_variables = {
    NEXT_PUBLIC_SUPABASE_URL = module.database.supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY = module.database.supabase_anon_key
  }
}

module "database" {
  source = "../../modules/database"

  project_name    = "personal-website"
  organization_id = var.supabase_org_id
  db_password    = var.database_password
} 