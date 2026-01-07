terraform {
  required_version = ">= 1.0"

  required_providers {
    netlify = {
      source  = "netlify/netlify"
      version = "~> 0.4.0"
    }
  }
}
