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
