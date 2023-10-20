import { getCategoryById } from '@/db';
import { getMoviesByCategory } from '@/lib/api';
import { H1 } from '@/ui/H1';
import { MovieList } from '@/ui/MovieList';

const CategoryPage = async ({ params: { id } }: { params: { id: number } }) => {
  const [category] = await getCategoryById(id); // TODO: - consider returning first item form array
  const movies = await getMoviesByCategory(id);
  return (
    <>
      <h1 className='text-6xl font-bold text-center'>
        Category: {category.name}
      </h1>
      <H1 heading={`Category: ${category.name}`} />
      <MovieList movies={movies} />
    </>
  );
};

export default CategoryPage;
