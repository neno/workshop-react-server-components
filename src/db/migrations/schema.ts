import { sqliteTable, AnySQLiteColumn, integer, text, real } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"


export const categories = sqliteTable("categories", {
	id: integer("id").primaryKey({ autoIncrement: true }).notNull(),
	name: text("name").notNull(),
	movieIds: text("movie_ids").notNull(),
});

export const genres = sqliteTable("genres", {
	id: integer("id").primaryKey({ autoIncrement: true }).notNull(),
	name: text("name").notNull(),
	movieIds: text("movie_ids").notNull(),
});

export const movies = sqliteTable("movies", {
	id: integer("id").primaryKey({ autoIncrement: true }).notNull(),
	title: text("title"),
	releaseDate: text("release_date"),
	overview: text("overview"),
	posterPath: text("poster_path"),
	backdropPath: text("backdrop_path"),
	genreIds: text("genre_ids"),
	originalLanguage: text("original_language"),
	originalTitle: text("original_title"),
	popularity: real("popularity"),
	voteAverage: real("vote_average"),
	voteCount: integer("vote_count"),
});