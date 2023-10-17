import {drizzle, BetterSQLite3Database} from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import {migrate} from "drizzle-orm/better-sqlite3/migrator";
import {movies} from "@/db/schema";
import {useId} from "react";

const sqlite = new Database("sqlite.db");
export const db: BetterSQLite3Database = drizzle(sqlite);

migrate(db, {migrationsFolder: "drizzle"});

db.insert(movies).values({ id: "1", title: "The Matrix" }).execute();

export const getAllMovies = () => {
  return db.select().from(movies).all();
}

export const addMovie = (id: string, title: string) => {
  return db.insert(movies).values({id, title}).execute();
}