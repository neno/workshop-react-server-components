import {addMovieToCategory as dbAddMovieToCategory, getAllGenres, getCategoryById, getGenreById, getMovieById, getMoviesByIds, searchMoviesByTitle} from '@/db';
import { TmdbMovieItem } from '@/db/data/tmdbMovieItem.types';
import { MovieType } from '@/db/schema';
import { IApiReviewsByMovieResult } from '@/types';

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

export async function getGenres() {
  return await getAllGenres();
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
  const [category] = res;
  const { movieIds } = category;


  const updatedMovieIds = [...movieIds.split(',').map(Number), movieId].join(',');
  return dbAddMovieToCategory(updatedMovieIds, categoryId);
}

export async function removeMovieFromCategory(movieId: number, categoryId: number)  {
  const res = await getCategoryById(categoryId);
  if (!res.length) {
    return null;
  }
  const [category] = res;
  const { movieIds } = category;

  const updatedMovieIds = movieIds.split(',').map(Number).filter(id => id !== movieId).join(',');
  return dbAddMovieToCategory(updatedMovieIds, categoryId);
}

const fetchData = async (path: string, params?: string) => {
  const url = `https://api.themoviedb.org/3/${path}?api_key=00f3f32198696caff437631c007a7548${params ? `&${params}` : ''}`;
  const res = await fetch(url);
  return await res.json();
}

export async function fetchReviewsByMovieId(id: number): Promise<IApiReviewsByMovieResult | undefined> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=00f3f32198696caff437631c007a7548`);
  return await res.json();
}

export async function loadMovieById(id: number): Promise<MovieType | undefined> {
  const [movie] = await getMovieById(id)
  return movie;
}
