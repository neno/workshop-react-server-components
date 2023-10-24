import { MovieType } from '@/db/schema';
import { getGenres } from '@/lib/api';
import React from 'react';

type DeflistProps = {
  movie: MovieType;
};

export const Deflist = async ({ movie }: DeflistProps) => {
  const genres = await getGenres();

  const movieGenres = movie.genreIds
    ?.split(',')
    .map((id: string) => genres.find((genre) => genre.id === Number(id))?.name)
    .filter((name: string | undefined) => !!name)
    .join(', ');


  return (
    <dl>
      <dt>Released on</dt>
      <dd>{movie.releaseDate}</dd>
      <dt>Rating</dt>
      <dd>{movie.voteAverage}</dd>
      <dt>Popularity</dt>
      <dd>{movie.popularity}</dd>
      <dt>Genres</dt>
      <dd>{movieGenres}</dd>
    </dl>
  );
};
