import { integer, real, text, sqliteTable } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const ommittedKeys = ['adult', 'video', 'backdrop_path'];

export const movies = sqliteTable("movies", {
  id: integer('id').primaryKey(),
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
