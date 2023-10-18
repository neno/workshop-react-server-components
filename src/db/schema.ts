import { integer, real, text, sqliteTable } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const ommittedKeys = ['adult', 'video', 'backdrop_path'];

export const movies = sqliteTable("movies", {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title'),
  releaseDate: text('release_date'),
  overview: text('overview'),
  posterPath: text('poster_path'),
  genreIds: text('genre_ids'),
  originalLanguage: text('original_language'),
  originalTitle: text('original_title'),
  popularity: real('popularity'),
  voteAverage: real('vote_average'),
  voteCount: integer('vote_count'),
});

export const selectMovieSchema = createSelectSchema(movies);
export type MovieType = z.infer<typeof selectMovieSchema>;
export const MovieKeyEnum = selectMovieSchema.keyof();
export type MovieKey = keyof MovieType;
export const insertMovieSchema = createInsertSchema(movies);

export const genres = sqliteTable("genres", {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  movieIds: text('movie_ids').notNull(),
});

export const selectGenreSchema = createSelectSchema(genres);
export type GenreType = z.infer<typeof selectGenreSchema>;

export const categories = sqliteTable("categories", {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  movieIds: text('movie_ids').notNull(),
});

export const selectCategorySchema = createSelectSchema(categories);
export type CategoryType = z.infer<typeof selectCategorySchema>;
