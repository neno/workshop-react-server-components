'use server';

import { redirect } from "next/navigation";

export const filterMoviesAction = async (_prevState: unknown, formData: FormData) => {
  const genreFilters = formData.getAll('genre[]');
  const searchQuery = formData.get('searchQuery') as string;
  const searchQueryParams = new URLSearchParams([['q', searchQuery]]);

  if (genreFilters.length > 0) {
    const filterParams = new URLSearchParams([['genre', genreFilters.join(',')]]);
    const params = searchQueryParams ? `${searchQueryParams}&${filterParams}` : filterParams;
    redirect(`/movies?${params}`);
  }

  if (searchQuery) {
    redirect(`/movies?${searchQueryParams}`);
  }

  redirect('/movies');
};
