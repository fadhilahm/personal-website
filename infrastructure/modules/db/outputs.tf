output "mysql_service_id" {
  value       = railway_service.mysql.id
  description = "Railway MySQL service ID"
}

output "environment_id" {
  value       = railway_environment.db.id
  description = "Railway environment ID for DB variables"
}

