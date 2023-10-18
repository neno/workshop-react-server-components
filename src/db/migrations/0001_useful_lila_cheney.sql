ALTER TABLE movies ADD `genre_ids` text;--> statement-breakpoint
ALTER TABLE movies ADD `original_language` text;--> statement-breakpoint
ALTER TABLE movies ADD `original_title` text;--> statement-breakpoint
ALTER TABLE movies ADD `popularity` numeric;--> statement-breakpoint
ALTER TABLE movies ADD `vote_average` numeric;--> statement-breakpoint
ALTER TABLE movies ADD `vote_count` integer;--> statement-breakpoint
ALTER TABLE `movies` DROP COLUMN `genres`;--> statement-breakpoint
ALTER TABLE `movies` DROP COLUMN `created_at`;--> statement-breakpoint
ALTER TABLE `movies` DROP COLUMN `updated_at`;