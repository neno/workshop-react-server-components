import { APP_NAME, WATCHLIST_ID } from '@/constants';
import { Suspense } from 'react';
import { MoviesBySection } from '@/components/MoviesBySection';

const Home = async () => {
  return (
    <>
      <h1 className='text-6xl font-bold text-center'>{APP_NAME}</h1>
      <MoviesBySection id={WATCHLIST_ID} group='categories' priorityImage={true} cols={4} />
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesBySection id={1} cols={6} group='categories' />
        <MoviesBySection id={2} cols={6} group='categories' />
        <MoviesBySection id={3} cols={6} group='categories' />
        <MoviesBySection id={28} group='genres' />
        <MoviesBySection id={28} group='genres' />
        <MoviesBySection id={35} group='genres' />
        <MoviesBySection id={18} group='genres' />
        <MoviesBySection id={878} group='genres' />
      </Suspense>
    </>
  );
};
export default Home;
