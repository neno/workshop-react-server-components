import { MovieCard } from '@/ui/MovieCard';
import { MovieType } from '@/db/schema';
import { ShowAll } from '@/ui/ShowAll';
import { clsxm } from '@/lib/helpers';

interface IMovieListProps {
  movies: Pick<MovieType, 'id' | 'posterPath' | 'title' | 'backdropPath'>[];
  pageUrl?: string;
  priorityImage?: boolean;
  cols?: number;
}

const imageSize = new Map();
imageSize.set(6, '17vm');
imageSize.set(4, '20vm');

export const MovieList = ({ movies, priorityImage, pageUrl, cols = 6 }: IMovieListProps) => {
  const sizes = imageSize.get(cols);
  return (
    <div className={clsxm(
      'grid gap-4 mt-8',
      `grid-cols-${cols}`
    )}>
      {movies.length > 0 && (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} priorityImage={priorityImage} sizes={sizes} />
        ))
      )}
      {pageUrl && <ShowAll href={pageUrl} />}
    </div>
  );
};
