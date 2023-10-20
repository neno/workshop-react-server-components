import { MovieList } from '@/ui/MovieList';
import { MovieType } from '@/db/schema';

interface ICategorySectionProps {
  title: string;
  movies: MovieType[];
  pageUrl: string;
}

export const Section = ({ title, movies, pageUrl }: ICategorySectionProps) => {
  return (
    <section className='mt-16'>
      <h2 className='text-4xl font-bold'>{title}</h2>
      <MovieList movies={movies} pageUrl={pageUrl} />
    </section>
  );
};
