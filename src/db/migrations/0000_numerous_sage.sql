CREATE TABLE `movies` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text,
	`release_date` text,
	`overview` text,
	`poster_path` text,
	`genre_ids` text,
	`original_language` text,
	`original_title` text,
	`popularity` real,
	`vote_average` real,
	`vote_count` integer
);
