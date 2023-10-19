import {
  searchByTitle,
} from '@/lib/api';

import {GenreSection} from "@/ui/GenreSection";
import {CategorySection} from "@/ui/CategorySection";

const Home = async () => {
  const searchMovies = await searchByTitle('father');

  return (
    <main className='container mx-auto'>
      <h1 className='text-6xl font-bold text-center'>Movies</h1>
      {/*<GenreSection movies={searchMovies} title="Search Movies" />*/}
      // TODO: - add search component
      // TODO: - maybe we could use the same component for categories and genre
      <CategorySection className="mt-16" title="Popular Movies" id={1} />
      <CategorySection className="mt-16" title="Top-rated" id={2} />
      <CategorySection className="mt-16" title="Upcoming" id={3} />
      <GenreSection className="mt-16" title="Action Movies" id={28} />
      <GenreSection className="mt-16" title="Comedy Movies" id={35} />
      <GenreSection className="mt-16" title="Drama Movies" id={18} />
      <GenreSection className="mt-16" title="Science Fiction Movies" id={878} />
    </main>
  );
};
export default Home;