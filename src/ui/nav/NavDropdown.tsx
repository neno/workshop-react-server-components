import {NavDropdownLink} from "@/ui/nav/NavDropdownLink";
import styles from './NavLink.module.css';
import {clsx} from "clsx";
import {clsxm} from "@/lib/helpers";

interface INavDropdownProps {
  items: { id: number, name: string }[],
  label: string,
  urlSegment: string,
}

export const NavDropdown = ({ items, label, urlSegment  }: INavDropdownProps) => {

  return (
    <div className="relative z-50 group">
      <span className={clsxm(styles.tab, 'block !pb-4 !rounded-b-none -mb-2')}>
        <span className="sr-only">Open </span>{label}
      </span>
      <ul className={clsx(
          "absolute top-full z-10 mt-2 w-48 rounded-md rounded-t-none bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block",
        )}>
        {items.map((item) => (
          <li key={item.id}>
            <NavDropdownLink label={item.name} href={`/${urlSegment}/${item.id}`} />
          </li>
        ))}
      </ul>
    </div>
  )
}