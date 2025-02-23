.PHONY: init plan apply apply-interactive destroy fmt validate clean

# Default environment
ENV ?= prod

# Directory paths
ENV_DIR = environments/$(ENV)

# Help command
help:
	@echo "Available commands:"
	@echo "  make init              - Initialize Terraform in the specified environment"
	@echo "  make plan             - Show execution plan"
	@echo "  make apply            - Apply changes without confirmation prompt"
	@echo "  make apply-interactive - Apply changes with confirmation prompt"
	@echo "  make destroy          - Destroy infrastructure (use with caution)"
	@echo "  make fmt              - Format Terraform files"
	@echo "  make validate         - Validate Terraform files"
	@echo "  make clean            - Clean Terraform files"
	@echo ""
	@echo "Usage:"
	@echo "  make [command] ENV=prod    - Run command for production environment"
	@echo ""
	@echo "Note: Default environment is 'prod' if ENV is not specified"

# Initialize Terraform
init:
	@echo "Initializing Terraform in $(ENV_DIR)..."
	cd $(ENV_DIR) && terraform init

# Show execution plan
plan:
	@echo "Planning Terraform changes in $(ENV_DIR)..."
	cd $(ENV_DIR) && terraform plan

# Apply changes without confirmation
apply:
	@echo "Applying Terraform changes in $(ENV_DIR)..."
	cd $(ENV_DIR) && terraform apply -auto-approve

# Apply changes with confirmation
apply-interactive:
	@echo "Applying Terraform changes in $(ENV_DIR)..."
	cd $(ENV_DIR) && terraform apply

# Destroy infrastructure
destroy:
	@echo "WARNING: This will destroy all infrastructure in $(ENV_DIR)!"
	@echo "Are you sure? [y/N]" && read ans && [ $${ans:-N} = y ]
	cd $(ENV_DIR) && terraform destroy

# Format Terraform files
fmt:
	@echo "Formatting Terraform files..."
	terraform fmt -recursive

# Validate Terraform files
validate:
	@echo "Validating Terraform files in $(ENV_DIR)..."
	cd $(ENV_DIR) && terraform validate

# Clean Terraform files
clean:
	@echo "Cleaning Terraform files in $(ENV_DIR)..."
	find . -type d -name ".terraform" -exec rm -rf {} +
	find . -type f -name ".terraform.lock.hcl" -delete
	find . -type f -name "terraform.tfstate*" -delete 