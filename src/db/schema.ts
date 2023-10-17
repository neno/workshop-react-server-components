import { InferSelectModel, sql } from 'drizzle-orm';
import { integer } from 'drizzle-orm/sqlite-core';
import {sqliteTable, text} from "drizzle-orm/sqlite-core";

export const movies = sqliteTable("movies", {
  id: integer("id").primaryKey(),
  title: text("title"),
  releaseDate: text("release_date"),
  overview: text("overview"),
  posterPath: text("poster_path"),
  genres: text("genres"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export type Movie = InferSelectModel<typeof movies>;
export type MovieInsert = Omit<Movie, "id" | "createdAt" | "updatedAt">;
