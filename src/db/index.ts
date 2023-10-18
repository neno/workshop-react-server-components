import {drizzle, BetterSQLite3Database} from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import {migrate} from "drizzle-orm/better-sqlite3/migrator";
import {movies} from "@/db/schema";
import {useId} from "react";

const sqlite = new Database("src/db/data.db", {fileMustExist: true});
export const db: BetterSQLite3Database = drizzle(sqlite);

// migrate(db, {migrationsFolder: "drizzle"});

// db.insert(movies).values({ id: "1", title: "The Matrix" }).execute();

export const getAllMovies = () => {
  return db.select().from(movies).all();
}

export const addMovie = (movie) => {
  return db.insert(movies).values(movie).execute();
}