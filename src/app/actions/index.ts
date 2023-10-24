"use server"

import { addMovieToCategory, removeMovieFromCategory} from '@/lib/api';
import {revalidatePath} from "next/cache";
import { setTimeout } from 'timers/promises'

export const addMovieIdToWatchlist = (movieId: number) => {
  console.log('addMovieIdToWatchlist', movieId);
  
  addMovieToCategory(movieId, 4);
  revalidatePath("/")
}

export const addToWatchlist = async (movieId: number) => {
  addMovieToCategory(movieId, 4);
};

export const removeFromWatchlist = async (movieId: number) => {
  removeMovieFromCategory(movieId, 4);
};



export const submitToWatchlistAction = async (prevState:any, formData: FormData) => {
  const movieId = formData.get('movieId');
  const isInWatchlist = formData.get('isInWatchlist');
  console.log('submitToWatchlistAction', {movieId, isInWatchlist});

  if (!movieId || !isInWatchlist) {
    return {
      error: 'Missing formData movieId and/or isInWatchlist',
      success: false
    };
  }

  // await setTimeout(3000);

  try {
    if (isInWatchlist === 'true') {
      await removeFromWatchlist(Number(movieId));
    } else {
      await addToWatchlist(Number(movieId));
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
