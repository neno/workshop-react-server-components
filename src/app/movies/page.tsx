import { getAllMovies } from "@/db";
import { H1 } from "@/ui/H1";
import { MovieList } from "@/ui/MovieList";

export default async function MoviesPage() {
  const movies = await getAllMovies();

  return (
    <>
      <H1 heading={`All Movies`} />
      <MovieList movies={movies} />
    </>
  );
}