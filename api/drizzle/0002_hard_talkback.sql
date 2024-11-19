ALTER TABLE "account" RENAME TO "accounts";--> statement-breakpoint
ALTER TABLE "accounts" DROP CONSTRAINT "account_userId_users_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
