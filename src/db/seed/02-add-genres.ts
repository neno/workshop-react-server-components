import { genres, genreMoviesMap } from '../data/genres';
import { GenreType, selectGenreSchema } from '../schema';
import { addGenre } from "@/db";

export function addGengres() {
  try {
    genres.forEach((genre: Omit<GenreType, 'movieIds'>) => {
      const genreWithMovieIds: GenreType = {
        ...genre,
        movieIds: (genreMoviesMap.get(genre.id) ?? []).join(','),
      };
      const validatedGenre = selectGenreSchema.parse(genreWithMovieIds);
      addGenre(validatedGenre);
    });
    console.info('Genres added');
  } catch (error) {
    console.error(error);
  }
}
