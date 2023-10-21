import {MovieList} from "@/ui/MovieList";
import {getMoviesByCategory} from "@/lib/api";

interface ICategoryGridProps {
  id: number
}
export const CategoryGrid = async ({ id }: ICategoryGridProps) => {
  const movies = await getMoviesByCategory(id);
  return (
    <MovieList movies={movies} />
  )
};