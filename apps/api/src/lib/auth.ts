import { Pool } from "pg";
import { betterAuth } from "better-auth";
import { magicLink } from "better-auth/plugins";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DB_URL,
  }),
  emailAndPassword: {
    enabled: true,
  },
  // plugins: [
  //   magicLink({
  //
  //   })
  // ],
});
