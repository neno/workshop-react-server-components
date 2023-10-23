import { getMoviesByCategory, loadMovieById, removeMovieFromCategory } from '@/lib/api';
import { getImageUrl } from '@/lib/helpers';
import { Stack } from '@/ui/Stack';
import Image from 'next/image';
import { Suspense } from 'react';
import { Reviews } from '@/components/Reviews';
import { WatchlistButton } from '@/components/AddToWatchlist';
import { PlusIcon } from '@heroicons/react/24/outline';
import { MinusIcon } from '@heroicons/react/24/outline';

import { addMovieToCategory } from '@/lib/api';
import { revalidatePath } from 'next/cache';

async function MoviePage({ params: { id } }: { params: { id: number } }) {
  const movie = await loadMovieById(id);
  const moviesInWatchlist = await getMoviesByCategory(4);
  const movieIdsInWatchlist = moviesInWatchlist.map((movie) => Number(movie.id));
  const isInWatchlist = movieIdsInWatchlist.includes(id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const addToWatchlist = async (movieId: number) => {
    'use server';
    addMovieToCategory(movieId, 4);
    revalidatePath('/');
  };

  const removeFromWatchlist = async (movieId: number) => {
    'use server';
    removeMovieFromCategory(movieId, 4);
    revalidatePath('/');
    revalidatePath(`/movies/${movieId}`);
  };

  const handleSubmit = async (movieId: number) => {
    'use server';

    if (isInWatchlist) {
      await removeFromWatchlist(movieId);
    } else {
      await addToWatchlist(movieId);
    }
  }

  return (
    <Stack>
      <div className='relative aspect-3/1 before:absolute before:inset-0 before:bg-gradient-to-t before:from-neutral-900 before:to-transparent z-0'>
        <Image
          className='object-cover -z-10'
          fill
          src={getImageUrl(movie.backdropPath)}
          alt={movie.title || ''}
        />
        <div className='absolute top-0 left-0 w-full h-full flex flex-col gap-4 justify-end p-8'>
          <h1 className='text-2xl md:text-4xl font-bold text-neutral-100'>
            {movie.title} {isInWatchlist ? 'YES' : 'NO'}
          </h1>
          <div className='w-full flex justify-between gap-8 items-end'>
            <p className='basis-1/2'>{movie.overview}</p>
            <div className='basis-1/2'>
              <div className='flex justify-end'>
                {/* <ButtonGroup movieId={movie.id} /> */}
                <WatchlistButton
                  movieId={movie.id}
                  handleSubmit={handleSubmit}
                  isInWatchlist={isInWatchlist}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-16'>
        <section>
          <h2>Reviews</h2>
          <Suspense fallback={<p>Loading...</p>}>
            <Reviews movieId={movie.id} />
          </Suspense>
        </section>
        <section>
          <h2>Details</h2>
          {JSON.stringify(moviesInWatchlist.map((movie) => movie.id))}
        </section>
      </div>
      {/* <div className='p-4 md:p-6'>
        <pre>{JSON.stringify(movie, null, 2)}</pre>
      </div> */}
    </Stack>
  );
}

export default MoviePage;
