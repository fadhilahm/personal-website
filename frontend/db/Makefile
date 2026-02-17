.PHONY: help migrate generate push studio seed

# Colors for formatting
YELLOW := \033[33m
CYAN := \033[36m
BOLD := \033[1m
RESET := \033[0m

# Run from frontend directory (drizzle.config.ts lives there)
ROOT := $(CURDIR)/..

# Show available commands and their descriptions
help:
	@printf "\n${BOLD}${CYAN}"
	@printf " ____  ____  \n"
	@printf "|  _ \\| __ ) \n"
	@printf "| | | |  _ \\ \n"
	@printf "| |_| | |_) |\n"
	@printf "|____/|____/ \n"
	@printf "${RESET}\n"
	@printf "Usage: make ${CYAN}[target]${RESET}\n\nTargets:\n"
	@awk '/^[a-zA-Z0-9_-]+:/ { \
		helpMessage = match(lastLine, /^# (.*)/); \
		if (helpMessage) { \
			target = substr($$1, 0, index($$1, ":")); \
			printf "  ${YELLOW}%-18s${RESET} %s\n", target, substr(lastLine, RSTART + 2, RLENGTH); \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
	@printf "\n"

# Generate migrations from schema changes
generate:
	cd $(ROOT) && npx drizzle-kit generate

# Run migrations
migrate:
	cd $(ROOT) && npx drizzle-kit migrate

# Push schema directly (dev only)
push:
	cd $(ROOT) && npx drizzle-kit push

# Open Drizzle Studio
studio:
	cd $(ROOT) && npx drizzle-kit studio

# Run seed script
seed:
	cd $(ROOT) && npx tsx db/seed.ts
