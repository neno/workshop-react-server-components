import {
  getMoviesByCategory,
  getMoviesByGenre,
  searchByTitle,
} from '@/lib/api';
import {MovieCard} from "@/ui/MovieCard";

const Home = async () => {
  const popularMovies = await getMoviesByCategory(1);
  const actionMovies = await getMoviesByGenre(28);
  const searchMovies = await searchByTitle('father');

  return (
    <main className='container mx-auto'>
      <h1 className='text-6xl font-bold text-center'>Movies</h1>
      <section>
        <h2 className='text-4xl font-bold text-center'>Search Movies</h2>
        {searchMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
      <section>
        <h2 className='text-4xl font-bold text-center'>Popular Movies</h2>
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
      <section>
        <h2 className='text-4xl font-bold text-center'>Action Movies</h2>
        {actionMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
};
export default Home;
