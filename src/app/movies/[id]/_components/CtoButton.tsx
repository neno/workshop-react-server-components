import { WATCHLIST_ID } from '@/constants';
import { addMovieToCategory, removeMovieFromCategory } from '@/lib/api';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { revalidatePath } from 'next/cache';

export function CtoButton({
  movieId,
  isInWatchlist,
}: {
  movieId: number;
  isInWatchlist: boolean;
}) {
  return (
    <form
      action={async () => {
        'use server';

        if (isInWatchlist) {
          await removeMovieFromCategory(Number(movieId), WATCHLIST_ID);
          revalidatePath('/');
          revalidatePath(`/movies/${movieId}`);
        } else {
          await addMovieToCategory(Number(movieId), WATCHLIST_ID);
          revalidatePath('/');
          revalidatePath(`/movies/${movieId}`);
        }
      }}
    >
      <button
        type='submit'
        className='rounded-full bg-transparent text-primary border opacity-70 hover:opacity-90 p-2 md:p-4'
        title={isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
      >
        {isInWatchlist ? (
          <MinusIcon className='h-6 w-6' aria-hidden='true' />
        ) : (
          <PlusIcon className='h-6 w-6' aria-hidden='true' />
        )}
      </button>
    </form>
  );
}
