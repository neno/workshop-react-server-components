import { genres, genreMoviesMap } from '../data/genres';
import { GenreType } from '../schema';
import { addGenre } from "@/db";

export function addGengres() {
  genres.forEach((genre: Omit<GenreType, 'movieIds'>) => {
    const genreWithMovieIds: GenreType = {
      ...genre,
      movieIds: (genreMoviesMap.get(genre.id) ?? []).join(','),
    };
    addGenre(genreWithMovieIds);
  });
}
