import { TmdbMovieItem } from '@/schemas/tmdbMovieItem';
import { InferSelectModel, sql } from 'drizzle-orm';
import { real } from 'drizzle-orm/sqlite-core';
import { integer, numeric, text, sqliteTable } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
// import {sqliteTable, text, SQLiteBoolean} from "drizzle-orm/sqlite-core";

// export const tmdbMovieItemSchema = object({
//   id: integer('id').primaryKey(),
//   title: text('title'),
//   release_date: text('release_date'),
//   overview: text('overview'),
//   poster_path: text('poster_path'),
//   adult: boolean('adult'),
//   backdrop_path: text('backdrop_path'),
//   genre_ids: array(integer()),
//   video: boolean('video'),
//   original_language: text('original_language'),
//   original_title: text('original_title'),
//   popularity: integer('popularity'),
//   vote_average: integer('vote_average'),
//   vote_count: integer('vote_count'),
// });

export const movies = sqliteTable("movies", {
  id: integer('id').primaryKey(),
  title: text('title'),
  releaseDate: text('release_date'),
  overview: text('overview'),
  posterPath: text('poster_path'),
  // adult: integer('adult'),
  // backdropPath: text('backdrop_path'),
  genreIds: text('genre_ids'),
  // video: integer('video'),
  originalLanguage: text('original_language'),
  originalTitle: text('original_title'),
  popularity: real('popularity'),
  voteAverage: real('vote_average'),
  voteCount: integer('vote_count'),
});

export const selectMovieSchema = createSelectSchema(movies);
export type MovieType = z.infer<typeof selectMovieSchema>;
export const insertMovieSchema = createInsertSchema(movies);
