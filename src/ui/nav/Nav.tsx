import { NavLink } from './NavLink';
import { getAllCategories, getAllGenres } from '@/db';
import { Stack } from '../Stack';
import {NavDropdown} from "@/ui/nav/NavDropdown";

const dropdowns = [
  { id: 1, name: 'Categories', urlSegment: 'categories' },
  { id: 2, name: 'Genres', urlSegment: 'genres' },
];

export async function Nav() {
  const categories = await getAllCategories();
  const genres = await getAllGenres();
  const items = { categories: [...categories], genres: [...genres] };

  return (
    <nav>
      <Stack className='gap-6'>
        <div className='flex gap-8 px-4 py-2 rounded-md justify-center bg-neutral-800'>
          <NavLink href='/'>Home</NavLink>
          {dropdowns.map((dropdown) => (
            <NavDropdown
              items={items[dropdown.urlSegment as keyof typeof items]}
              key={dropdown.id}
              label={dropdown.name}
              urlSegment={dropdown.urlSegment}
            />
          ))}
          <NavLink href='/search'>Search</NavLink>
        </div>
      </Stack>
    </nav>
  );
}
