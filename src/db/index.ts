import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { MovieType, movies } from "@/db/schema";

const sqlite = new Database("src/db/data.db", { fileMustExist: true });
export const db: BetterSQLite3Database = drizzle(sqlite);

export const getAllMovies = () => {
  return db.select().from(movies).all();
};

export const addMovie = (movie: MovieType) => {
  return db.insert(movies).values(movie).execute();
};
