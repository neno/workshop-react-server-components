import {getMoviesByCategory} from "@/lib/api";
import {MovieList} from "@/ui/MovieList";
import {getCategoryById, getGenreById} from "@/db";
import {CategoryGrid} from "@/ui/CategoryGrid";

const CategoryPage = async ({ params: {id} }: { params: { id: number }}) => {
  const [category] = await getCategoryById(id); // TODO: - consider returning first item form array
  return (
    <main className='container mx-auto'>
      <pre>{JSON.stringify(category, null, 2)}</pre>
      <h1 className='text-6xl font-bold text-center'>Category: {category.name}</h1>
      <CategoryGrid id={id} />
    </main>
  )
}

export default CategoryPage;