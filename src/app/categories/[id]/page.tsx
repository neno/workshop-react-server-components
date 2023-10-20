import { getCategoryById } from '@/db';
import { getMoviesByCategory } from '@/lib/api';
import { MovieList } from '@/ui/MovieList';

const CategoryPage = async ({ params: { id } }: { params: { id: number } }) => {
  const [category] = await getCategoryById(id); // TODO: - consider returning first item form array
  const movies = await getMoviesByCategory(id);
  return (
    <main className='container mx-auto'>
      <h1 className='text-6xl font-bold text-center'>
        Category: {category.name}
      </h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default CategoryPage;
