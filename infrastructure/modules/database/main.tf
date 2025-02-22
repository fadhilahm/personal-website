terraform {
  required_providers {
    supabase = {
      source  = "supabase/supabase"
      version = "~> 0.1"
    }
  }
}

resource "supabase_project" "main" {
  name         = var.project_name
  organization = var.organization_id
  region       = var.region
  db_password  = var.db_password

  config {
    sql_extensions = ["uuid-ossp", "pgcrypto"]
  }
}

resource "supabase_database_password" "main" {
  project_ref = supabase_project.main.id
  password    = var.db_password
} 