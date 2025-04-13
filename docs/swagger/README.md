# API Documentation

This directory contains the OpenAPI (Swagger) documentation for the API.

## Directory Structure

```tree
docs/swagger/
├── openapi.json          # Main OpenAPI specification
├── components/           # Reusable components
│   ├── schemas/         # Data models
│   ├── responses/       # Response definitions
│   └── parameters/      # Parameter definitions
├── paths/               # API endpoints
├── examples/            # Example files
│   ├── paths/          # Example endpoint definitions
│   └── schemas/        # Example schema definitions
└── Makefile            # Build and validation tools
```

## Tools

- [Redoc](https://github.com/Redocly/redoc) - OpenAPI/Swagger documentation generator
- [Redocly CLI](https://github.com/Redocly/redocly-cli) - OpenAPI/Swagger validation and linting
- [openapi-typescript](https://github.com/drwpow/openapi-typescript) - TypeScript type generator from OpenAPI specs

## Usage

### Validate and Lint

```bash
# From the swagger directory
make lint
```

### Generate TypeScript Types

The OpenAPI specification can be used to generate TypeScript types for the frontend:

1. Install the type generator:

   ```bash
   make install-typegen
   ```

2. Generate types:

   ```bash
   make generate-types
   ```

This will create TypeScript types in `frontend/src/types/api.ts` that match your OpenAPI specification. These types can be used in your frontend code for type-safe API calls.

Example usage in frontend code:

```typescript
import { paths } from "../types/api";

// Type for the health endpoint response
type HealthResponse =
  paths["/health"]["get"]["responses"][200]["content"]["application/json"];

// Type-safe API call
async function checkHealth(): Promise<HealthResponse> {
  const response = await fetch("/api/health");
  return response.json();
}
```

## Examples

The `examples/` directory contains example files that demonstrate:

- How to structure endpoint definitions
- How to define response schemas
- How to handle errors
- How to document parameters

These examples serve as templates for adding new endpoints to the API.

## Best Practices

1. **Documentation**

   - Add clear descriptions for all endpoints and parameters
   - Include examples where helpful
   - Document error responses

2. **Schema Organization**

   - Keep schemas in the components/schemas directory
   - Use references ($ref) to avoid duplication
   - Group related schemas together

3. **Type Generation**

   - Run type generation after any schema changes
   - Use the generated types in frontend code
   - Keep the OpenAPI spec and frontend types in sync

4. **Validation**
   - Run linting before committing changes
   - Fix all validation errors
   - Keep the specification valid according to OpenAPI 3.0
