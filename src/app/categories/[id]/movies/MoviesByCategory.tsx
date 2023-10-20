import { getMoviesByCategory } from '@/lib/api';
import { Section } from '@/ui/Section';
import { getCategoryById } from '@/db';

interface IMoviesByCategoryProps {
  id: number;
  limit?: number;
}

export const MoviesByCategory = async ({
  id,
  limit = 5,
}: IMoviesByCategoryProps) => {
  const [category] = await getCategoryById(id);
  const movies = await getMoviesByCategory(id, { limit });
  return (
    <Section
      movies={movies}
      title={category.name}
      pageUrl={`/categories/${id}`}
    />
  );
};
