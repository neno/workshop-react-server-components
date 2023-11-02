import { searchByTitle } from '@/lib/api';
import { H1 } from '@/ui/H1';
import { MovieList } from '@/ui/MovieList';
import { Suspense } from 'react';
import { SearchMovies } from './components/SearchMovies';

type MoviesPageProps = {
  searchParams: {
    q?: string;
  };
};

export default async function MoviesPage({
  searchParams: { q },
}: MoviesPageProps) {
  const movies = await searchByTitle(q);
  const title = q ? `Search results for "${q}"` : 'All Movies';

  return (
    <>
      <H1 heading={title} />
      <Suspense>
        <SearchMovies />
        <MovieList movies={movies} />
      </Suspense>
    </>
  );
}
