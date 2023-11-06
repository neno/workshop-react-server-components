import { searchMoviesByTitleAndGenre } from '@/lib/api';
import { H1 } from '@/ui/H1';
import { Suspense } from 'react';
import { SearchMovies } from './_components/SearchMovies';
import { FilterMovies } from './_components/FilterMovies';
import { MovieCard } from '@/ui/MovieCard';
import { MovieGrid } from '@/ui/MovieGrid';

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
      <div className='flex flex-col gap-2 mt-8 mb-16'>
        <SearchMovies />
        <FilterMovies />
      </div>
      <Suspense key={`${q}-${genre}`}>
        <MovieGrid>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} cols={6} />
          ))}
        </MovieGrid>
      </Suspense>
    </>
  );
}
