import { config } from "dotenv";
import { betterAuth } from "better-auth";
import { db } from "../src";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import path from 'path';

const envPath = path.resolve(__dirname, 'config', '.env');

const result = config({ path: envPath });

if (result.error) {
  throw result.error;
}

console.log('Parsed environment variables:', result.parsed);


console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID);
console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }
  },
  database: drizzleAdapter(db, {
    provider: "pg", 
  })
})

