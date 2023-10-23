"use server"

import { addMovieToCategory, removeMovieFromCategory} from '@/lib/api';
import {revalidatePath} from "next/cache";

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
