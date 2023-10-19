import { getAllCategories, getCategoryById, getGenreById, getMoviesByIds } from '@/db';

export async function getMoviesByCategory(id: number) {
  const res = await getCategoryById(id);

  if (!res.length) {
    return [];
  }

  const movieIds = res[0].movieIds.split(',').map(Number);
  return await getMoviesByIds(movieIds);
}

export async function getMoviesByGenre(id: number) {
  const res = await getGenreById(id);

  if (!res.length) {
    return [];
  }

  const movieIds = res[0].movieIds.split(',').map(Number);
  return await getMoviesByIds(movieIds);
}

