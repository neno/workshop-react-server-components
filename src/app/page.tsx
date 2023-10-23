import { APP_NAME } from '@/constants';
import { MoviesByCategory } from '../components/MoviesByCategory';
import { MoviesByGenre } from '../components/MoviesByGenre';

const Home = async () => {
  return (
    <>
      <h1 className='text-6xl font-bold text-center'>{APP_NAME}</h1>
      <MoviesByCategory id={4} priorityImage={true} />
      <MoviesByCategory id={1} />
      <MoviesByCategory id={2} />
      <MoviesByCategory id={3} />
      <MoviesByGenre id={28} />
      <MoviesByGenre id={35} />
      <MoviesByGenre id={18} />
      <MoviesByGenre id={878} />
    </>
  );
};
export default Home;
