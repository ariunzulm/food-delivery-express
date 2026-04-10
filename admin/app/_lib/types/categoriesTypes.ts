export interface CategoriesRoot {
  message: string;
  categories: Category[];
}

export interface Category {
  id: number;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  foods: Food[];
}

export interface Food {
  id: number;
  foodName: string;
  price: string;
  image: string;
  ingredients: string;
  foodCategoryId: number;
  createdAt: string;
  updatedAt: string;
}
