variable "database" {
  type        = string
  description = "Railway MySQL database name"
}

variable "host" {
  type        = string
  description = "Railway MySQL internal host"
}

variable "port" {
  type        = number
  description = "Railway MySQL port"
}

variable "password" {
  type        = string
  description = "Railway MySQL root password"
  sensitive   = true
}

variable "url" {
  type        = string
  description = "Internal MySQL connection URL (accessible within Railway only)"
  sensitive   = true
}

variable "public_url" {
  type        = string
  description = "Public MySQL connection URL via TCP proxy"
  sensitive   = true
}
