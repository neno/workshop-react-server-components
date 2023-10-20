import {NavDropdownLink} from "@/ui/nav/NavDropdownLink";
import {clsx} from "clsx";

interface INavDropdownProps {
  items: { id: number, name: string }[],
  label: string,
  active?: boolean
  urlSegment: string,
  onButtonClick: (urlSegment: string) => void
  clearActive: () => void
}

export const NavDropdown = ({ items, label, urlSegment, active, onButtonClick, clearActive }: INavDropdownProps) => {
  const handleButtonClick = () => {
    onButtonClick(urlSegment)
  }

  const handleLinkClick = () => {
    clearActive()
  }

  return (
    <div className="relative z-50">
      <button className="" type="button" onClick={handleButtonClick}>
        <span className="sr-only">Open </span>{label}
      </button>
      <ul className={clsx(
          "absolute top-full z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
          active ? 'block' : 'hidden'
        )}>
        {items.map((item) => (
          <li key={item.id}>
            <NavDropdownLink onClick={handleLinkClick} label={item.name} href={`/${urlSegment}/${item.id}`} />
          </li>
        ))}
      </ul>
    </div>
  )
}