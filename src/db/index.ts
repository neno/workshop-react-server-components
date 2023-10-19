import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { CategoryType, GenreType, MovieType, categories, genres, movies } from "@/db/schema";
import * as schema from "@/db/schema";
import { eq, inArray, like } from 'drizzle-orm';


const sqlite = new Database("src/db/data.db", { fileMustExist: true });
export const db: BetterSQLite3Database<typeof schema> = drizzle(sqlite, { schema });

export const getAllMovies = () => {
  return db.select().from(movies).all();
};

export const getMoviesByIds = (ids: number[]) => {
  return db.select().from(movies).where(inArray(movies.id, ids));
};

export const addMovie = (movie: MovieType) => {
  return db.insert(movies).values(movie).execute();
};

export const getAllGenres = () => {
  return db.select().from(genres).all();
};

export const addGenre = (genre: GenreType) => {
  return db.insert(genres).values(genre).execute();
}

export const getGenreById = (id: number) => {
  return db.select().from(genres).where(eq(genres.id, id));
}

export const getAllCategories = () => {
  return db.select().from(categories).all();
};

export const addCategory = (category: CategoryType) => {
  return db.insert(categories).values(category).execute();
}

export const getCategoryById = (id: number) => {
  return db.select().from(categories).where(eq(categories.id, id));
}

export const searchMoviesByTitle = async (title: string) => {
  // db.select().from(table).where(ilike(table.column, "%llo wor%"));
  // return await db.select().from(movies).where(like(movies.title, "%girl%"));
  return db.select().from(movies).where(like(movies.title, `%${title}%`));
}
