import { categories, categoryMoviesMap } from '../data/categories';
import { CategoryType, selectCategorySchema } from '../schema';
import { addCategory } from "@/db";

export function addCategories() {
  try {    
    categories.forEach((category: Omit<CategoryType, 'movieIds'>) => {
      const categoryWithMovieIds: CategoryType = {
        ...category,
        movieIds: (categoryMoviesMap.get(category.id) ?? []).join(','),
      };
      const validatedCategory = selectCategorySchema.parse(categoryWithMovieIds);
      addCategory(validatedCategory);
    });
    console.info('Categories added');
  } catch (error) {
    console.error(error);
  }
}
