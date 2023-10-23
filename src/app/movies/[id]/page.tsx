import {
  getMoviesByCategory,
  loadMovieById,
} from '@/lib/api';
import { Stack } from '@/ui/Stack';
import { Suspense } from 'react';
import { Reviews } from '@/components/Reviews';
import { revalidatePath } from 'next/cache';
import { MovieHero } from '../../../components/MovieHero';
import { Deflist } from '@/components/Deflist';
import { addToWatchlist, removeFromWatchlist } from '@/app/actions';

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

  const handleSubmit = async () => {
    'use server';

    if (isInWatchlist) {
      await removeFromWatchlist(movie.id);
    } else {
      await addToWatchlist(movie.id);
    }
    
    revalidatePath('/', 'page');
    revalidatePath(`/movies/${movie.id}`, 'page');
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
