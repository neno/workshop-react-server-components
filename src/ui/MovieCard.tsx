import Image from 'next/image';
import { MovieType } from '@/db/schema';
import { clsxm, getImageUrl } from '@/lib/helpers';
import Link from 'next/link';

interface IMovieCardProps {
  movie: Pick<MovieType, 'id' | 'posterPath' | 'title' | 'backdropPath'>;
  cols: number;
  priorityImage?: boolean;
  urlPath?: string;
}

export const MovieCard = ({ movie, priorityImage, cols = 6, urlPath = 'movies' }: IMovieCardProps) => {
  return (
    <Link
      key={movie.id}
      href={`/${urlPath}/${movie.id}`}
      prefetch={false}
      className={clsxm(
        `relative aspect-2/3 overflow-hidden flex-1`,
        `basis-1/${cols}`,
      )}
    >
      <Image
        className='max-w-full object-cover'
        sizes='17vw'
        fill
        src={getImageUrl(movie.posterPath)}
        alt={movie.title || ''}
        priority={priorityImage}
        quality={75}
      />
    </Link>
  );
};
