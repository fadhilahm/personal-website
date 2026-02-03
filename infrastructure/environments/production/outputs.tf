output "frontend_url" {
  description = "Frontend development URL"
  value       = module.frontend.site_url
}

output "frontend_site_id" {
  description = "Frontend site ID"
  value       = module.frontend.site_id
}

output "frontend_admin_url" {
  description = "Netlify admin dashboard"
  value       = module.frontend.admin_url
}

output "db_service_id" {
  description = "Railway MySQL service ID"
  value       = module.db.mysql_service_id
}

output "db_environment_id" {
  description = "Railway environment ID used for DB variables"
  value       = module.db.environment_id
}

output "db_name" {
  description = "Database name"
  value       = var.db_name
}
