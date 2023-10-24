import { fetchReviewsByMovieId } from '@/lib/api';
import { IApiReviewsByMovieResult } from '@/types';
import { Stack } from '@/ui/Stack';
import { log } from 'console';
import ReactMarkdown from 'react-markdown';

const fetchReviews = async (
  movieId: number
): Promise<IApiReviewsByMovieResult | undefined> => {
  const data = await fetchReviewsByMovieId(movieId);
  // @ts-ignore
  return new Promise((resolve) => setTimeout(() => resolve(data), 2000));
};

export async function Reviews({ movieId }: { movieId: number }) {
  const data = await fetchReviews(movieId);

  if (data && data.results) {
    if (data.results.length === 0) {
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

  return <p>No reviews available</p>;
}
