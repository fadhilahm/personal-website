# Infrastructure Configuration

This directory contains the Terraform configurations for deploying and managing the personal website infrastructure. The setup includes:

- **Frontend**: Vercel for Next.js hosting and deployment
- **Database**: Supabase for PostgreSQL database

Note: Use 1Password externally to securely store your service tokens and secrets.

## Directory Structure

```tree
infrastructure/
├── modules/                  # Reusable infrastructure components
│   ├── frontend/            # Vercel deployment configuration
│   │   ├── main.tf         # Vercel project and deployment settings
│   │   └── variables.tf    # Frontend module variables
│   └── database/           # Supabase configuration
│       ├── main.tf         # Supabase project settings
│       └── variables.tf    # Database module variables
└── environments/           # Environment-specific configurations
    └── prod/              # Production environment
        ├── main.tf        # Main configuration file
        └── variables.tf   # Environment variables
```

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) (v1.0.0 or newer)
- [Vercel Account](https://vercel.com) and API token
- [Supabase Account](https://supabase.com) and access token
- GitHub repository for the project
- 1Password (recommended) for storing service tokens securely

## Configuration

1. Create a `terraform.tfvars` file in your environment directory (e.g., `environments/prod/terraform.tfvars`):

```hcl
vercel_token           = "your-vercel-token"
supabase_access_token  = "your-supabase-token"
github_repo            = "username/personal-website"
supabase_org_id        = "your-org-id"
database_password      = "your-db-password"
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

### Database Module (Supabase)

- Creates Supabase project
- Configures PostgreSQL database settings
- Manages database passwords
- Sets up necessary extensions (uuid-ossp, pgcrypto)

## Environment Variables

### Required Variables

- `vercel_token`: Vercel API token
- `supabase_access_token`: Supabase access token
- `github_repo`: GitHub repository name
- `supabase_org_id`: Supabase organization ID
- `database_password`: Database password

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
   - Validate Supabase connection strings
