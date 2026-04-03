"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { Food } from "../lib/types/categoriesTypes";
import { useState } from "react";

type CheckOutFoodCardProps = {
  food: Food;
};
const CheckOutFoodCard = ({ food }: CheckOutFoodCardProps) => {
  const { image, foodName, price } = food;
  const [quantity, setQuantity] = useState(1);
  const increaseFoodQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseFoodQuantity = () => {
    if (quantity <= 0) {
      return;
    }
    setQuantity(quantity - 1);
  };

  return (
    <section className="flex w-full overflow-hidden p-2 border border-zinc-100  dark:border-zinc-800 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 bg-white dark:bg-zinc-900">
      <div className="w-2/4 aspect-6/2 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={`${foodName} poster`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-base font-bold leading-tight text-red-500 ">
          {foodName}
        </h3>

        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col gap-1">
            <Badge
              variant="secondary"
              className="px-2 py-2 w-fit text-md font-semibold dark:text-zinc-100  text-muted-foreground"
            >
              Unit price $ {price.toString()}
            </Badge>
          </div>
        </div>
        <div className="flex justify-between gap-3 w-20 items-center">
          <Button
            onClick={increaseFoodQuantity}
            className="rounded-full cursor-pointer hover:bg-red-200"
          >
            <Plus />
          </Button>
          {quantity}
          <Button
            onClick={decreaseFoodQuantity}
            className="rounded-full cursor-pointer hover:bg-red-200"
          >
            <Minus />
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CheckOutFoodCard;
