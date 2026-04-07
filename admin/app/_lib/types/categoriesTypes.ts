export type Categories = Category[];

export type Food = {
  id: number;
  foodName: string;
  price: string;
  image: string;
  ingredients: string;
  foodCategoryId: number;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: number;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  foods: Food[];
};
