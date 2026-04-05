"use client";

import { createContext, useState } from "react";
import { Food } from "../lib/types/categoriesTypes";

type FoodCard = {
  food: Food;
  quantity: number;
};
type FoodCardContextProps = {
  foodCard: FoodCard[];
  addFoodCard: (food: Food, quantity: number) => void;
  removeFromFoodCard: (foodId: number) => void;
  clearFoodCard: () => void;
};
type FoodCardContextProviderProps = {
  children: React.ReactNode;
};
export const FoodCardContext = createContext({} as FoodCardContextProps);

export const FoodCardContextProvider = ({
  children,
}: FoodCardContextProviderProps) => {
  const [foodCard, setFoodCard] = useState<FoodCard[]>([]);

  const addFoodCard = (food: Food, quantity: number) => {
    setFoodCard((prev) => {
      const existing = prev.find((item) => item.food.id === food.id);

      if (existing) {
        return prev.map((foodItem) =>
          foodItem.food.id === food.id
            ? { ...foodItem, quantity: foodItem.quantity + quantity }
            : foodItem,
        );
      }

      return [...prev, { food, quantity }];
    });
  };

  const removeFromFoodCard = (foodId: number) => {
    setFoodCard((prev) =>
      prev.filter((foodItem) => foodItem.food.id !== foodId),
    );
  };

  const clearFoodCard = () => setFoodCard([]);

  const value: FoodCardContextProps = {
    foodCard,
    addFoodCard,
    removeFromFoodCard,
    clearFoodCard,
  };
  return (
    <FoodCardContext.Provider value={value}>
      {children}
    </FoodCardContext.Provider>
  );
};
