output "site_id" {
  description = "Netlify site ID"
  value       = netlify_site.main.id
}

output "site_url" {
  description = "Netlify site URL"
  value       = netlify_site.main.url
}

output "site_name" {
  description = "Netlify site name"
  value       = netlify_site.main.name
}
