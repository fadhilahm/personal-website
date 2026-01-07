output "site_id" {
  description = "Netlify site ID"
  value       = netlify_site.frontend.id
}

output "site_url" {
  description = "Frontend site URL"
  value       = netlify_site.frontend.url
}

output "admin_url" {
  description = "Netlify admin dashboard URL"
  value       = netlify_site.frontend.admin_url
}

output "deploy_key_public" {
  description = "Public deploy key for GitHub"
  value       = netlify_deploy_key.frontend.public_key
  sensitive   = true
}

output "site_name" {
  description = "Site name on Netlify"
  value       = netlify_site.frontend.name
}
