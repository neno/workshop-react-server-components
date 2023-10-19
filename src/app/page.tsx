import {
  getMoviesByCategory,
  getMoviesByGenre,
  searchByTitle,
} from '@/lib/api';
import {Section} from "@/ui/Section";

const Home = async () => {
  const popularMovies = await getMoviesByCategory(1);
  const actionMovies = await getMoviesByGenre(28);
  const searchMovies = await searchByTitle('father');

  return (
    <main className='container mx-auto'>
      <h1 className='text-6xl font-bold text-center'>Movies</h1>
      <Section movies={searchMovies} title="Search Movies" />
      <Section className="mt-16" movies={popularMovies} title="Search Movies" />
      <Section className="mt-16" movies={actionMovies} title="Action Movies" />
    </main>
  );
};
export default Home;
