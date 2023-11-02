'use server';

export const filterMoviesAction = async (_prevState: unknown, formData: FormData) => {
  const genreFilters = formData.getAll('genre[]');

  console.log('genreFilters', genreFilters);
};
