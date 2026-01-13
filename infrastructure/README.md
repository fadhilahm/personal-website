# Infrastructure

## Prerequisites

Before working with this infrastructure code, ensure you have the following installed and configured:

- **[Terraform](https://www.terraform.io/downloads)** - Infrastructure as Code tool (version 1.0+ recommended)
- **[1Password CLI](https://developer.1password.com/docs/cli/get-started)** - For secure secrets management
- **[Make](https://www.gnu.org/software/make/)** - For running convenience commands (usually pre-installed on macOS/Linux)
- **Access to 1Password Vault** - Access to the `personal-website` vault (default) for fetching secrets

### Initial Setup

1. **Install Terraform**:

   ```bash
   # macOS
   brew install terraform
   
   # Or download from https://www.terraform.io/downloads
   ```

2. **Install 1Password CLI**:

   ```bash
   # macOS
   brew install --cask 1password-cli
   
   # Or follow: https://developer.1password.com/docs/cli/get-started
   ```

## Secrets Management with 1Password

### How to Setup Secrets for Local Environment

1. **Login to 1Password CLI**:

   ```bash
   eval $(op signin)
   ```

1. **Fetch secrets from 1Password**:

   ```bash
   make setup-secrets
   ```

### How to Add New Secrets

1. Go to 1Password website
1. Create a new item under `personal-website` vault
1. Add proper tags

## How The Front End is Managed

1. Create the website manually through Netlify.
1. Copy the necessary ID for the website into the `frontend` module configuration here.
1. Change the value in the config files if you want to modify the setting for the Front End deployment.

## Credits

- ASCII art from [this website](https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Infrastructure&x=none&v=4&h=4&w=80&we=false)
