import { searchByTitle } from '@/lib/api';
import { MoviesByCategory } from './categories/[id]/movies/MoviesByCategory';
import { MoviesByGenre } from './genres/[id]/movies/MoviesByGenre';
import {Search} from "@/ui/Search";

const Home = async () => {

  return (
    <>
      <h1 className='text-6xl font-bold text-center'>Movies</h1>
      {/*<GenreSection movies={searchMovies} title="Search Movies" />*/}
      {/* TODO: - add search component // TODO: - maybe we could use the same component for categories and genre */}
      <MoviesByCategory id={1} />
      <MoviesByCategory id={2} />
      <MoviesByCategory id={3} />
      <MoviesByGenre id={28} />
      <MoviesByGenre id={35} />
      <MoviesByGenre id={18} />
      <MoviesByGenre id={878} />
    </>
  );
};
export default Home;