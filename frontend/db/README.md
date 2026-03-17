# db

Database layer using Drizzle ORM (MySQL).

## Structure

- `schema.ts` – table definitions (ordered by dependency)
- `index.ts` – db client
- `migrations/` – generated SQL migrations

## How to Use

1. run `make generate` to generate migration files

## Notes

- Use override true inside drizzle config. Without that, the environment variable won't get injected and the migration/seeding process will fail.
