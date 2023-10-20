"use client"

import {useState} from "react";
import {NavDropdown} from "@/ui/nav/NavDropdown";

const segments = [
  { id: 1, name: 'categories' },
  { id: 2, name: 'genres' },
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
      {segments.map((segment) => (
        <NavDropdown items={items[segment.name]} key={segment.id} label={segment.name} urlSegment={segment.name} active={active === segment.name} onButtonClick={toggleActive} onLinkClick={clearActive} />
      ))}
      {/*<NavDropdown label="Categories" urlSegment="categories" active={active === "categories"} onButtonClick={toggleActive} />*/}
      {/*<NavDropdown label="Genres" urlSegment="genres" active={active === "genres"} onButtonClick={toggleActive} />*/}
    </>
  )
}