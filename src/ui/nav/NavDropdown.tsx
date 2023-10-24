import {NavDropdownLink} from "@/ui/nav/NavDropdownLink";
import {NavLink} from "@/ui/nav/NavLink";

interface INavDropdownProps {
  items: { id: number, name: string }[],
  label: string,
  urlSegment: string,
}

export const NavDropdown = ({ items, label, urlSegment  }: INavDropdownProps) => {

  return (
    <div className="relative z-50 group">
      <NavLink urlSegment={urlSegment}>{label}</NavLink>
      <ul className="absolute top-full z-10 mt-2 w-48 rounded-md rounded-t-none bg-neutral-600 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block">
        {items.map((item) => (
          <li key={item.id}>
            <NavDropdownLink label={item.name} href={`/${urlSegment}/${item.id}`} />
          </li>
        ))}
      </ul>
    </div>
  )
}