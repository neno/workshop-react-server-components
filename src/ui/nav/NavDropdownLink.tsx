"use client"

import Link from "next/link";
import {clsx} from "clsx";
import {usePathname} from "next/navigation";

interface INavDropdownLinkProps {
  label: string,
  href: string,
  onClick?: () => void
}

export const NavDropdownLink = ({ label, href, onClick }: INavDropdownLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  const cls = clsx(
    isActive ? 'bg-gray-100' : '',
    'block px-4 py-2 text-sm text-gray-700'
  )

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <Link href={href} onClick={handleClick}
      className={cls}>
      {label}
    </Link>
  )
};