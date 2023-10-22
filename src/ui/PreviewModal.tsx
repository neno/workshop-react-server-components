import { FC, useEffect } from 'react';
import { ReactPortal } from '@/ui/ReactPortal';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { ButtonGroup } from '@/ui/ButtonGroup';
import { getImageUrl } from '@/lib/helpers';
import { MovieType } from '@/db/schema';
import { Tab, Tabs } from '@/ui/Tabs';

export interface IModal {
  isOpen: boolean;
  movie: Pick<MovieType, 'id' | 'backdropPath' | 'title' | 'overview'>;
  handleClose: () => void;
}

export const PreviewModal: FC<IModal> = ({ movie, isOpen, handleClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: { key: string }) =>
      e.key === 'Escape' ? handleClose() : null;

    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId='react-portal-modal-container'>
      <div className='fixed inset-0 z-50 flex items-start justify-center overflow-auto pt-16 h-full'>
        <div
          className='fixed inset-0 bg-neutral-900 opacity-80'
          onClick={handleClose}
        />
        <div className='container relative flex-1 max-w-3xl bg-neutral-900 rounded-md overflow-hidden shadow-[0px_3px_10px_rgba(0,0,0,0.75)]'>
          <button
            type='button'
            className='absolute z-10 right-6 top-6 rounded-full bg-neutral-900 text-primary border-none p-2'
            onClick={handleClose}
          >
            <span className='sr-only'>Close panel</span>
            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
          </button>
          <div className='relative aspect-video before:absolute before:inset-0 before:bg-gradient-to-t before:from-neutral-900 before:to-transparent z-0'>
            <Image
              className='object-cover -z-10'
              fill
              src={getImageUrl(movie.backdropPath)}
              alt={movie.title || ''}
            />
            <div className='absolute bottom-12 left-12'>
              <h2 className='text-2xl md:text-4xl font-bold text-neutral-100'>
                {movie.title}
              </h2>
              <ButtonGroup className='mt-4' />
            </div>
          </div>
          <div className='p-4 md:p-6'>
            <Tabs>
              <Tab name='Overview'>
                <p className='text-neutral-100'>{movie.overview}</p>
                <pre>{JSON.stringify(movie, null, 2)}</pre>
              </Tab>
              <Tab name='Comments'>Here go comments</Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};
