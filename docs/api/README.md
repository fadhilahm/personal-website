# API Documentation

This directory contains the OpenAPI (Swagger) documentation for the personal website API.

## Structure

```
.
├── swagger/
│   ├── openapi.json          # Main OpenAPI specification file
│   ├── paths/                # API endpoint path definitions
│   │   └── health.json      # Health check endpoint definition
│   ├── schemas/              # Directory for reusable schema definitions
│   │   ├── responses/        # Response schemas
│   │   │   └── health.json  # Health check response schema
│   │   ├── requests/        # Request schemas
│   │   └── models/          # Shared model schemas
│   └── README.md             # This file
└── frontend/                 # Next.js frontend application
    └── app/
        └── api/              # API routes implementation
```

## Usage

### View Documentation

1. Install the Swagger UI package in the frontend directory:

```bash
cd frontend
npm install swagger-ui-react swagger-ui-dist
```

2. Create a documentation page in your Next.js app:

```tsx
// frontend/app/api-docs/page.tsx
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import openapiSpec from "../../../swagger/openapi.json";

export default function ApiDocs() {
  return <SwaggerUI spec={openapiSpec} />;
}
```

### Adding New Endpoints

1. Create a new path file in `swagger/paths/` for your endpoint
2. Add the path reference to `swagger/openapi.json`
3. Define schemas in appropriate directories:
   - `schemas/responses/`: Response schemas
   - `schemas/requests/`: Request body/parameter schemas
   - `schemas/models/`: Shared model schemas
4. Use relative `$ref` paths to reference schemas (e.g., `../schemas/responses/health.json`)

### Best Practices

1. Keep paths and schemas in separate files
2. Use descriptive operation IDs
3. Include examples for all responses
4. Document all required fields
5. Keep the documentation up to date with code changes
6. Organize schemas by their purpose (responses, requests, models)
7. Use relative paths for schema references

## Validation

To validate your OpenAPI specification:

```bash
npm install -g @redocly/cli
cd swagger
redocly lint openapi.json
```

## Tools

- [Swagger Editor](https://editor.swagger.io/): Online editor for OpenAPI specifications
- [Redoc](https://github.com/Redocly/redoc): Alternative documentation renderer
- [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator): Generate client libraries from OpenAPI specs
