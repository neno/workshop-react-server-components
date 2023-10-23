import {
  getMoviesByCategory,
  loadMovieById,
  removeMovieFromCategory,
} from '@/lib/api';
import { Stack } from '@/ui/Stack';
import { Suspense } from 'react';
import { Reviews } from '@/components/Reviews';
import { addMovieToCategory } from '@/lib/api';
import { revalidatePath } from 'next/cache';
import { MovieHero } from './MovieHero';
import { Deflist } from '@/components/Deflist';

async function MoviePage({ params: { id } }: { params: { id: number } }) {
  const movie = await loadMovieById(id);
  const moviesInWatchlist = await getMoviesByCategory(4);
  const movieIdsInWatchlist = moviesInWatchlist.map((movie) =>
    Number(movie.id)
  );
  const isInWatchlist = movieIdsInWatchlist.includes(Number(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const addToWatchlist = async (movieId: number) => {
    'use server';
    addMovieToCategory(movieId, 4);
  };

  const removeFromWatchlist = async (movieId: number) => {
    'use server';
    removeMovieFromCategory(movieId, 4);
  };

  const handleSubmit = async () => {
    'use server';

    if (isInWatchlist) {
      await removeFromWatchlist(movie.id);
    } else {
      await addToWatchlist(movie.id);
    }
    revalidatePath('/');
    revalidatePath(`/movies/${movie.id}`)
  };

  return (
    <Stack>
      <MovieHero movie={movie} isInWatchlist={isInWatchlist} handleSubmit={handleSubmit} />
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
