import { Category } from "../types/categoriesTypes";

type GetCategoriesProps = {
  categories: Category[];
};
export const getCategories = async () => {
  const response = await fetch("https://food-delivery-server-wdw6.onrender.com/categories");

  const data: GetCategoriesProps = await response.json();
  return data.categories;
};
