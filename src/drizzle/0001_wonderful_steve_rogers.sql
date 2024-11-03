ALTER TABLE "users" RENAME COLUMN "name" TO "first";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "last" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "display" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_display_unique" UNIQUE("display");