import Image from 'next/image';
import { MovieType } from '@/db/schema';
import { getImageUrl } from '@/lib/helpers';
import Link from 'next/link';

interface IMovieCardProps {
  movie: Pick<MovieType, 'id' | 'posterPath' | 'title' | 'backdropPath'>;
  priorityImage?: boolean;
}

export const MovieCard = ({ movie, priorityImage }: IMovieCardProps) => {
  return (
    <Link
      key={movie.id}
      href={`/movies/${movie.id}`}
      className='relative aspect-[2/3]'
    >
      <Image
        className='object-cover'
        sizes='17vw'
        fill
        src={getImageUrl(movie.posterPath)}
        alt={movie.title || ''}
        priority={priorityImage}
      />
    </Link>
  );
};
