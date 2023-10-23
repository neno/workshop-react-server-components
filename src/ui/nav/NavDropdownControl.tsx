import { NavDropdown } from '@/ui/nav/NavDropdown';

const dropdowns = [
  { id: 1, name: 'Categories', urlSegment: 'categories' },
  { id: 2, name: 'Genres', urlSegment: 'genres' },
];

interface INavDropdownControlProps {
  items: {
    categories: { id: number; name: string }[];
    genres: { id: number; name: string }[];
  };
}

export const NavDropdownControl = ({ items }: INavDropdownControlProps) => {


  return (
    <>
      {dropdowns.map((dropdown) => (
        <NavDropdown
        // @ts-ignore
          items={items[dropdown.urlSegment]}
          key={dropdown.id}
          label={dropdown.name}
          urlSegment={dropdown.urlSegment}
        />
      ))}
    </>
  );
};
