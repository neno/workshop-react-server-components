import { MovieCard } from '@/ui/MovieCard';
import { MovieType } from '@/db/schema';
import { ShowAll } from '@/ui/ShowAll';

interface IMovieListProps {
  movies: Pick<MovieType, 'id' | 'posterPath' | 'title' | 'backdropPath'>[];
  pageUrl?: string;
  priorityImage?: boolean;
}

export const MovieList = ({ movies, priorityImage, pageUrl }: IMovieListProps) => {
  return (
    <div className='grid grid-cols-6 gap-4 mt-8'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} priorityImage={priorityImage}/>
      ))}
      {pageUrl && <ShowAll href={pageUrl} />}
    </div>
  );
};
