'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

type AddToWatchlistProps = {
  movieId: number;
  handleSubmit: (movieId: number) => void;
  isInWatchlist: boolean;
  children?: React.ReactNode;
};

export const WatchlistButton = ({
  movieId,
  handleSubmit,
  isInWatchlist,
  children,
}: AddToWatchlistProps) => {
  const handleFormSubmit = async () => {
    const res = await handleSubmit(movieId);
  };

  return (
    <div>
      <form action={handleFormSubmit}>
        <button
          type='submit'
          className='rounded-full bg-transparent text-primary border opacity-70 hover:opacity-90 p-2 md:p-4'
          title='Add to Watchlist'
        >
          <span className='sr-only'>Add to Watchlist</span>
          {isInWatchlist ? (
            <MinusIcon className='h-6 w-6' aria-hidden='true' />
          ) : (
            <PlusIcon className='h-6 w-6' aria-hidden='true' />
          )}
        </button>
      </form>
    </div>
  );
};