import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from "pg";
import { users, sessions, accounts, verified, books } from "./db/schema";

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

const db = drizzle(pool, {
  schema: {
    users,
    sessions,
    accounts,
    verified,
    books,
  },
});

export { db };
