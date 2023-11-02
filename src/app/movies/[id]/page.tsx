import {
  getMoviesByCategory,
  loadMovieById,
} from '@/lib/api';
import { Stack } from '@/ui/Stack';
import { Suspense } from 'react';
import { Reviews } from '@/app/movies/[id]/components/Reviews';
import { MovieHero } from './components/MovieHero';
import { Deflist } from '@/app/movies/[id]/components/Deflist';
import { WATCHLIST_ID } from '@/constants';

async function MoviePage({ params: { id } }: { params: { id: number } }) {
  const movie = await loadMovieById(id);
  const moviesInWatchlist = await getMoviesByCategory(WATCHLIST_ID);
  const movieIdsInWatchlist = moviesInWatchlist.map((movie) =>
    Number(movie.id)
  );
  const isInWatchlist = movieIdsInWatchlist.includes(Number(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <Stack>
      <MovieHero movie={movie} isInWatchlist={isInWatchlist} />
      <div className='grid grid-cols-2 gap-16'>
        <section>
          <h2 className='border-b border-neutral-600 pb-2'>Reviews</h2>
          <Suspense fallback={<p>Loading...</p>}>
            <Reviews movieId={movie.id} />
          </Suspense>
        </section>
        <section>
          <h2 className='border-b border-neutral-600 pb-2'>Details</h2>
          <Deflist movie={movie} />
        </section>
      </div>
    </Stack>
  );
}

export default MoviePage;
