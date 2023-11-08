'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { SearchForm } from '@/ui/SearchForm';

export const SearchMovies = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams?.get('q') ?? '';
  const [query, setQuery] = useState(searchTerm);

  const debounced = useDebouncedCallback((value) => {
    setQuery(encodeURIComponent(value));
  }, 500);

  useEffect(() => {
    if (!query) {
      router.replace('/movies');
    } else {
      router.replace(`/movies?q=${query}`);
    }
  }, [query, router]);

  return (
    <SearchForm handleInputChange={debounced} placeholder='Search movies by title' defaultValue={searchTerm} />
  );
};
