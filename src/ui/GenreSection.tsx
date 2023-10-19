import {MovieList} from "@/ui/MovieList";
import {getMoviesByGenre} from "@/lib/api";

interface IGenreSectionProps {
  id: number
  title: string
  className?: string
}

export const GenreSection = async({id, title, className} : IGenreSectionProps) => {
  const movies = await getMoviesByGenre(id, {limit: 5});
  return (
    <section className={className}>
      <h2 className='text-4xl font-bold'>{title}</h2>
      <MovieList movies={movies} showAllHref={`/genre/${id}`} />
    </section>
  )
}