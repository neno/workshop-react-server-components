'use client';

import Link from 'next/link';
import { FC } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import styles from './NavLink.module.css';
import { clsxm } from '@/lib/helpers';

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const NavLink: FC<NavLinkProps> = ({
  href,
  children,
  className = 'tab',
}) => {
  const segment = useSelectedLayoutSegment();
  const active = href === `/${segment ?? ''}`;

  return (
    <Link
      href={href}
      className={active ? [styles.tab, styles.activeTab].join(' ') : styles.tab }
    >
      {children}
    </Link>
  );
};
