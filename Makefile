.PHONY: help run test

default: help

help: ## Show list of avaiable commands
	@echo "Usage: make [command]"
	@echo ""
	@echo "Commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

run: ## Run the project
	npm run dev

test: ## Run the tests
	npm ci
	npm run build	
