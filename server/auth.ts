import "dotenv/config";
import { betterAuth } from "better-auth";
import { db } from "./src/";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import path from 'path';

const auth = betterAuth({
    user: {
        changeEmail: {
            enabled: true,
        }
    },
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }
    },
    database: drizzleAdapter(db, {
        provider: "pg", 
    })
})


export { auth };
