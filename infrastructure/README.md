# Infrastructure Configuration

This directory contains the Terraform configurations for deploying and managing the personal website infrastructure. The setup includes:

- **Frontend**: Vercel for Next.js hosting and deployment
- **Database**: Railway.app for PostgreSQL database

Note: Use 1Password externally to securely store your service tokens and secrets.

## Directory Structure

```tree
infrastructure/
├── modules/                  # Reusable infrastructure components
│   ├── frontend/            # Vercel deployment configuration
│   │   ├── main.tf         # Vercel project and deployment settings
│   │   └── variables.tf    # Frontend module variables
│   └── database/           # Railway configuration
│       ├── main.tf         # Railway project and database settings
│       └── variables.tf    # Database module variables
└── environments/           # Environment-specific configurations
    └── prod/              # Production environment
        ├── main.tf        # Main configuration file
        └── variables.tf   # Environment variables
```

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) (v1.0.0 or newer)
- [Vercel Account](https://vercel.com) and API token
- [Railway Account](https://railway.app) and API token
- GitHub repository for the project
- 1Password (recommended) for storing service tokens securely

## Configuration

1. Create a `terraform.tfvars` file in your environment directory (e.g., `environments/prod/terraform.tfvars`):

```hcl
vercel_token  = "your-vercel-token"
railway_token = "your-railway-token"
github_repo   = "username/personal-website"
```

1. Initialize Terraform:

```bash
cd environments/prod
terraform init
```

1. Review the planned changes:

```bash
terraform plan
```

1. Apply the configuration:

```bash
terraform apply
```

## Modules

### Frontend Module (Vercel)

- Configures Vercel project for Next.js deployment
- Sets up GitHub integration for automatic deployments
- Manages environment variables
- Handles deployment configuration

### Database Module (Railway)

- Creates Railway project
- Sets up PostgreSQL database
- Configures environment and deployment settings
- Provides database connection URL

## Environment Variables

### Required Variables

- `vercel_token`: Vercel API token
- `railway_token`: Railway API token
- `github_repo`: GitHub repository name

### Optional Variables

- `git_branch`: Git branch to deploy (default: main)
- `is_production`: Whether this is a production deployment (default: false)

## Security Notes

- Never commit `terraform.tfvars` or any files containing secrets
- Store service tokens and secrets in 1Password
- All sensitive variables are marked with `sensitive = true`
- Keep your state files secure and consider using remote state storage

## Maintenance

- Regularly update provider versions
- Review and rotate secrets periodically
- Monitor resource usage and costs
- Keep Terraform state files backed up

## Troubleshooting

Common issues and solutions:

1. **Provider Authentication Failures**

   - Verify API tokens are correct and not expired
   - Ensure proper permissions are set

2. **State Lock Issues**

   - Run `terraform force-unlock` if needed
   - Verify no other processes are running Terraform

3. **Resource Creation Failures**

   - Check service quotas and limits
   - Verify resource naming follows allowed patterns

4. **Deployment Issues**
   - Verify GitHub repository permissions
   - Check Vercel project settings
   - Validate Railway database connection strings
