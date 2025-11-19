variable "netlify_api_token" {
  description = "Netlify API token for authentication"
  type        = string
  sensitive   = true
}

variable "netlify_site_name" {
  description = "Name of the Netlify site"
  type        = string
}

variable "github_repo" {
  description = "GitHub repository in format 'owner/repo' (optional, for new sites)"
  type        = string
  default     = null
}

variable "netlify_environment_variables" {
  description = "Map of environment variables. Each key is the variable name, value is an object with 'values' (list) and 'scopes' (list)"
  type = map(object({
    values = list(string)
    scopes = list(string) # e.g., ["builds", "functions", "runtime"]
  }))
  default = {}
}
