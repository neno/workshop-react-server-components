'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

type SearchFormProps = {
  handleInputChange: (q: string) => void;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
}

export const SearchForm = ({ handleInputChange, defaultValue = '', placeholder = 'Search', className }: SearchFormProps) => {
  return (
    <div className='w-1/2 mx-auto'>
      <form
        className={className}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <fieldset>
          <label htmlFor='search' className='sr-only'>
            Search
          </label>
          <div className='relative'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <MagnifyingGlassIcon
                className='h-5 w-5 text-neutral-400'
                aria-hidden='true'
              />
            </div>
            <input
              id='search'
              className='block w-full rounded-md border-0 bg-neutral-700 py-1.5 pl-10 pr-3 text-neutral-300 placeholder:text-neutral-400 focus:bg-white focus:text-neutral-900 focus:ring-0 sm:text-sm sm:leading-6'
              placeholder={placeholder}
              type='search'
              defaultValue={defaultValue}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};
