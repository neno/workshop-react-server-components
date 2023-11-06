import { addMovieToCategory as dbAddMovieToCategory, findMoviesByGenreIds, findMoviesByTitleAndGenre, getAllGenres, getAllMovies, getCategoryById, getGenreById, getMovieById, getMoviesByIds, searchMoviesByTitle } from '@/db';
import { MovieType } from '@/db/schema';
import { IApiReviewsByMovieResult, MovieGroupingType } from '@/types';

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

export async function searchByTitle(title?: string): Promise<MovieType[]> {
  if (!title) {
    return await getAllMovies();
  }
  return await searchMoviesByTitle(title);
}

export async function searchMoviesByTitleAndGenre(title?: string, genre: string = ''): Promise<MovieType[]> {
  if (genre && title) {
    return await findMoviesByTitleAndGenre(title, genre);
  }

  if (genre) {
    return await findMoviesByGenreIds(genre);
  }

  if (title) {
    return await searchMoviesByTitle(title);
  }

  return await getAllMovies();
}

export async function addMovieToCategory(movieId: number, categoryId: number) {
  const res = await getCategoryById(categoryId);
  if (!res.length) {
    return null;
  }
  const [category] = res;
  const { movieIds } = category;


  const updatedMovieIds = [...movieIds.split(',').map(Number), movieId].join(',');
  return dbAddMovieToCategory(updatedMovieIds, categoryId);
}

export async function removeMovieFromCategory(movieId: number, categoryId: number) {
  const res = await getCategoryById(categoryId);
  if (!res.length) {
    return null;
  }
  const [category] = res;
  const { movieIds } = category;

  const updatedMovieIds = movieIds.split(',').map(Number).filter(id => id !== movieId).join(',');
  return dbAddMovieToCategory(updatedMovieIds, categoryId);
}

export async function fetchReviewsByMovieId(id: number): Promise<IApiReviewsByMovieResult | undefined> {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=00f3f32198696caff437631c007a7548`);
  return await res.json();
}

export async function loadMovieById(id: number): Promise<MovieType | undefined> {
  const [movie] = await getMovieById(id)
  return movie;
}

export async function getMovieSectionData(
  id: number,
  group: MovieGroupingType,
  limit: number
): Promise<{
  sectionName: string;
  movies: MovieType[];
}> {
  if (group === 'categories') {
    const [category] = await getCategoryById(id);
    const movies = await getMoviesByCategory(id, { limit });
    return { sectionName: category.name, movies };
  }

  const [genre] = await getGenreById(id);
  const movies = await getMoviesByGenre(id, { limit });
  return { sectionName: genre.name, movies };
}
