import { getGenreById } from '@/db';
import { getMoviesByGenre } from '@/lib/api';
import { H1 } from '@/ui/H1';
import { MovieList } from '@/ui/MovieList';

const GenrePage = async ({ params: { id } }: { params: { id: number } }) => {
  const [genre] = await getGenreById(id); // TODO: - consider returning first item form array
  const movies = await getMoviesByGenre(id);
  return (
    <>
      <H1 heading={`Genre: ${genre.name}`} />
      <MovieList movies={movies} />
    </>
  );
};

export default GenrePage;
