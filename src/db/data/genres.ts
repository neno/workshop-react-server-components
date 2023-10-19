import { actionMovies } from './action-movies';
import { comedyMovies } from './comedy-movies';
import { dramaMovies } from './drama-movies';
import { sciFiMovies } from './sci-fi-movies';

export const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

export const genreMoviesMap = new Map<number, number[]>();
genreMoviesMap.set(28, actionMovies.map((movie) => movie.id));
genreMoviesMap.set(35, comedyMovies.map((movie) => movie.id));
genreMoviesMap.set(18, dramaMovies.map((movie) => movie.id));
genreMoviesMap.set(878, sciFiMovies.map((movie) => movie.id));