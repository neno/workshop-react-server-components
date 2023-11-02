import { searchByTitle, searchMoviesByTitleAndGenre } from '@/lib/api';
import { H1 } from '@/ui/H1';
import { MovieList } from '@/ui/MovieList';
import { Suspense } from 'react';
import { SearchMovies } from './_components/SearchMovies';
import { FilterMovies } from './_components/FilterMovies';

type MoviesPageProps = {
  searchParams: {
    q?: string;
    genre?: string;
  };
};

export default async function MoviesPage({
  searchParams: { q, genre },
}: MoviesPageProps) {
  const movies = await searchMoviesByTitleAndGenre(q, genre);
  const heading = q ? `Search results for "${q}"` : 'All Movies';

  return (
    <>
      <H1 heading={heading} />
      <Suspense>
        <div className="flex flex-col gap-2 mt-8 mb-16">
          <SearchMovies />
          <FilterMovies />
        </div>
        <MovieList movies={movies} />
      </Suspense>
    </>
  );
}
