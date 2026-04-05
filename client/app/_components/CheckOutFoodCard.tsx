"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Food } from "../lib/types/categoriesTypes";
import { useContext, useState } from "react";
import { FoodCardContext } from "../_contexts/FoodCardContext";

type CheckOutFoodCardProps = {
  food: Food;
};
const CheckOutFoodCard = ({ food }: CheckOutFoodCardProps) => {
  const { removeFromFoodCard, addFoodCard, foodCard } =
    useContext(FoodCardContext);
  const cartItem = foodCard.find((item) => item.food.id === food.id);
  const quantity = cartItem?.quantity ?? 1;

  const { image, foodName, price } = food;
  const unitPrice = Number(price);

  const increaseFoodQuantity = () => {
    addFoodCard(food, quantity + 1);
  };
  const decreaseFoodQuantity = () => {
    if (quantity <= 1) {
      removeFromFoodCard(food.id);
      return;
    } else {
      addFoodCard(food, quantity - 1);
    }
  };

  return (
    <section className="flex gap-2 relative w-full overflow-hidden p-2 border border-zinc-100  dark:border-zinc-800 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 bg-white dark:bg-zinc-900">
      <div className="w-2/4 aspect-6/2 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={`${foodName} poster`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-between space-y-3 py-0.5 pr-6">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug line-clamp-2">
          {foodName}
        </h3>

        <div className="flex gap-2 items-center justify-between">
          <span className="text-sm font-bold text-red-500">
            ${(unitPrice * quantity).toFixed(2)}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={decreaseFoodQuantity}
              className="w-7 h-7 cursor-pointer rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-500 hover:border-red-400 hover:text-red-500 transition-colors"
            >
              <Minus size={12} />
            </button>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 w-4 text-center">
              {quantity}
            </span>
            <button
              onClick={increaseFoodQuantity}
              className="w-7 h-7 cursor-pointer rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-500 hover:border-red-500 hover:bg-red-500 hover:text-white transition-all"
            >
              <Plus size={12} />
            </button>
          </div>
        </div>

        <p className="text-xs text-zinc-400">${unitPrice.toFixed(2)} each</p>
      </div>
      <button
        onClick={() => removeFromFoodCard(food.id)}
        className="absolute right-3 cursor-pointer top-3 text-zinc-300 dark:text-zinc-600 hover:text-red-500 transition-colors"
      >
        <Trash2 size={14} />
      </button>
    </section>
  );
};
export default CheckOutFoodCard;
