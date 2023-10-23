import { getMoviesByGenre } from '@/lib/api';
import { Section } from '@/ui/Section';
import { getGenreById } from '@/db';
import { MovieList } from '@/ui/MovieList';

interface IMoviesByGenreProps {
  id: number;
  limit?: number;
}

export const MoviesByGenre = async ({ id, limit = 5 }: IMoviesByGenreProps) => {
  const [genre] = await getGenreById(id);
  const movies = await getMoviesByGenre(id, { limit });
  return (
    <Section title={genre.name}>
      <MovieList movies={movies} pageUrl={`/genres/${id}`} />
    </Section>
  );
};
