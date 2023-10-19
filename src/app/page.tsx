import { getMoviesByCategory, getMoviesByGenre } from '@/lib/api';

const Home = async () => {
  const popularMovies = await getMoviesByCategory(1);
  const actionMovies = await getMoviesByGenre(28);

  return (
    <main className='container mx-auto'>
      <h1 className='text-6xl font-bold text-center'>Movies</h1>
      <section>
        <h2 className='text-4xl font-bold text-center'>Popular Movies</h2>
        <pre className='mt-16'>{JSON.stringify(popularMovies, null, 2)}</pre>
      </section>
      <section>
        <h2 className='text-4xl font-bold text-center'>Action Movies</h2>
        <pre className='mt-16'>{JSON.stringify(actionMovies, null, 2)}</pre>
      </section>
    </main>
  );
};
export default Home;
