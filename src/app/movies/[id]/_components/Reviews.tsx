import { fetchReviewsByMovieId } from '@/lib/api';
import { IApiReviewsByMovieResult } from '@/types';
import { Stack } from '@/ui/Stack';
import ReactMarkdown from 'react-markdown';
import { setTimeout } from 'timers/promises';

const fetchReviews = async (
  movieId: number
): Promise<IApiReviewsByMovieResult | undefined> => {
  const res = await fetchReviewsByMovieId(movieId);
  setTimeout(2000); // simulate slow network
  return res;
};

export async function Reviews({ movieId }: { movieId: number }) {
  const data = await fetchReviews(movieId);

  if (!data || data.results.length === 0) {
    return <p>No reviews available for this movie.</p>;
  }

  return (
    <ul className='flex flex-col gap-4'>
      {data.results.map((review) => (
        <li key={review.id}>
          <Stack className='gap-2'>
            <h3>{review.author}</h3>
            <ReactMarkdown>{review.content}</ReactMarkdown>
          </Stack>
        </li>
      ))}
    </ul>
  );
}
