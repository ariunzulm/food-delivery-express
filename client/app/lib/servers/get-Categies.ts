import { Category } from "../types/categoriesTypes";

type GetCategoriesProps = {
  categories: Category[];
};
export const getCategories = async () => {
  const response = await fetch("http://localhost:3000/categories");

  const data: GetCategoriesProps = await response.json();
  return data.categories;
};
