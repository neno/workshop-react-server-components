import Image from "next/image";
import {MovieType} from "@/db/schema";
import {getImageUrl} from "@/lib/helpers";
import {PreviewModalWrapper} from "@/ui/PreviewModalWrapper";

interface IMovieCardProps {
  movie: Pick<MovieType, 'id' | 'posterPath' | 'title' | 'backdropPath'>
}

export const MovieCard = ({ movie } : IMovieCardProps) => {
  return (
    <div key={movie.id} className="relative aspect-[2/3]">
      <Image className="object-cover" sizes="17vw" fill src={getImageUrl(movie.posterPath)} alt={movie.title || ""} />
      <PreviewModalWrapper movie={movie} />
    </div>
  );
}