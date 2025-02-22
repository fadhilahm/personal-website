# personal-website

    Hey! 👋 Meet my interactive portfolio where you can chat with AI to learn about my work. A fun way to explore my projects, skills, and what I'm learning. Come say hi!

## Quick Start

The easiest way to see all available commands is to use the Makefile:

    make help

Main commands:

    make up      # Start all services with hot-reload (use for daily development)
    make build   # Rebuild and start services (use after dependency changes)

For daily development, use `make up`. If you've changed dependencies or Dockerfile, use `make build`.

## Project Structure

    personal-website/
    ├── frontend/               # Next.js frontend
    └── infrastructure/         # Terraform code for the infrastructure

## Database

MySQL connection details:

    Host: localhost
    Port: 3306
    Database: personalwebsite
    User: appuser
    Password: apppassword

Note: Database data is persisted in a Docker volume named `mysql_data`.
