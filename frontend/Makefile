.PHONY: help install dev build start lint clean format

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

# Install and start development server
all: install dev

# Install project dependencies
install:
	npm install

# Run development server with hot reload
dev:
	npm run dev

# Build application for production
build:
	npm run build

# Start production server
start:
	npm run start

# Run ESLint to check code quality and catch potential bugs
lint:
	npm run lint

# Format code style for consistency
format:
	npm run format

# Remove build artifacts and dependencies
clean:
	rm -rf .next node_modules
