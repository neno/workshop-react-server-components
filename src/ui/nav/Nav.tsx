import { NavLink } from './NavLink';
import { NavDropdownControl } from '@/ui/nav/NavDropdownControl';
import { getAllCategories, getAllGenres } from '@/db';

export async function Nav() {
  const categories = await getAllCategories();
  const genres = await getAllGenres();
  const items = { categories: [...categories], genres: [...genres] };

  return (
    <nav className='flex gap-8'>
      <NavLink href='/'>Home</NavLink>
      <NavDropdownControl items={items} />{' '}
      {/* TODO: - think how to pass in navdropdown as children so they can be RSC */}
      <NavLink href='/search'>Search</NavLink>
    </nav>
  );
}
