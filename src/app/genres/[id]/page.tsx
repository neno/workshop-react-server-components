import { getGenreById } from '@/db';
import { getMoviesByGenre } from '@/lib/api';
import { MovieList } from '@/ui/MovieList';

const GenrePage = async ({ params: { id } }: { params: { id: number } }) => {
  const [genre] = await getGenreById(id); // TODO: - consider returning first item form array
  const movies = await getMoviesByGenre(id);
  return (
    <main className='container mx-auto'>
      <h1 className='text-6xl font-bold text-center'>Genre: {genre.name}</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default GenrePage;
