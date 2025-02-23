.PHONY: init plan apply apply-interactive

# Default environment
ENV ?= prod

# Directory paths
ENV_DIR = environments/$(ENV)

# Colors
BLUE := \033[34m
CYAN := \033[36m
GREEN := \033[32m
RED := \033[31m
NC := \033[0m

# Help command
help:
	@echo "$(CYAN)Infrastructure Management Commands:$(NC)"
	@echo "$(GREEN)init             $(NC)  Initialize Terraform in the specified environment"
	@echo "$(GREEN)plan             $(NC)  Show execution plan"
	@echo "$(GREEN)apply            $(NC)  Apply changes without confirmation prompt"
	@echo "$(GREEN)apply-interactive$(NC)  Apply changes with confirmation prompt"
	@echo ""
	@echo "$(BLUE)Usage:$(NC)"
	@echo "  make [command] ENV=prod"
	@echo ""
	@echo "$(RED)Note:$(NC) Default environment is 'prod' if ENV is not specified"

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