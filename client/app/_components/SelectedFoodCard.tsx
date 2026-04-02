"use client";

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Food } from "../lib/types/categoriesTypes";
import { FoodCardAddButtons } from "./CardAddButtons";
import { useContext, useState } from "react";
import { FoodCardContext } from "../_contexts/FoodCardContext";
import { LoaderCircle, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

type SelectedFoodCardProps = { food: Food };

const SelectedFoodCard = ({ food }: SelectedFoodCardProps) => {
  const { addFoodCard } = useContext(FoodCardContext);
  const [quantity, setquantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const increaseFoodQuantity = () => {
    setquantity(quantity + 1);
  };
  const decreaseFoodQuantity = () => {
    if (quantity <= 1) {
      return;
    }
    setquantity(quantity - 1);
  };
  const onAddToCart = () => {
    setLoading(true);
    addFoodCard(food, quantity);
    setTimeout(() => setLoading(false), 500);
    router.refresh();
  };

  return (
    <div>
      <DialogTitle>Dish info</DialogTitle>
      <DialogContent>
        <DialogDescription>Add your favourite dish</DialogDescription>

        <FoodCardAddButtons
          food={food}
          quantity={quantity}
          increaseFoodQuantity={increaseFoodQuantity}
          decreaseFoodQuantity={decreaseFoodQuantity}
        />

        <DialogFooter className="sm:justify-end">
          <Button
            disabled={loading}
            onClick={onAddToCart}
            type="button"
            className="bg-red-500 hover:bg-red-400 text-white cursor-pointer"
          >
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Add to cart"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </div>
  );
};
export default SelectedFoodCard;
