-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `movies` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text,
	`release_date` text,
	`overview` text,
	`poster_path` text,
	`genres` text,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP)
);

*/