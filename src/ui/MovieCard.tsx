import Image from "next/image";
import {MovieType} from "@/db/schema";

interface IMovieCardProps {
  movie: Pick<MovieType, 'id' | 'posterPath' | 'title'>
}

export const MovieCard = ({ movie } : IMovieCardProps) => {

  return (
    <div key={movie.id} className="relative aspect-video cursor-pointer">
      <Image className="object-cover" fill src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`} alt={movie.title || ""} />
    </div>
  );
}