import {addMovieToCategory as dbAddMovieToCategory, getCategoryById, getGenreById, getMoviesByIds, searchMoviesByTitle} from '@/db';
import { MovieType } from '@/db/schema';

export async function getMoviesByCategory(id: number, options = {}) {
  const res = await getCategoryById(id);

  if (!res.length) {
    return [];
  }

  const movieIds = res[0].movieIds.split(',').map(Number);
  return await getMoviesByIds(movieIds, options);
}

export async function getMoviesByGenre(id: number, options = {}) {
  const res = await getGenreById(id);

  if (!res.length) {
    return [];
  }

  const movieIds = res[0].movieIds.split(',').map(Number);
  return await getMoviesByIds(movieIds, options);
}

export async function searchByTitle(title: string): Promise<MovieType[]> {
  if (!title) {
    return [];
  }
  return await searchMoviesByTitle(title);
}

export async function addMovieToCategory(movieId: number, categoryId: number)  {
  const res = await getCategoryById(categoryId);
  if (!res.length) {
    return null;
  }
  const movieIds = res[0].movieIds.split(',').map(Number);
  const updatedMovieIds = [...movieIds, movieId].join(',');

  dbAddMovieToCategory(updatedMovieIds, categoryId);
}
