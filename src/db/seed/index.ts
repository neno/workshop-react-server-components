import { addPopularMovies } from './01-add-popular-movies';

let allMovieIds: number[] = [];

const popularMovies = addPopularMovies();

allMovieIds = [...allMovieIds, ...popularMovies.map((movie) => movie.id)];