import { getReviewsByMovieId } from '@/lib/api';

export async function ReviewsByMovie({ id }: { id: number }) {
  const reviews = await getReviewsByMovieId(id);
  return (
    <>
      <h3>Reviews</h3>
      <pre>{JSON.stringify(reviews, null, 2)}</pre>
    </>
  );
}
