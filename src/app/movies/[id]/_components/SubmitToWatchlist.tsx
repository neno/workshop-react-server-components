'use client';

import { submitToWatchlistAction } from '@/actions/submitToWatchlist.action';
import { Spinner } from '@/ui/Spinner';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useFormState, useFormStatus } from 'react-dom';

type SubmitToWatchlistProps = {
  movieId: number;
  isInWatchlist: boolean;
};

type SubmitToWatchlistFormBodyProps = {
  movieId: number;
  isInWatchlist: boolean;
};

const SubmitToWatchlistFormBody = ({
  movieId,
  isInWatchlist,
}: SubmitToWatchlistFormBodyProps) => {
  const formStatus = useFormStatus();

  return (
    <fieldset>
      <input type='hidden' name='movieId' value={movieId} />
      <input
        type='hidden'
        name='isInWatchlist'
        value={isInWatchlist ? 'true' : 'false'}
      />
      {formStatus.pending ? (
        <Spinner />
      ) : (
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
      )}
    </fieldset>
  );
};

export const SubmitToWatchlist = ({
  movieId,
  isInWatchlist,
}: SubmitToWatchlistProps) => {
  const [state, formAction] = useFormState(submitToWatchlistAction, {
    error: '',
    success: false,
  });
  return (
    <form action={formAction}>
      <SubmitToWatchlistFormBody
        movieId={movieId}
        isInWatchlist={isInWatchlist}
      />
    </form>
  );
};
