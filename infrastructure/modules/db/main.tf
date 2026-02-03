resource "railway_service" "mysql" {
  name         = var.db_name
  project_id   = var.railway_project_id
  source_image = "mysql:8.0"

  volume {
    name       = "${var.db_name}-data"
    mount_path = "/var/lib/mysql"
  }
}

resource "railway_environment" "db" {
  name       = var.railway_environment_name
  project_id = var.railway_project_id
}

resource "railway_variable" "mysql_database" {
  name           = "MYSQL_DATABASE"
  value          = var.db_name
  environment_id = railway_environment.db.id
  service_id     = railway_service.mysql.id
}

resource "railway_variable" "mysql_user" {
  name           = "MYSQL_USER"
  value          = var.db_user
  environment_id = railway_environment.db.id
  service_id     = railway_service.mysql.id
}

resource "railway_variable" "mysql_password" {
  name           = "MYSQL_PASSWORD"
  value          = var.db_password
  environment_id = railway_environment.db.id
  service_id     = railway_service.mysql.id
}

resource "railway_variable" "mysql_root_password" {
  name           = "MYSQL_ROOT_PASSWORD"
  value          = var.db_root_password
  environment_id = railway_environment.db.id
  service_id     = railway_service.mysql.id
}

