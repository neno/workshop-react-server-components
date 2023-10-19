import {MovieList} from "@/ui/MovieList";
import {MovieType} from "@/db/schema";

interface IMoviesSectionProps {
  movies: Pick<MovieType, 'id' | 'posterPath' | 'title'>[]
  title: string
  className?: string
}

export const Section = ({movies, title, className} : IMoviesSectionProps) => {
  return (
    <section className={className}>
      <h2 className='text-4xl font-bold'>{title}</h2>
      <MovieList movies={movies} />
    </section>
  )
}