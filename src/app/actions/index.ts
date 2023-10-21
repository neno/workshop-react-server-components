"use server"

import { addMovieToCategory} from '@/lib/api';
import {revalidatePath} from "next/cache";

export const addMovieIdToWatchlist = (movieId: number) => {
  addMovieToCategory(movieId, 4);
  revalidatePath("/")
}