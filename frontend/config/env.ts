const getRequiredEnvVar = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}\n` +
        'Please check your .env file or environment configuration.'
    );
  }
  return value;
};

const _getOptionalEnvVar = (name: string): string | undefined => {
  return process.env[name];
};

const requiredClientEnvVars = {
  NEXT_PUBLIC_GITHUB_USERNAME: getRequiredEnvVar('NEXT_PUBLIC_GITHUB_USERNAME'),
} as const;

const optionalClientEnvVars = {
  // Add optional client-side environment variables here
  // NEXT_PUBLIC_API_URL: getOptionalEnvVar('NEXT_PUBLIC_API_URL'),
} as const;

// Server-side environment variables (
const serverEnvVars = {
  // DATABASE_URL: getRequiredEnvVar('DATABASE_URL'),
  // API_SECRET_KEY: getRequiredEnvVar('API_SECRET_KEY'),
} as const;

export const env = {
  ...requiredClientEnvVars,
  ...optionalClientEnvVars,
  ...serverEnvVars,
} as const;

export type Environment = typeof env;
