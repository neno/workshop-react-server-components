import {MovieList} from "@/ui/MovieList";
import {getMoviesByGenre} from "@/lib/api";

interface IGenreGridProps {
  id: number
}
export const GenreGrid = async ({ id }: IGenreGridProps) => {
  const movies = await getMoviesByGenre(id);
  return (
    <MovieList movies={movies} />
  )
};