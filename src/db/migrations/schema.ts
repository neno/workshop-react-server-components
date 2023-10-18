import { sqliteTable, AnySQLiteColumn, integer, text } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"


export const movies = sqliteTable("movies", {
	id: integer("id").primaryKey().notNull(),
	title: text("title"),
	releaseDate: text("release_date"),
	overview: text("overview"),
	posterPath: text("poster_path"),
	genres: text("genres"),
	createdAt: text("created_at").default("sql`(CURRENT_TIMESTAMP)`"),
	updatedAt: text("updated_at").default("sql`(CURRENT_TIMESTAMP)`"),
});