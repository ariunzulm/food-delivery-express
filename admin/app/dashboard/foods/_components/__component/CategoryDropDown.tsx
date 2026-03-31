"use client";

import { Category } from "@/app/lib/types/categoriesTypes";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CategoryDropDownProps = {
  categories: Category[];
  selectedCategory?: number;
  onSelectCategory: (foodCategoryId: number) => void;
};
export function CategoryDropDown({
  categories,
  onSelectCategory,
  selectedCategory,
}: CategoryDropDownProps) {
  return (
    <Select
      defaultValue={selectedCategory ? String(selectedCategory) : undefined}
      onValueChange={(value) => onSelectCategory(Number(value))}
    >
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select a dish Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Dish Categories</SelectLabel>
          {categories.map((category) => {
            return (
              <SelectItem key={category.id} value={String(category.id)}>
                {category.categoryName}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
