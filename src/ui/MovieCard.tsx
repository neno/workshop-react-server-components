import Image from "next/image";
import {MovieType} from "@/db/schema";
import {getImageUrl} from "@/lib/helpers";
import {PreviewModalWrapper} from "@/ui/PreviewModalWrapper";
import Link from "next/link";

interface IMovieCardProps {
  movie: Pick<MovieType, 'id' | 'posterPath' | 'title' | 'backdropPath'>
}

export const MovieCard = ({ movie } : IMovieCardProps) => {
  return (
    <div key={movie.id} className="relative aspect-[2/3]">
      <Link href={`/movies/${movie.id}`}>
      <Image className="object-cover" sizes="17vw" fill src={getImageUrl(movie.posterPath)} alt={movie.title || ""} />
      </Link>
      {/* <PreviewModalWrapper movie={movie} /> */}
    </div>
  );
}