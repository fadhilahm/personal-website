# Infrastructure Configuration

This directory contains the Terraform configurations for deploying and managing the personal website infrastructure. The setup includes:

- **Frontend**: Vercel for Next.js hosting and deployment
- **Database**: Railway.app for MySQL database
- **Domain**: Custom domain configuration with Vercel

## Prerequisites

1. [Terraform](https://www.terraform.io/downloads.html) (v1.0.0 or newer)
2. [Vercel Account](https://vercel.com) and API token
3. [Railway Account](https://railway.app) and API token
4. GitHub repository for the project
5. Make (usually pre-installed on Unix-based systems)

## Directory Structure

```tree
infrastructure/
├── modules/                  # Reusable infrastructure components
│   ├── frontend/            # Vercel deployment configuration
│   │   ├── main.tf         # Vercel project and deployment settings
│   │   └── variables.tf    # Frontend module variables
│   └── database/           # Railway configuration
│       ├── main.tf         # Database settings
│       └── variables.tf    # Database module variables
└── environments/           # Environment-specific configurations
    └── prod/              # Production environment
        ├── main.tf        # Main configuration file
        └── variables.tf   # Environment variables
```

## Configuration

1. Create a `terraform.tfvars` file in your environment directory (e.g., `environments/prod/terraform.tfvars`):

```hcl
vercel_token  = "your-vercel-token"
railway_token = "your-railway-token"
github_repo   = "username/personal-website"
project_name  = "personal-website"
database_url  = "your-railway-mysql-url"
```

## Usage

The infrastructure can be managed using the provided Makefile commands:

```bash
# Show available commands
make help

# Initialize Terraform (do this first)
make init

# Show planned changes
make plan

# Apply changes without confirmation
make apply

# Apply changes with confirmation prompt
make apply-interactive
```

## Modules

### Frontend Module (Vercel)

- Configures Vercel project for Next.js deployment
- Sets up GitHub integration for automatic deployments
- Manages environment variables
- Configures custom domain (fadhilahm.dev)

### Database Module

- Manages Railway MySQL database connection
- Handles database URL configuration
- Ensures secure storage of database credentials

## Domain Configuration

The custom domain (fadhilahm.dev) is configured in Vercel. After applying the Terraform configuration:

1. Configure your DNS settings at your domain registrar:

   ```dns
   Type    Name    Value
   A       @       76.76.21.21
   CNAME   www     cname.vercel-dns.com.
   ```

2. Wait for DNS propagation (usually takes a few minutes to a few hours)

## Security Notes

- Never commit `terraform.tfvars` or any files containing secrets
- Store service tokens and secrets securely
- All sensitive variables are marked with `sensitive = true`
- Use environment variables or a secure secrets manager for production deployments

## Maintenance

- Regularly update provider versions
- Review and rotate secrets periodically
- Keep Terraform state files secure
- Monitor resource usage and costs

## Troubleshooting

1. **Terraform Init Issues**

   - Ensure you have the correct provider versions
   - Check your internet connection
   - Verify provider credentials

2. **Deployment Failures**

   - Check Vercel deployment logs
   - Verify GitHub repository permissions
   - Ensure database URL is correct

3. **Domain Issues**
   - Verify DNS configuration
   - Check Vercel domain settings
   - Allow time for DNS propagation

## Contributing

1. Format code before committing:

   ```bash
   make fmt
   ```

2. Validate changes:

   ```bash
   make validate
   ```

3. Test changes in isolation before applying to production

## Backup and Recovery

- Terraform state is stored locally by default
- Consider using remote state storage for team environments
- Keep backup copies of your configuration
- Document any manual changes made outside of Terraform
