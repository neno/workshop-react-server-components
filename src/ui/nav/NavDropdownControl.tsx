"use client"

import {useState} from "react";
import {NavDropdown} from "@/ui/nav/NavDropdown";

const dropdowns = [
  { id: 1, name: 'Categories', urlSegment: 'categories' },
  { id: 2, name: 'Genres', urlSegment: 'genres' },
];

interface INavDropdownControlProps {
  items: {
    categories: {id: number, name: string}[],
    genres: {id: number, name: string}[]
  }
}

export const NavDropdownControl = ({items}: INavDropdownControlProps) => {
  const [active, setActive] = useState<string | null>(null);

  const toggleActive = (urlSegment: string) => {
    setActive(active === urlSegment ? null : urlSegment);
  }

  const clearActive = () => {
    setActive(null);
  }

  return (
    <>
      {dropdowns.map((dropdown) => (
        <NavDropdown items={items[dropdown.urlSegment]} key={dropdown.id} label={dropdown.name} urlSegment={dropdown.urlSegment} active={active === dropdown.urlSegment} onButtonClick={toggleActive} onLinkClick={clearActive} />
      ))}
      {/*<NavDropdown label="Categories" urlSegment="categories" active={active === "categories"} onButtonClick={toggleActive} />*/}
      {/*<NavDropdown label="Genres" urlSegment="genres" active={active === "genres"} onButtonClick={toggleActive} />*/}
    </>
  )
}