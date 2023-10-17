import {db, getAllMovies} from "@/db";
import {movies} from "@/db/schema";

const Home = async () => {
  const allMovies = db.select().from(movies).all();

  console.log("movies: " +allMovies);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-center">
        Movies
      </h1>
      <pre>{JSON.stringify(allMovies, null, 2)}</pre>
    </main>
  )
}
export default Home
