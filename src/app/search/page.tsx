import { searchByTitle } from '@/lib/api';
import { MovieList } from '@/ui/MovieList';
import { SearchForm } from '@/ui/SearchForm';
import { H1 } from '@/ui/H1';

type SearchPageProps = {
  searchParams: {
    q: string;
  };
};

const SearchPage = async ({ searchParams: { q } }: SearchPageProps) => {
  const movies = await searchByTitle(q);

  return (
    <main className='container mx-auto'>
      <H1 heading={`Search results`} />
      <SearchForm className='mt-8 mb-16' />
      <MovieList movies={movies} />
    </main>
  );
};

export default SearchPage;
