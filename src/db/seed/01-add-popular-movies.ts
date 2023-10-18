import { popularMovies } from '../data/popular-movies';
import { MovieType, ommittedKeys, selectMovieSchema } from '../schema';
import { snakeToCamel } from "@/lib/helpers";
import { addMovie } from "@/db";
import { TmdbMovieItem } from '@/db/data/tmdbMovieItem.types';

export function addPopularMovies() {
  const myPopularMovies = popularMovies.map((movie: TmdbMovieItem) => {
    let newMovie: MovieType = {} as MovieType;
    Object.keys(movie).filter((key) => !ommittedKeys.includes(key)).forEach((key) => {
      let value = movie[key as keyof TmdbMovieItem] ?? null;

      if (typeof value === 'boolean') {
        value = value ? '1' : '0';
      }

      if (Array.isArray(value)) {
        value = value.join(',');
      }

      const camelCaseKey = snakeToCamel(key);
      // @ts-ignore converting snake_case to camelCase key
      newMovie[camelCaseKey] = value;
    });
    return newMovie;
  });

  const validatedMovies = myPopularMovies.map((movie) => selectMovieSchema.parse(movie));
  validatedMovies.forEach((movie) => {
    addMovie(movie);
  });

  return validatedMovies;
}

