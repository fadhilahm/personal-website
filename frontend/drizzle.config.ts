import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

// Load env file based on environment (ENV and NODE_ENV use the same value)
const env = process.env.ENV ?? process.env.NODE_ENV ?? process.env.APP_ENV ?? 'local';
const envFile = env === 'production' ? '.env.production' : '.env';
config({ path: envFile, override: true });

function getDatabaseUrl(): string {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }
  const required = [
    'MYSQL_USER',
    'MYSQL_PASSWORD',
    'MYSQL_HOST',
    'MYSQL_PORT',
    'MYSQL_DATABASE',
  ] as const;
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}. Set these or DATABASE_URL.`
    );
  }
  const user = process.env.MYSQL_USER!;
  const password = encodeURIComponent(process.env.MYSQL_PASSWORD!);
  const host = process.env.MYSQL_HOST!;
  const port = process.env.MYSQL_PORT!;
  const database = process.env.MYSQL_DATABASE!;
  return `mysql://${user}:${password}@${host}:${port}/${database}`;
}

export default defineConfig({
  schema: './db/schema.ts',
  out: './db/migrations',
  dialect: 'mysql',
  dbCredentials: {
    url: getDatabaseUrl(),
  },
});
