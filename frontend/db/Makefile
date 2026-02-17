.PHONY: help migrate generate push studio seed

# Run from frontend directory (drizzle.config.ts lives there)
ROOT := $(CURDIR)/..

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
