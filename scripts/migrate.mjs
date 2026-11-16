import { readFile } from 'node:fs/promises';
import { neon } from '@neondatabase/serverless';

try {
  process.loadEnvFile('.env.local');
} catch {
  // .env.local is optional when DATABASE_URL is exported by the shell.
}

const url = process.env.DATABASE_URL;
if (!url) {
  console.error('DATABASE_URL is not set. Add it to .env.local or export it.');
  process.exit(1);
}

const schema = await readFile(new URL('../db/schema.sql', import.meta.url), 'utf8');
const statements = schema
  .split(/;\s*$/m)
  .map((part) => part.trim())
  .filter(Boolean);

const sql = neon(url);

for (const statement of statements) {
  await sql.query(statement);
  console.log(`Applied: ${statement.split('\n')[0].trim()}`);
}

console.log('Schema is up to date.');
