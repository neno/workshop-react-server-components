import { getAllCategories, getAllGenres } from '@/db';
import { NavLink } from './NavLink';

export async function Nav() {
  const categories = await getAllCategories();
  const genres = await getAllGenres();

  return (
    <nav className=''>
      <NavLink href='/'>Home</NavLink>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink href={`/categories/${category.id}`}>
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <NavLink href={`/genres/${genre.id}`}>{genre.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
