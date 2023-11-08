import { getMovieSectionData } from '@/lib/api';
import { Section } from '@/ui/Section';
import { MovieList } from '@/ui/MovieList';
import { MovieCard } from '@/ui/MovieCard';
import { ShowAll } from '@/ui/ShowAll';
import { FlexPlaceholder } from '@/ui/FlexPlaceholder';
import { MovieGroupingType } from '@/types';

interface IMoviesByCategoryProps {
  id: number;
  group: MovieGroupingType;
  priorityImage?: boolean;
  cols?: number;
}

export const MoviesBySection = async ({
  id,
  group,
  priorityImage = false,
  cols = 6,
}: IMoviesByCategoryProps) => {
  const {sectionName, movies} = await getMovieSectionData(id, group, cols - 1);
  const diff = cols - movies.length - 1;
  const urlPath = group === 'categories' ? 'movies/new' : 'movies/old'

  return (
    <Section title={sectionName}>
      <MovieList>
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              priorityImage={priorityImage}
              cols={cols}
              urlPath={urlPath}
            />
          ))}
        <ShowAll href={`/${group}/${id}`} cols={cols} />
        <FlexPlaceholder cols={cols} diff={cols - diff} />
      </MovieList>
    </Section>
  );
};
