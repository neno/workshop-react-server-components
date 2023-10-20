import { MovieCard } from '@/ui/MovieCard';
import { MovieType } from '@/db/schema';
import { ShowAll } from '@/ui/ShowAll';

interface IMovieListProps {
  movies: Pick<MovieType, 'id' | 'posterPath' | 'title' | 'backdropPath'>[];
  pageUrl?: string;
}

export const MovieList = ({ movies, pageUrl }: IMovieListProps) => {
  return (
    <div className='grid grid-cols-6 gap-4 mt-8'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      {pageUrl && <ShowAll href={pageUrl} />}
    </div>
  );
};
