


// // export const snakeToCamel = (str: string): string => {
// //   return str.toLowerCase().replace(/(_\w)/g, m => m.toUpperCase().substring(1))
// // };

// // // import { snakeToCamel } from '@/lib/helpers';
import { popularMovies } from './data/popular-movies';
import { movies, selectMovieSchema } from './schema';
import {snakeToCamel} from "@/lib/helpers";
import {addMovie, db} from "@/db";
// // import { log } from 'console';

const myPopularMovies = popularMovies.map((movie) => {
  const newMovie = {};
  Object.keys(movie).forEach((key) => {
    const newKey = snakeToCamel(key);
    // @ts-ignore converting snake_case to camelCase key
    let value = movie[key];

    if (Array.isArray(value)) {
      value = value.join(',');
    }

    // if (newKey === 'genreIds') {
    //   value = value.join(',');
    // }
    

    // @ts-ignore converting snake_case to camelCase key
    newMovie[newKey] = value;
  });
  return newMovie;
});

// // // console.log('hi josip');

// // // console.log('validatedMovies', myPopularMovies);

const validatedMovies = myPopularMovies.map((movie) => selectMovieSchema.parse(movie));
// // console.log('validatedMovies', validatedMovies);

validatedMovies.forEach((movie) => {
  addMovie(movie);
});
