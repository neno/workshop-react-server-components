import { getAllGenres, getGenreById } from '@/db';
import { getMoviesByGenre } from '@/lib/api';
import { H1 } from '@/ui/H1';
import { MovieCard } from '@/ui/MovieCard';
import { MovieGrid } from '@/ui/MovieGrid';

const GenrePage = async ({ params: { id } }: { params: { id: number } }) => {
  const [genre] = await getGenreById(id); // TODO: - consider returning first item form array
  const movies = await getMoviesByGenre(id);
  return (
    <>
      <H1 heading={`${genre.name} movies`} />
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} cols={6} />
        ))}
      </MovieGrid>
    </>
  );
};

export default GenrePage;

export async function generateStaticParams() {
  const genres = await getAllGenres();
  return genres.map(({ id }) => ({
    params: {
      id,
    },
  }));
}
