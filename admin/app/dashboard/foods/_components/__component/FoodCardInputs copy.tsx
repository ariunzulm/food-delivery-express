import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEventHandler } from "react";
import { CategoryDropDown } from "./CategoryDropDown";
import { Category } from "@/app/lib/types/categoriesTypes";

type FoodNameProps = {
  onHandleChange: ChangeEventHandler<HTMLInputElement>;
  categories: Category[];
  values: {
    foodName: string;
    price: string;
    ingredients: string;
    image: string;
  };
  onSelectCategory: (foodCategoryId: number) => void;
};

export const UpdatedFoodCardInputs = ({
  onHandleChange,
  categories,
  values,
  onSelectCategory
}: FoodNameProps) => {
  console.log(categories, "updated");
  return (
    <div className="flex items-center gap-2 max-w-md mx-auto">
      <div className="grid flex-1 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="foodName">Food name</Label>
          <Input
            value={values.foodName}
            name="foodName"
            onChange={onHandleChange}
            type="text"
            id="foodName"
            placeholder="Type your food name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="price">Food price</Label>
          <Input
            onChange={onHandleChange}
            value={values.price}
            name="price"
            type="text"
            id="price"
            placeholder="Enter price"
          />
        </div>

        <div className="flex justify-between">
          <Label htmlFor="categories">Dish categories</Label>
          <CategoryDropDown categories={categories} onSelectCategory={onSelectCategory}/>
        </div>

        <Label htmlFor="ingredients">Ingredients</Label>
        <Input
          onChange={onHandleChange}
          value={values.ingredients}
          name="ingredients"
          type="text"
          id="ingredients"
          placeholder="List ingredients..."
        />
        <Label htmlFor="image">Food image</Label>
        <Input
          onChange={onHandleChange}
          value={values.image}
          name="image"
          id="image"
          type="text"
          className="w-105 h-35 text-center"
          placeholder="Drag or drop a food image"
        />
      </div>
    </div>
  );
};
