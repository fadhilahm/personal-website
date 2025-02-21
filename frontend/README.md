# Personal Website Frontend

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

The easiest way to see all available commands is to use the Makefile:

```bash
make help
```

This will show you a nicely formatted list of all available commands with their descriptions.

You can run this project either directly on your machine or using Docker.

### Local Development

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

### Docker Development

1. Build the Docker image:

```bash
docker build -t personal-website-frontend .
```

1. Run the container:

```bash
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules -v /app/.next personal-website-frontend
```

The `-v` flags create volumes for:

- Your current directory: for hot reloading
- `node_modules`: to preserve container's node_modules
- `.next`: to preserve Next.js build cache

### Accessing the Application

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Features

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- DaisyUI for components
- i18n support for internationalization
- Storybook for component development
- ESLint for code quality
- Hot reload support in both local and Docker environments

## Project Structure

```tree
frontend/
├── app/          # Next.js app router pages
├── components/   # Reusable React components
├── config/       # Configuration files
├── constants/    # Constant values and enums
├── hooks/        # Custom React hooks
├── i18n/         # Internationalization setup
├── messages/     # Translation messages
├── providers/    # React context providers
├── public/       # Static assets
└── stories/      # Storybook stories
```

## Available Scripts

The project includes a Makefile for easier command execution. Here are the main commands:

```bash
make install  # Install project dependencies
make dev      # Run development server with hot reload
make build    # Build application for production
make format   # Format code style for consistency
make help     # Show all available commands
```

Alternatively, you can use npm scripts directly:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook server
- `npm run test` - Run tests
