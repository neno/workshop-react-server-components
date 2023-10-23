'use client';

import { WATCHLIST_ID } from '@/constants';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { use, useEffect, useRef, useState } from 'react';

type AddToWatchlistProps = {
  movieId: number;
  isInWatchlist: boolean;
};

export const AddToWatchlist = ({
  movieId,
  isInWatchlist,
  revalidate,
}: AddToWatchlistProps) => {
  // const isInitiallyAdded = useRef(isInWatchlist);

  // const addToWatchlist = async (movieId: number) => {
  //   use(fetch(`/watchlist/${movieId}`, { method: 'POST' }));
  // }
  // const removeFromWatchlist = async (movieId: number) => {
  //   use(fetch(`/watchlist/${movieId}`, { method: 'DELETE'}));
  // }

  const [isAdded, setIsAdded] = useState(isInWatchlist);

  const handleClick = async () => {
    setIsAdded((prev) => !prev);
    // fetch(`/watchlist/${movieId}`, { method:'POST'});
    await fetch(`/watchlist/${movieId}`, { method: isAdded ? 'DELETE' : 'POST' });
    revalidate();
  };

  // useEffect(() => {
  //   if (!movieId || isInWatchlist === isAdded) return;
  //   use(fetch(`/watchlist/${movieId}`, { method: isAdded ? 'POST' : 'DELETE'}));
  // }, [movieId, isAdded, isInWatchlist]);

  console.log('isInWatchlist', isInWatchlist);
  

  return (
    <button
      type='submit'
      className='rounded-full bg-transparent text-primary border opacity-70 hover:opacity-90 p-2 md:p-4'
      title='Add to Watchlist'
      onClick={handleClick}
    >
      <span className='sr-only'>Add to Watchlist</span>
      {isAdded ? (
        <MinusIcon className='h-6 w-6' aria-hidden='true' />
      ) : (
        <PlusIcon className='h-6 w-6' aria-hidden='true' />
      )}
    </button>
  );
};
