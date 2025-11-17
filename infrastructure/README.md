# Infrastructure Configuration

This directory contains the Terraform configurations for deploying and managing the personal website infrastructure.

## Prerequisites

1. [Terraform](https://www.terraform.io/downloads.html) (v1.0.0 or newer)
2. GitHub repository for the project
3. Make (usually pre-installed on Unix-based systems)
4. [1Password CLI](https://1password.com/downloads/command-line/) for secrets management:

   ```bash
   # macOS (using Homebrew)
   brew install --cask 1password-cli

   # Debian/Ubuntu
   curl -sS https://downloads.1password.com/linux/keys/1password.asc | \
   sudo gpg --dearmor --output /usr/share/keyrings/1password-archive-keyring.gpg
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/1password-archive-keyring.gpg] https://downloads.1password.com/linux/debian/$(dpkg --print-architecture) stable main" | \
   sudo tee /etc/apt/sources.list.d/1password.list
   sudo apt update && sudo apt install 1password-cli

   # After installation, sign in to your account:
   op signin
   ```

## Directory Structure

```tree
infrastructure/
├── modules/                  # Reusable infrastructure components
│   └── frontend/            # Frontend deployment configuration
│       ├── main.tf         # Frontend project and deployment settings
│       └── variables.tf    # Frontend module variables
└── environments/           # Environment-specific configurations
    └── prod/              # Production environment
        ├── main.tf        # Main configuration file
        └── variables.tf   # Environment variables
```

## Usage

The infrastructure can be managed using the provided Makefile commands:

```bash
# Show available commands
make help

# Initialize Terraform (do this first)
make init

# Fetch terraform variables from 1Password (required before any deployment)
make fetch-vars

# Show planned changes
make plan

# Apply changes without confirmation
make apply

# Apply changes with confirmation prompt
make apply-interactive
```

### Deployment Steps

1. **Sign in to 1Password CLI** (if not already signed in):

   ```bash
   eval $(op signin)
   ```

2. **Fetch terraform variables**:

   ```bash
   make fetch-vars
   ```

   This command will fetch the required variables from 1Password and save them to `environments/prod/terraform.tfvars`

3. **Initialize Terraform**:

   ```bash
   make init
   ```

4. **Review the planned changes**:

   ```bash
   make plan
   ```

5. **Apply the changes**:

   ```bash
   make apply  # Without confirmation
   # OR
   make apply-interactive  # With confirmation prompt
   ```

## Modules

### Frontend Module

- Configures frontend project for Next.js deployment
- Sets up GitHub integration for automatic deployments
- Manages environment variables for all environments (production, preview, development)
- Configures custom domain (fadhilahm.dev)

#### Environment Variables

The frontend module supports different types of environment variables:

- **All Environments**: Variables available in production, preview, and development
- **Production Only**: Variables only available in production deployments
- **Preview Only**: Variables only available in preview deployments (PRs, branches)
- **Development Only**: Variables only available for local development

Example configuration:

```terraform
module "frontend" {
  source = "../../modules/frontend"

  # Variables for ALL environments (production, preview, development)
  environment_variables = {
    NEXT_PUBLIC_GITHUB_USERNAME = var.github_username
  }

  # Production-only variables
  production_only_variables = {
    ANALYTICS_ID = "prod-analytics-id"
    SENTRY_DSN   = "prod-sentry-dsn"
  }

  # Preview-only variables
  preview_only_variables = {
    ANALYTICS_ID = "staging-analytics-id"
  }

  # Development-only variables
  development_only_variables = {
    DEBUG_MODE = "true"
  }
}
```



## Security Notes

- Never commit `terraform.tfvars` or any files containing secrets
- Store service tokens and secrets securely
- All sensitive variables are marked with `sensitive = true`
- Use environment variables or a secure secrets manager for production deployments

## Secrets Management with 1Password

This project uses 1Password CLI for secure secrets management. The setup includes:

1. **Login to 1Password CLI**:

   ```bash
   eval $(op signin)
   ```
