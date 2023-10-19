import {
  getMoviesByCategory,
  getMoviesByGenre,
  searchByTitle,
} from '@/lib/api';
import {MovieList} from "@/ui/MovieList";

const Home = async () => {
  const popularMovies = await getMoviesByCategory(1);
  const actionMovies = await getMoviesByGenre(28);
  const searchMovies = await searchByTitle('father');

  return (
    <main className='container mx-auto'>
      <h1 className='text-6xl font-bold text-center'>Movies</h1>
      <section>
        <h2 className='text-4xl font-bold text-center'>Search Movies</h2>
        <MovieList movies={searchMovies} />
      </section>
      <section>
        <h2 className='text-4xl font-bold text-center'>Popular Movies</h2>
        <MovieList movies={popularMovies} />
      </section>
      <section>
        <h2 className='text-4xl font-bold text-center'>Action Movies</h2>
        <MovieList movies={actionMovies} />
      </section>
    </main>
  );
};
export default Home;
