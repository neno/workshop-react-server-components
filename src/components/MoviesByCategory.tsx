import { getMoviesByCategory } from '@/lib/api';
import { Section } from '@/ui/Section';
import { getCategoryById } from '@/db';
import { MovieList } from '@/ui/MovieList';

interface IMoviesByCategoryProps {
  id: number;
  limit?: number;
  priorityImage?: boolean;
}

export const MoviesByCategory = async ({
  id,
  limit = 5,
  priorityImage = false,
}: IMoviesByCategoryProps) => {
  const [category] = await getCategoryById(id);
  const movies = await getMoviesByCategory(id, { limit });

  return (
    <Section title={category.name}>
      <MovieList
        movies={movies}
        pageUrl={`/categories/${id}`}
        priorityImage={priorityImage}
      />
    </Section>
  );
};
