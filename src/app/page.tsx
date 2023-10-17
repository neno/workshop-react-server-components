import {getAllMovies} from "@/db";
import {Form} from "@/ui/Form";

const Home = async () => {
  const allMovies = getAllMovies();

  return (
    <main className="container mx-auto">
      <h1 className="text-6xl font-bold text-center">
        Movies
      </h1>
      <pre className="mt-16">{JSON.stringify(allMovies, null, 2)}</pre>
    </main>
  )
}
export default Home
