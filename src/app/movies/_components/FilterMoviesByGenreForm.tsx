'use client';

import { filterMoviesAction } from '@/actions/filterMovies.action';
import { GenreType } from '@/db/schema';
import { clsxm } from '@/lib/helpers';
import { useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams } from 'next/navigation';


export const FilterMoviesByGenreForm = ({
  genres,
}: {
  genres: GenreType[];
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const searchParamsInputRef = useRef<HTMLInputElement>(null);

  const [genreIds, setGenreIds] = useState<string[]>([]);
  const [_state, formAction] = useFormState(filterMoviesAction, {
    error: '',
    success: false,
  });
  const searchParams = useSearchParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formRef.current && searchParamsInputRef.current) {
      const searchQuery = searchParams?.get('q') ?? '';
      searchParamsInputRef.current.value = searchQuery;
      
      formRef.current.requestSubmit();
      const genreId = e.target.value;
      if (genreIds.includes(genreId)) {
        setGenreIds((prev) => prev.filter((id) => id !== genreId));
      } else {
        setGenreIds((prev) => [...prev, genreId]);
      }
    }
  };

  const debounced = useDebouncedCallback(handleInputChange, 500);

  return (
    <form action={formAction} ref={formRef} className='w-1/2 mx-auto'>
      <input type='hidden' name='searchQuery' value='' ref={searchParamsInputRef} />
      <fieldset className='relative'>
        <legend className='sr-only'>Filter Movies by Genre</legend>
        <ul className='flex gap-2 justify-center'>
          {genres.map((genre) => (
            <li key={genre.id}>
              <label htmlFor={genre.name} className={clsxm(
                'btn inline-block relative px-4 py-2 font-medium rounded-md border-0 bg-neutral-700 text-neutral-300 text-sm',
                'focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500',
                'hover:bg-neutral-600',
                { 'bg-purple-900 text-white': genreIds.includes(genre.id.toString())}
              )}>
                <input type='checkbox' name='genre[]' id={genre.name} value={genre.id} onChange={debounced} className='hidden' />
                {genre.name}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
    </form>
  );
};
