import {MovieCard} from "@/ui/MovieCard";
import {MovieType} from "@/db/schema";

interface IMovieListProps {
  movies: Pick<MovieType, 'id' | 'posterPath' | 'title'>[]
}

export const MovieList = ({ movies } : IMovieListProps) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  )
}