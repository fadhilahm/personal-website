# Infrastructure Configuration

This directory contains the Terraform configurations for deploying and managing the personal website infrastructure.

## Prerequisites

1. [Terraform](https://www.terraform.io/downloads.html) (v1.0.0 or newer)

   ```bash
   brew install terraform
   ```

1. Make (usually pre-installed on Unix-based systems)
1. [1Password CLI](https://1password.com/downloads/command-line/) for secrets management:

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

## Security Notes

- Never commit `terraform.tfvars` or any files containing secrets
- Store service tokens and secrets securely in 1password
- All sensitive variables are marked with `sensitive = true`

## Secrets Management with 1Password

This project uses 1Password CLI for secure secrets management. The setup includes:

1. **Login to 1Password CLI**:

   ```bash
   eval $(op signin)
   ```
