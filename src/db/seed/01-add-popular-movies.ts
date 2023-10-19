import { popularMovies } from '../data/popular-movies';
import { MovieType, ommittedKeys, selectMovieSchema } from '../schema';
import { snakeToCamel } from "@/lib/helpers";
import { addMovie } from "@/db";
import { TmdbMovieItem } from '@/db/data/tmdbMovieItem.types';
import { topRatedMovies } from '../data/top-rated-movies';
import { upcomingMovies } from '../data/upcoming-movies';
import { actionMovies } from '../data/action-movies';
import { dramaMovies } from '../data/drama-movies';
import { comedyMovies } from '../data/comedy-movies';
import { sciFiMovies } from '../data/sci-fi-movies';

const allMovies: TmdbMovieItem[] = [...popularMovies];

[...topRatedMovies, ...upcomingMovies, ...actionMovies, ...dramaMovies, ...comedyMovies, ...sciFiMovies].forEach((additionalMovie) => {
  const allMoviesIds = allMovies.map((movie) => movie.id);
  if (!allMoviesIds.includes(additionalMovie.id)) {
    allMovies.push(additionalMovie);
  }
});

export function addAllMovies() {
  try {    
    const allMyMovies = allMovies.map((movie: TmdbMovieItem) => {
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
  
    const validatedMovies = allMyMovies.map((movie) => selectMovieSchema.parse(movie));
    validatedMovies.forEach((movie) => {
      addMovie(movie);
    });
    console.info('Movies added');
    
    return validatedMovies;
  } catch (error) {
    console.error(error);
  }
}

