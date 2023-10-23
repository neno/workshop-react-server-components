import { NavLink } from './NavLink';
import { NavDropdownControl } from '@/ui/nav/NavDropdownControl';
import { getAllCategories, getAllGenres } from '@/db';
import { Stack } from '../Stack';

export async function Nav() {
  const categories = await getAllCategories();
  const genres = await getAllGenres();
  const items = { categories: [...categories], genres: [...genres] };

  return (
    <nav>
      <Stack className='gap-6'>
        <div className='flex gap-8 px-4 py-2 rounded-md justify-center bg-neutral-800'>
          <NavLink href='/'>Home</NavLink>
          <NavDropdownControl items={items} />{' '}
          {/* TODO: - think how to pass in navdropdown as children so they can be RSC */}
          <NavLink href='/search'>Search</NavLink>
        </div>
        <div className='flex gap-8 justify-center '>
        <NavLink href='/search'>Action</NavLink> |
        <NavLink href='/search'>Comedy</NavLink> |
        <NavLink href='/search'>Sci-fi</NavLink>
        </div>
      </Stack>
    </nav>
  );
}
