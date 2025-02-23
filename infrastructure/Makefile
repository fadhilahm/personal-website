.PHONY: init plan apply apply-interactive

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