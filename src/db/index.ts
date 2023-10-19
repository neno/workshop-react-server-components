import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { CategoryType, GenreType, MovieType, categories, genres, movies } from "@/db/schema";

const sqlite = new Database("src/db/data.db", { fileMustExist: true });
export const db: BetterSQLite3Database = drizzle(sqlite);

export const getAllMovies = () => {
  return db.select().from(movies).all();
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

export const getAllCategories = () => {
  return db.select().from(categories).all();
};

export const addCategory = (category: CategoryType) => {
  return db.insert(categories).values(category).execute();
}
