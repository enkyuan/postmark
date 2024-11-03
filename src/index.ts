import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { Client } from "pg";

const client = new Client({ connectionString: process.env.DB_URL });
await client.connect();
const db = drizzle(client);

const tableName = pgTable("tableName", {
  xata_id: text("xata_id").primaryKey(),
});

const record = await db
  .select()
  .from(tableName)
  .where(eq(tableName.xata_id, "rec_xyz"))
  .execute();
console.log(record);
