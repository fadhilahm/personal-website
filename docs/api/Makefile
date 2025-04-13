.PHONY: help install lint clean

# Colors for formatting
YELLOW := \033[33m
CYAN := \033[36m
RESET := \033[0m

# Show available commands and their descriptions
help:
	@printf "\nUsage: make ${CYAN}[target]${RESET}\n\nTargets:\n"
	@awk '/^[a-zA-Z0-9_-]+:/ { \
		helpMessage = match(lastLine, /^# (.*)/); \
		if (helpMessage) { \
			target = substr($$1, 0, index($$1, ":")); \
			printf "  ${YELLOW}%-10s${RESET} %s\n", target, substr(lastLine, RSTART + 2, RLENGTH); \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
	@printf "\n"

# Install required tools for OpenAPI validation
install:
	@printf "${CYAN}Installing OpenAPI tools...${RESET}\n"
	npm install -g @redocly/cli
	@printf "${CYAN}Installation complete!${RESET}\n"

# Lint OpenAPI specification
lint:
	@printf "${CYAN}Linting OpenAPI specification...${RESET}\n"
	redocly lint openapi.json
	@printf "${CYAN}Linting complete!${RESET}\n"

# Clean generated files
clean:
	@printf "${CYAN}Cleaning up...${RESET}\n"
	rm -f openapi.json.bak
	@printf "${CYAN}Cleanup complete!${RESET}\n" 