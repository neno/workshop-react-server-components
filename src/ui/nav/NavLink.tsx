'use client';

import Link from 'next/link';
import { FC } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import styles from './NavLink.module.css';
import { clsxm } from '@/lib/helpers';

interface NavLinkProps {
  href?: string;
  urlSegment?: string;
  className?: string;
  children: React.ReactNode;
}

export const NavLink: FC<NavLinkProps> = ({
  href,
  children,
  urlSegment,
}) => {
  const segment = useSelectedLayoutSegment();
  const active = href === `/${segment ?? ''}` || urlSegment === segment;
  const Element = href ? Link : 'span';

  return (
    <Element
      href={href as string}
      className={clsxm(
        'text-white px-3 py-2 rounded hover:bg-white hover:text-gray-700 block group-hover:pb-4 group-hover:-mb-2 group-hover:rounded-b-none group-hover:text-gray-700 group-hover:bg-white',
        active && 'text-white bg-purple-900'
      )}
    >
      {children}
    </Element>
  );
};
