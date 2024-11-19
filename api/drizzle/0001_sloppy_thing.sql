ALTER TABLE "session" RENAME TO "sessions";--> statement-breakpoint
ALTER TABLE "verification" RENAME TO "verified";--> statement-breakpoint
ALTER TABLE "sessions" DROP CONSTRAINT "session_userId_users_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
