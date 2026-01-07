# Personal Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/5f6a95db-23ae-4c65-bfae-ed564f75b602/deploy-status)](https://app.netlify.com/projects/personal-website-fadhilahm/deploys)

## Background

The main page used to show off my profile to potential recruiters. It also acts as a professional diary for me that highlights my current interests and goals. In the future, I'm thinking of adding a simple AI chatbot that would make it even easier for people to ask questions about me.

## Prerequisites

- [Docker](https://www.docker.com/get-started) and Docker Compose
- [Make](https://www.gnu.org/software/make/) (usually pre-installed on macOS/Linux)

## Quick Start

The easiest way to see all available commands is to use the Makefile:

    make help

Main commands:

    make up      # Start all services with hot-reload (use for daily development)
    make build   # Rebuild and start services (use after dependency changes)

For daily development, use `make up`. If you've changed dependencies or Dockerfile, use `make build`.

## Project Structure

    personal-website/
    ├── frontend/               # Next.js frontend application
    ├── infrastructure/         # Terraform code for infrastructure provisioning
    ├── docs/                   # Project documentation (Swagger/OpenAPI specs)
    ├── docker-compose.yml      # Docker Compose configuration
    └── Makefile                # Convenience commands for development
