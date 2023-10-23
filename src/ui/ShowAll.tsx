import Link from 'next/link';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

export const ShowAll = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      className='aspect-[2/3] flex flex-col justify-center items-center bg-neutral-800 hover:bg-neutral-900 transition-colors'
    >
      <ArrowRightCircleIcon className='h-12 w-12' aria-hidden='true' />
      Show All
    </Link>
  );
};
