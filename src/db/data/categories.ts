import { popularMovies } from './popular-movies';
import { topRatedMovies } from './top-rated-movies';
import { upcomingMovies } from './upcoming-movies';

export const categories = [
  { id: 1, name: 'Popular' },
  { id: 2, name: 'Top-rated' },
  { id: 3, name: 'Upcoming' },
  { id: 4, name: 'Watchlist' },
];

export const categoryMoviesMap = new Map<number, number[]>();
categoryMoviesMap.set(1, popularMovies.map((movie) => movie.id));
categoryMoviesMap.set(2, topRatedMovies.map((movie) => movie.id));
categoryMoviesMap.set(3, upcomingMovies.map((movie) => movie.id));
