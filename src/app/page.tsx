import {
  getMoviesByCategory,
  getMoviesByGenre,
  searchByTitle,
} from '@/lib/api';
import {MovieSection} from "@/ui/MovieSection";

const Home = async () => {
  const popularMovies = await getMoviesByCategory(1);
  const actionMovies = await getMoviesByGenre(28);
  const searchMovies = await searchByTitle('father');

  return (
    <main className='container mx-auto'>
      <h1 className='text-6xl font-bold text-center'>Movies</h1>
      <MovieSection movies={searchMovies} title="Search Movies" />
      <MovieSection className="mt-16" movies={popularMovies} title="Popular Movies" />
      <MovieSection className="mt-16" movies={actionMovies} title="Action Movies" />
    </main>
  );
};
export default Home;
