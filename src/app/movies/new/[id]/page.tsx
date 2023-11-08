import { loadMovieById } from '@/lib/api';
import { MyButton } from './MyButton';

async function MoviePageTheNewWay({ params: { id } }: { params: { id: string; }; }) {
  const movie = await loadMovieById(Number(id));

  if (!movie) {
    return <h1>Movie not found.</h1>;
  }

  return (
    <>
      <h1>Movie Page rendered on the server with ID: {movie.id}</h1>
      <MyButton movie={movie} />
      <pre>{JSON.stringify(movie, null, 2)}</pre>
    </>
  );
}

export default MoviePageTheNewWay;