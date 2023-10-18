import { MovieType, insertMovieSchema, selectMovieSchema } from '@/db/schema';
import { TmdbMovieItem } from '@/schemas/tmdbMovieItem';

export const snakeToCamel = (str: string): string => {
  return str.toLowerCase().replace(/(_\w)/g, m => m.toUpperCase().substring(1))
};

export const mapMovies = (movies: TmdbMovieItem[]): MovieType[] => {
  return movies.map(movie => selectMovieSchema.parse(movie));
};
