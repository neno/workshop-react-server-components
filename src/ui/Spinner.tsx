import { ArrowPathIcon } from '@heroicons/react/24/outline';

export const Spinner = () => (
  <div className='rounded-full bg-transparent text-primary border opacity-70 hover:opacity-90 p-2 md:p-4 animate-spin'>
    <ArrowPathIcon className='h-6 w-6' aria-hidden='true' />
  </div>
);
