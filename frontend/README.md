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

## Component Testing

This project follows a **comprehensive testing strategy** using multiple tools to ensure component quality and reliability.

### Testing Approach

We use a **three-tier testing strategy**:

1. **Visual Testing** - Storybook for component development and visual regression
2. **Unit Testing** - Jest + React Testing Library for component behavior
3. **Interactive Testing** - Storybook interactions for user workflows

### Storybook (Visual Testing)

[Storybook](https://storybook.js.org/) provides isolated component development and visual testing.

```bash
make storybook  # Start Storybook at http://localhost:6006
```

#### Storybook Structure

- `.storybook/` - Configuration files
- `*.stories.tsx` - Component stories co-located with components
- Stories document props, variants, and usage examples

### Unit Testing

Unit tests focus on component behavior, props handling, and user interactions.

```bash
make test        # Run all tests
make test:watch  # Run tests in watch mode
make test:coverage # Generate coverage report
```

#### Testing Guidelines

**What to Test:**

- Component renders correctly with different props
- User interactions trigger expected behavior
- Conditional rendering based on props/state
- Accessibility attributes and behavior

**What NOT to Test:**

- Implementation details (internal state, methods)
- Third-party library behavior
- Styling (use Storybook for visual testing)

#### Test File Structure

```tree
components/
└── features/
    └── Contribution/
        ├── index.tsx           # Component
        ├── index.stories.tsx   # Storybook stories
        └── index.test.tsx      # Unit tests
```

#### Example Test

```typescript
import { render, screen } from '@testing-library/react';
import { Contribution } from './index';

describe('Contribution', () => {
  it('renders with username prop', () => {
    render(<Contribution username="testuser" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('handles missing username gracefully', () => {
    render(<Contribution username="" />);
    expect(screen.getByText(/no contributions/i)).toBeInTheDocument();
  });
});
```

### Interactive Testing

Use Storybook's interaction testing for complex user workflows:

```typescript
// In your .stories.tsx file
export const WithInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(canvas.getByText('Success')).toBeInTheDocument();
  },
};
```

## Features

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- DaisyUI for components
- i18n support for internationalization
- Storybook for component development and documentation
- ESLint for code quality
- Hot reload support in both local and Docker environments

## Project Structure

```tree
frontend/
├── app/                    # Next.js app router pages
├── components/             # React components organized by atomic design
│   ├── design-system/      # Reusable design system components
│   │   ├── atoms/          # Basic building blocks (Button, Input, Typography)
│   │   ├── molecules/      # Simple combinations (FormField, Card, SearchBox)
│   │   └── organisms/      # Complex components (Header, Footer, Navigation)
│   └── features/           # Feature-specific business components
│       ├── contribution/   # GitHub contribution components
│       └── i18n/          # Internationalization components
├── config/                 # Configuration files
├── constants/              # Constant values and enums
├── hooks/                  # Custom React hooks
├── i18n/                   # Internationalization setup
├── messages/               # Translation messages
├── providers/              # React context providers
├── public/                 # Static assets
└── .storybook/             # Storybook configuration
```

## UI Component Architecture

This project uses a **hybrid approach** combining **Atomic Design principles** with **Feature-Based organization** for optimal maintainability and scalability.

### Design System Components (`components/design-system/`)

Following atomic design methodology, our design system is organized into three levels:

#### **Atoms** (`design-system/atoms/`)

Basic building blocks that cannot be broken down further:

- **Button** - All button variants and styles
- **Input** - Form input elements
- **Typography** - Headings, text, links
- **Icon** - Icon components
- **Avatar** - User avatar displays

#### **Molecules** (`design-system/molecules/`)

Simple combinations of atoms that form functional UI components:

- **FormField** - Label + Input + Error message
- **SearchBox** - Input + Search button
- **Card** - Container with consistent styling
- **PriceDisplay** - Price + Currency + Discount formatting
- **Rating** - Stars + Review count

#### **Organisms** (`design-system/organisms/`)

Complex, reusable components that combine molecules and atoms:

- **Header** - Site navigation and branding
- **Footer** - Site footer with links and info
- **Navigation** - Main navigation menus
- **Modal** - Popup dialogs and overlays
- **DataTable** - Complex data display with sorting/filtering

### Feature Components (`components/features/`)

Business-specific components organized by domain functionality:

#### **Contribution** (`features/contribution/`)

GitHub contribution-related components:

- Integration with GitHub API
- Contribution calendar displays
- Repository statistics

#### **Internationalization** (`features/i18n/`)

Language and localization components:

- Language switcher
- Locale-specific formatting
- Translation utilities

### Component Organization Principles

1. **Reusability**: Design system components are highly reusable across features
2. **Separation of Concerns**: Business logic stays in features, UI patterns in design system
3. **Scalability**: New features get their own directory, new UI patterns extend design system
4. **Co-location**: Each component includes its stories, tests, and styles in the same directory

### When to Use Each Level

| Component Type        | Use When                                     | Example                    |
| --------------------- | -------------------------------------------- | -------------------------- |
| **Atom**              | Single responsibility, no business logic     | Button, Input, Typography  |
| **Molecule**          | Simple combination of 2-5 atoms              | FormField, SearchBox, Card |
| **Organism**          | Complex reusable UI, 5+ components           | Header, Footer, DataTable  |
| **Feature Component** | Business-specific logic and domain knowledge | Contribution, UserProfile  |

### File Structure Example

```tree
components/
├── design-system/
│   ├── atoms/
│   │   └── Button/
│   │       ├── index.tsx           # Component implementation
│   │       ├── Button.stories.tsx  # Storybook documentation
│   │       └── Button.test.tsx     # Unit tests
│   ├── molecules/
│   │   └── FormField/
│   │       ├── index.tsx
│   │       └── FormField.stories.tsx
│   └── organisms/
│       └── Header/
│           ├── index.tsx
│           └── Header.stories.tsx
└── features/
    ├── contribution/
    │   └── Contribution/
    │       ├── index.tsx
    │       ├── Contribution.tsx
    │       ├── index.stories.tsx
    │       └── index.test.tsx
    └── i18n/
        └── LanguageSwitcher/
            ├── index.tsx
            └── index.stories.tsx
```

## Naming Conventions

This project follows consistent naming conventions to maintain code organization and readability:

### Component Folders

- **Component folders**: Use **PascalCase** (e.g., `LanguageSwitcher`, `Contribution`)
- **Organizational folders**: Use **lowercase** with hyphens for multi-word names (e.g., `components`, `design-system`, `features`, `atoms`, `molecules`, `organisms`)

### File Naming

- **Component files**: `index.tsx` (main component file)
- **Story files**: `index.stories.tsx` (Storybook stories)
- **Test files**: `index.test.tsx` (when applicable)

### Examples

```tree
components/
├── design-system/
│   ├── atoms/
│   │   └── Button/
│   │       ├── index.tsx
│   │       └── Button.stories.tsx
│   ├── molecules/
│   │   └── FormField/
│   │       ├── index.tsx
│   │       └── FormField.stories.tsx
│   └── organisms/
│       └── Header/
│           ├── index.tsx
│           └── Header.stories.tsx
└── features/
    ├── contribution/
    │   └── Contribution/
    │       ├── index.tsx
    │       ├── Contribution.tsx
    │       ├── index.stories.tsx
    │       └── index.test.tsx
    └── i18n/
        └── LanguageSwitcher/
            ├── index.tsx
            └── index.stories.tsx
```

This structure ensures:

- Clear separation between components and organizational folders
- Consistency with React/TypeScript best practices
- Easy identification of actual components vs. directory structure
- Scalable architecture that grows with your application
- Clear boundaries between reusable design system and business features

## Available Scripts

The project includes a Makefile for easier command execution. Here are the main commands:

```bash
make install        # Install project dependencies
make dev           # Run development server with hot reload
make build         # Build application for production
make format        # Format code style for consistency
make storybook     # Run Storybook in development mode
make test          # Run all tests
make test-watch    # Run tests in watch mode
make test-coverage # Generate test coverage report
make help          # Show all available commands
```
