import dayjs from 'dayjs';
import { MovieType } from '@/db/schema';
import { getGenres } from '@/lib/api';

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

  let date = '';
  if (movie.releaseDate) {
    date = dayjs(movie.releaseDate).format('MMMM D, YYYY');
  }

  return (
    <dl>
      <dt>Released on</dt>
      <dd>{date}</dd>
      <dt>Original language</dt>
      <dd>{movie.originalLanguage}</dd>
      <dt>Rating</dt>
      <dd>{movie.voteAverage}</dd>
      <dt>Popularity</dt>
      <dd>{movie.popularity}</dd>
      <dt>Genres</dt>
      <dd>{movieGenres}</dd>
    </dl>
  );
};
