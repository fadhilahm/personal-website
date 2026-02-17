.PHONY: help migrate migrate-production generate push studio seed seed-production reset-migration

# Colors for formatting
YELLOW := \033[33m
CYAN := \033[36m
BOLD := \033[1m
RESET := \033[0m

# Run from frontend directory (drizzle.config.ts lives there)
ROOT := $(CURDIR)/..

# Environment: local (default) or production
# - local: uses .env (local database)
# - production: uses .env.production (e.g. Railway)
# Set via: make migrate ENV=production  OR  make migrate-production
ENV ?= local

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
	@printf "Environment (local | production):\n"
	@printf "  ${YELLOW}local${RESET}      Uses .env (default)\n"
	@printf "  ${YELLOW}production${RESET} Uses .env.production (e.g. Railway)\n"
	@printf "  Example: make migrate ENV=production  OR  make migrate-production\n"
	@printf "\n"

# Generate migrations from schema changes
generate:
	@echo "Generating migrations..."
	(cd $(ROOT) && npx drizzle-kit generate)
	@echo "Migration generation completed."

# Run migrations (local by default; use ENV=production for production)
migrate:
	@echo "Running migrations..."
	(cd $(ROOT) && ENV=$(ENV) NODE_ENV=$(ENV) npx drizzle-kit migrate)
	@echo "Migrations completed."

# Run migrations against production database
migrate-production:
	@echo "Running migrations against production..."
	(cd $(ROOT) && ENV=production NODE_ENV=production npx drizzle-kit migrate)
	@echo "Production migrations completed."

# Reset migration: drop and recreate database, then run migrations (local only, requires Docker)
MYSQL_ROOT_PASSWORD ?= root_password
MYSQL_DATABASE ?= app_db
reset-migration:
	@echo "Resetting migration..."
	@echo "Dropping and recreating database..."
	@cd $(ROOT)/.. && docker compose exec db mysql -u root -p$(MYSQL_ROOT_PASSWORD) -e "DROP DATABASE IF EXISTS $(MYSQL_DATABASE); CREATE DATABASE $(MYSQL_DATABASE);"
	$(MAKE) migrate
	@echo "Migration reset completed."

# Push schema directly (dev only)
push:
	@echo "Pushing schema..."
	(cd $(ROOT) && npx drizzle-kit push)
	@echo "Schema push completed."

# Open Drizzle Studio
studio:
	@echo "Starting Drizzle Studio..."
	(cd $(ROOT) && npx drizzle-kit studio)

# Run seed script (local by default; use ENV=production for production)
seed:
	@echo "Running seed script..."
	(cd $(ROOT) && ENV=$(ENV) NODE_ENV=$(ENV) npx tsx db/seed.ts)
	@echo "Seed completed."

# Run seed script against production database
seed-production:
	@echo "Running seed script against production..."
	(cd $(ROOT) && ENV=production NODE_ENV=production npx tsx db/seed.ts)
	@echo "Production seed completed."
