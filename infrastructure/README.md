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

   # After installation, sign in to your account:
   eval $(op signin)
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

## Security Notes

- Never commit `terraform.tfvars` or any files containing secrets
- Store service tokens and secrets securely in 1password
- All sensitive variables are marked with `sensitive = true`
