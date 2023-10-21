import {searchByTitle} from "@/lib/api";
import {MovieList} from "@/ui/MovieList";
import {Search} from "@/ui/Search";
import {H1} from "@/ui/H1";

const SearchPage = async ({searchParams: {q}}) => {
  const movies = await searchByTitle(q);

  return (
    <main className='container mx-auto'>
      <H1 heading={`Search results`} />
      <Search className="mt-8 mb-16" />
      <MovieList movies={movies} />
    </main>
  );
};

export default SearchPage;