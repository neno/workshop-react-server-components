import { clsxm } from '@/lib/helpers';
import React from 'react';

interface IMovieListProps {
  className?: string;
  children?: React.ReactNode;
}

export const MovieList = ({ children, className }: IMovieListProps) => {
  return (
    <div className={clsxm(`flex gap-4 mt-8`, className)}>
      {children}
    </div>
  );
};
