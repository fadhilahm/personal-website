.PHONY: init plan apply apply-interactive help

# Colors for formatting
YELLOW := \033[33m
CYAN := \033[36m
RESET := \033[0m

# Default environment
ENV ?= prod

# Directory paths
ENV_DIR = environments/$(ENV)

# Show available commands and their descriptions
help:
	@printf "\nUsage: make ${CYAN}[target]${RESET} ENV=${YELLOW}[environment]${RESET}\n\nTargets:\n"
	@awk '/^[a-zA-Z0-9_-]+:/ { \
		helpMessage = match(lastLine, /^# (.*)/); \
		if (helpMessage) { \
			target = substr($$1, 0, index($$1, ":")); \
			printf "  ${YELLOW}%-18s${RESET} %s\n", target, substr(lastLine, RSTART + 2, RLENGTH); \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
	@printf "\nDefault environment is '${YELLOW}prod${RESET}' if ENV is not specified\n\n"

# Initialize Terraform in the specified environment
init:
	@echo "Initializing Terraform in $(ENV_DIR)..."
	cd $(ENV_DIR) && terraform init

# Show Terraform execution plan for the environment
plan:
	@echo "Planning Terraform changes in $(ENV_DIR)..."
	cd $(ENV_DIR) && terraform plan

# Apply Terraform changes without confirmation prompt
apply:
	@echo "Applying Terraform changes in $(ENV_DIR)..."
	cd $(ENV_DIR) && terraform apply -auto-approve

# Apply Terraform changes with confirmation prompt
apply-interactive:
	@echo "Applying Terraform changes in $(ENV_DIR)..."
	cd $(ENV_DIR) && terraform apply