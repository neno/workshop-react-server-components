import {getGenreById} from "@/db";
import {GenreGrid} from "@/ui/GenreGrid";

const GenrePage = async ({ params: {id} }: { params: { id: number }}) => {
  const [genre] = await getGenreById(id); // TODO: - consider returning first item form array
  return (
    <main className='container mx-auto'>
      <h1 className='text-6xl font-bold text-center'>Genre: {genre.name}</h1>
      <GenreGrid id={id} />
    </main>
  )
}

export default GenrePage;