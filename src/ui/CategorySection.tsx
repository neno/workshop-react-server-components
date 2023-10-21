import {MovieList} from "@/ui/MovieList";
import {getMoviesByCategory} from "@/lib/api";

interface ICategorySectionProps {
  id: number
  title: string
  className?: string
}

export const CategorySection = async ({id, title, className} : ICategorySectionProps) => {
  const movies = await getMoviesByCategory(id, {limit: 5});
  return (
    <section className={className}>
      <h2 className='text-4xl font-bold'>{title}</h2>
      <MovieList movies={movies} showAllHref={`/categories/${id}`} />
    </section>
  )
}