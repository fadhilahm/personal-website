import { drizzle } from 'drizzle-orm/mysql2';
import { createPool } from 'mysql2/promise';

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

const pool = createPool(getDatabaseUrl());

export const db = drizzle(pool);
export * from './schema';
