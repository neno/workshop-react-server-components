"use server"

import { WATCHLIST_ID } from '@/constants';
import { addMovieToCategory, removeMovieFromCategory} from '@/lib/api';
import {revalidatePath} from "next/cache";

export const submitToWatchlistAction = async (prevState:any, formData: FormData) => {
  const movieId = formData.get('movieId');
  const isInWatchlist = formData.get('isInWatchlist');

  if (!movieId || !isInWatchlist) {
    return {
      error: 'Missing formData movieId and/or isInWatchlist',
      success: false
    };
  }

  try {
    if (isInWatchlist === 'true') {
      await removeMovieFromCategory(Number(movieId), WATCHLIST_ID);
    } else {
      await addMovieToCategory(Number(movieId), WATCHLIST_ID);
    }
    
    revalidatePath('/', 'page');
    revalidatePath(`/movies/${movieId}`, 'page');
  } catch (error) {
    return {
      error: 'Could not submit to watchlist',
      success: false
    };
  }
};
