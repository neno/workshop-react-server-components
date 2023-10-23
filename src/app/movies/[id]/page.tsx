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
import { MovieHero } from './MovieHero';
import { Deflist } from '@/components/Deflist';

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
      <MovieHero movie={movie} />
      <div className='grid grid-cols-2 gap-16'>
        <section>
          <h2>Reviews</h2>
          <Suspense fallback={<p>Loading...</p>}>
            <Reviews movieId={movie.id} />
          </Suspense>
        </section>
        <section>
          <h2>Details</h2>
          <Deflist movie={movie} />
        </section>
      </div>
    </Stack>
  );
}

export default MoviePage;
