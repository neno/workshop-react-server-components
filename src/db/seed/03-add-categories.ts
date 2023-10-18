import { categories, categoryMoviesMap } from '../data/categories';
import { CategoryType } from '../schema';
import { addCategory } from "@/db";

export function addCategories() {
  categories.forEach((category: Omit<CategoryType, 'movieIds'>) => {
    const categoryWithMovieIds: CategoryType = {
      ...category,
      movieIds: (categoryMoviesMap.get(category.id) ?? []).join(','),
    };
    addCategory(categoryWithMovieIds);
  });
}
