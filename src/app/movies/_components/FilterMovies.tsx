import { getAllGenres } from '@/db';
import { FilterMoviesByGenreForm } from './FilterMoviesByGenreForm';

export const FilterMovies = async () => {
  const genres = await getAllGenres();
  return <FilterMoviesByGenreForm genres={genres} />;
};
