import { getCategoryById } from '@/db';
import { getMoviesByCategory } from '@/lib/api';
import { H1 } from '@/ui/H1';
import { MovieCard } from '@/ui/MovieCard';
import { MovieGrid } from '@/ui/MovieGrid';

const CategoryPage = async ({ params: { id } }: { params: { id: number } }) => {
  const [category] = await getCategoryById(id); // TODO: - consider returning first item form array
  const movies = await getMoviesByCategory(id);
  return (
    <>
      <H1 heading={`${category.name} movies`} />
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} cols={6} />
        ))}
      </MovieGrid>
    </>
  );
};

export default CategoryPage;
