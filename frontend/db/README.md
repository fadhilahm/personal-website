# db

Database layer using Drizzle ORM (MySQL).

## Setup

1. Create a `.env` file, following `.env.example`.

## Structure

- `schema.ts` – table definitions (ordered by dependency)
- `index.ts` – db client
- `migrations/` – generated SQL migrations

This directory is used store all things related to the DB or ORM used by this project.
