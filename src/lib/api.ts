import {updateCategoryMovieIds, getAllGenres, getCategoryById, getGenreById, getMovieById, getMoviesByIds, searchMoviesByTitle} from '@/db';
import { TmdbMovieItem } from '@/db/data/tmdbMovieItem.types';
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
  const movieIdNumber = Number(movieId);
  console.log('addMovieToCategory', movieId, categoryId);
  
  const res = await getCategoryById(categoryId);
  if (!res.length) {
    return null;
  }
  const [category] = res;
  const { movieIds } = category;


  const updatedMovieIds = [...movieIds.split(',').filter(id => Number(id) !== movieIdNumber).map(Number), movieIdNumber].join(',');
  return updateCategoryMovieIds(updatedMovieIds, categoryId);
}

export async function removeMovieFromCategory(movieId: number, categoryId: number)  {
  const res = await getCategoryById(categoryId);
  if (!res.length) {
    return null;
  }
  const [category] = res;
  const { movieIds } = category;

  const updatedMovieIds = movieIds.split(',').map(Number).filter(id => id !== Number(movieId)).join(',');
  console.log('removeMovieFromCategory', movieId, categoryId, updatedMovieIds);
  
  return updateCategoryMovieIds(updatedMovieIds, categoryId);
}

const fetchData = async (path: string, params?: string) => {
  const url = `https://api.themoviedb.org/3/${path}?api_key=00f3f32198696caff437631c007a7548${params ? `&${params}` : ''}`;
  console.log('fetchData - api', url);
  
  const res = await fetch(url);
  return await res.json();
}

export async function fetchReviewsByMovieId(id: number): Promise<TmdbMovieItem[] | undefined> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=00f3f32198696caff437631c007a7548`);
  return await res.json();
}

export async function loadMovieById(id: number): Promise<MovieType | undefined> {
  const [movie] = await getMovieById(id)
  return movie;
}
