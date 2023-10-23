import { getImageUrl } from '@/lib/helpers';
import Image from 'next/image';
import { MovieType } from '@/db/schema';
import { WatchlistButton } from '@/components/AddToWatchlist';

type MovieHeroProps = {
  movie: MovieType;
}

export function MovieHero({ movie }: MovieHeroProps) {
  return (
    <div className='relative aspect-3/1 before:absolute before:inset-0 before:bg-gradient-to-t before:from-neutral-900 before:to-transparent z-0'>
        <Image
          className='object-cover -z-10'
          fill
          src={getImageUrl(movie.backdropPath)}
          alt={movie.title || ''}
        />
        <div className='absolute top-0 left-0 w-full h-full flex flex-col gap-4 justify-end p-8'>
          <h1 className='text-2xl md:text-4xl font-bold text-neutral-100'>
            {movie.title}
          </h1>
          <div className='w-full flex justify-between gap-8 items-end'>
            <p className='basis-1/2'>{movie.overview}</p>
            <div className='basis-1/2'>
              <div className='flex justify-end'>
              <WatchlistButton
                  movieId={movie.id}
                  isInWatchlist={false}
                />
                {/* <ButtonGroup movieId={movie.id} /> */}
                {/* <WatchlistButton
                  movieId={movie.id}
                  handleSubmit={handleSubmit}
                  isInWatchlist={isInWatchlist}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}