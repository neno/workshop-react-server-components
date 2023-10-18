import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { movies } from './schema';
 
const sqlite = new Database('data.db');
const db: BetterSQLite3Database = drizzle(sqlite);


const myMovies = db.select().from(movies).all();
console.log('myMovies', myMovies);


// import {drizzle, BetterSQLite3Database} from "drizzle-orm/better-sqlite3";
// import Database from "better-sqlite3";
// import {migrate} from "drizzle-orm/better-sqlite3/migrator";

// import {useId} from "react";

// const sqlite = new Database("data.db");
// export const db: BetterSQLite3Database = drizzle(sqlite);

// console.log("db", db);


// // export const snakeToCamel = (str: string): string => {
// //   return str.toLowerCase().replace(/(_\w)/g, m => m.toUpperCase().substring(1))
// // };

// // // import { snakeToCamel } from '@/lib/helpers';
// // import { popularMovies } from './data/popular-movies';
// // import { movies, selectMovieSchema } from './schema';
// // import { log } from 'console';

// // const myPopularMovies = popularMovies.map((movie) => {
// //   const newMovie = {};
// //   Object.keys(movie).forEach((key) => {
// //     const newKey = snakeToCamel(key);
// //     // @ts-ignore converting snake_case to camelCase key
// //     let value = movie[key];

// //     if (Array.isArray(value)) {
// //       value = value.join(',');
// //     }

// //     // if (newKey === 'genreIds') {
// //     //   value = value.join(',');
// //     // }
    

// //     // @ts-ignore converting snake_case to camelCase key
// //     newMovie[newKey] = value;
// //   });
// //   return newMovie;
// // });

// // // console.log('hi josip');

// // // console.log('validatedMovies', myPopularMovies);

// // const validatedMovies = myPopularMovies.map((movie) => selectMovieSchema.parse(movie));
// // console.log('validatedMovies', validatedMovies);

// // db.insert(movies).values(validatedMovies).execute();
