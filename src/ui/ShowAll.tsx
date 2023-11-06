import Link from 'next/link';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { clsxm } from '@/lib/helpers';

export const ShowAll = ({ href, cols }: { href: string, cols: number }) => {
  
  return (
    <Link
      href={href}
      className={clsxm(
        `relative aspect-2/3 overflow-hidden flex-1`,
        `flex flex-col justify-center items-center bg-neutral-800 hover:bg-neutral-900 transition-colors`,
        `basis-1/${cols}`,
      )}
    >
      <ArrowRightCircleIcon className='h-12 w-12' aria-hidden='true' />
      Show All
    </Link>
  );
};
