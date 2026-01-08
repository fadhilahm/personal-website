output "site_id" {
  description = "Netlify site ID"
  value       = data.netlify_site.frontend.id
}

output "site_url" {
  description = "Frontend site URL"
  value       = data.netlify_site.frontend.custom_domain != "" ? "https://${data.netlify_site.frontend.custom_domain}" : "https://${data.netlify_site.frontend.name}.netlify.app"
}

output "admin_url" {
  description = "Netlify admin dashboard URL"
  value       = "https://app.netlify.com/sites/${data.netlify_site.frontend.name}"
}

output "deploy_key_public" {
  description = "Public deploy key for GitHub"
  value       = netlify_deploy_key.frontend.public_key
  sensitive   = true
}

output "site_name" {
  description = "Site name on Netlify"
  value       = data.netlify_site.frontend.name
}
