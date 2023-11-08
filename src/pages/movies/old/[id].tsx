import { MovieType } from '@/db/schema';
import { loadMovieById } from '@/lib/api';
import { GetServerSideProps } from 'next';

const MoviePageTheOldWay = ({
  movie,
}: { movie: MovieType | undefined}) => {
  if (!movie) {
    return <h1>Movie not found.</h1>
  }

  return (
    <>
      <h1>Movie Page rendered on the server with ID: {movie.id}</h1>
      <button className='px-4 py-2 rounded bg-blue-500 text-white' onClick={() => alert(movie.title)}>Click Me!</button>
      <pre>{JSON.stringify(movie, null, 2)}</pre>
    </>
  );
};

export default MoviePageTheOldWay;

export const getServerSideProps: GetServerSideProps = (async (context) => {
  const movieId = Number(context.query.id);
  const movie = await loadMovieById(movieId);

  return { props: { movie } };
});
