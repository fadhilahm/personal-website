.PHONY: init plan apply apply-interactive help setup-secrets

# Colors for formatting
YELLOW := \033[33m
CYAN := \033[36m
BOLD := \033[1m
RESET := \033[0m

# Default 1Password vault
OP_VAULT ?= "personal-website"

# Default environment
ENV ?= production

# Directory paths
ENV_DIR = environments/$(ENV)

# Show available commands and their descriptions
help:
	@printf "\n${BOLD}${CYAN}"
	@printf ".___        _____                        __                        __                        \n"
	@printf "|   | _____/ ____\\___________    _______/  |________ __ __   _____/  |_ __ _________   ____  \n"
	@printf "|   |/    \\   __\\\\\\\\_  __ \\__  \\  /  ___/\\   __\\_  __ \\  |  \\_/ ___\\   __\\  |  \\_  __ \\_/ __ \\ \n"
	@printf "|   |   |  \\  |   |  | \\// __ \\_\\___ \\  |  |  |  | \\/  |  /\\  \\___|  | |  |  /|  | \\/\\  ___/ \n"
	@printf "|___|___|  /__|   |__|  (____  /____  > |__|  |__|  |____/  \\___  >__| |____/ |__|    \\___  >\n"
	@printf "         \\/                  \\/     \\/                          \\/                        \\/ \n"
	@printf "${RESET}\n"
	@printf "Usage: make ${CYAN}[target]${RESET} ${RESET}\n\nTargets:\n"
	@awk '/^[a-zA-Z0-9_-]+:/ { \
		helpMessage = match(lastLine, /^# (.*)/); \
		if (helpMessage) { \
			target = substr($$1, 0, index($$1, ":")); \
			printf "  ${YELLOW}%-18s${RESET} %s\n", target, substr(lastLine, RSTART + 2, RLENGTH); \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
	@printf "\n"

# Create terraform.tfvars file using injected real values from 1Password
setup-secrets:
	@cd $(ENV_DIR) && \
	(spinner() { \
		while :; do \
			for c in "⠋" "⠙" "⠹" "⠸" "⠼" "⠴" "⠦" "⠧" "⠇" "⠏"; do \
				printf "\r${BOLD}${CYAN}🔐 Injecting secrets from 1Password... ${c}${RESET}   "; \
				sleep 0.1; \
			done; \
		done; \
	}; \
	spinner & \
	SPINNER_PID=$$!; \
	trap "kill $$SPINNER_PID 2>/dev/null" EXIT; \
	op inject -i terraform.tfvars.template -o terraform.tfvars; \
	EXIT_CODE=$$?; \
	kill $$SPINNER_PID 2>/dev/null; \
	wait $$SPINNER_PID 2>/dev/null; \
	if [ $$EXIT_CODE -eq 0 ]; then \
		printf "\r${BOLD}${CYAN}✅ Secrets injected successfully!${RESET}                    \n"; \
	else \
		printf "\r${BOLD}${YELLOW}❌ Failed to inject secrets${RESET}                    \n"; \
		exit $$EXIT_CODE; \
	fi)

# Initialize Terraform in the specified environment
init:
	@echo "Initializing Terraform in $(ENV_DIR)..."
	cd $(ENV_DIR) && terraform init

# Show Terraform execution plan for the environment
plan:
	@echo "Planning Terraform changes in $(ENV_DIR)..."
	cd $(ENV_DIR) && terraform plan

# Show Terraform state in the environment
show:
	@echo "Showing Terraform state in $(ENV_DIR)..."
	cd $(ENV_DIR) && terraform show

# Apply Terraform changes without confirmation prompt
apply:
	@echo "Applying Terraform changes in $(ENV_DIR)..."
	cd $(ENV_DIR) && terraform apply -auto-approve

# Apply Terraform changes with confirmation prompt
apply-interactive:
	@echo "Applying Terraform changes in $(ENV_DIR)..."
	cd $(ENV_DIR) && terraform apply