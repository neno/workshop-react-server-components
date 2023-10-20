import { getMoviesByGenre } from '@/lib/api';
import { Section } from '@/ui/Section';
import { getGenreById } from '@/db';

interface IMoviesByGenreProps {
  id: number;
  limit?: number;
}

export const MoviesByGenre = async ({ id, limit = 5 }: IMoviesByGenreProps) => {
  const [genre] = await getGenreById(id);
  const movies = await getMoviesByGenre(id, { limit });
  return (
    <Section movies={movies} title={genre.name} pageUrl={`/genres/${id}`} />
  );
};
