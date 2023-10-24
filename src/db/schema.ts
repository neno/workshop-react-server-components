import { relations } from 'drizzle-orm';
import { integer, real, text, sqliteTable } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const ommittedKeys = ['adult', 'video'];

export const movies = sqliteTable("movies", {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title'),
  releaseDate: text('release_date'),
  overview: text('overview'),
  posterPath: text('poster_path'),
  backdropPath: text('backdrop_path'),
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

export const reviews = sqliteTable("reviews", {
  id: integer('id').primaryKey({ autoIncrement: true }),
  author: text('author').notNull(),
  content: text('content').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' }),
  movieId: integer("movie_id")
      .notNull()
      .references(() => movies.id, { onDelete: "cascade" }),
});

export const reviewsRelations = relations(reviews, ({ one }) => ({
  movie: one(movies, {
    fields: [reviews.movieId],
    references: [movies.id],
  }),
}));

export const selectReviewSchema = createSelectSchema(reviews);
export const insertReviewSchema = createInsertSchema(reviews);
export type ReviewType = z.infer<typeof selectReviewSchema>;
export type InsertReviewType = z.infer<typeof insertReviewSchema>;
