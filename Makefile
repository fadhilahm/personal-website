.PHONY: help run test run_github_actions_local

default: help

help: ## Show list of avaiable commands
	@echo "Usage: make [command]"
	@echo ""
	@echo "Commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-30s\033[0m %s\n", $$1, $$2}'

run: ## Run the project
	npm run dev

test: ## Run the tests
	npm run build

run_github_actions_local: ## Run the github actions locally using act
	act --container-architecture linux/amd64
