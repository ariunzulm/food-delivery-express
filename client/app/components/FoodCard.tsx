"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import SelectedFoodCard from "./SelectedFoodCard";

type FoodCardProps = {
  price: string;
  foodName: string;
  ingredients: string;
  categoryName: string;
  image: string;
  onAdd?: () => void;
};

const FoodCard = ({
  foodName,
  price,
  ingredients,
  categoryName,
  image,
}: FoodCardProps) => {
  return (
    <Dialog>
      <section className="group relative w-full overflow-hidden border border-zinc-100 p-2 dark:border-zinc-800 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 bg-white dark:bg-zinc-900">
        <div className="w-full aspect-4/3 overflow-hidden rounded-2xl">
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
                className="px-2 py-2 w-fit text-md font-semibold text-zinc-900 dark:text-zinc-100"
              >
                $ {price}
              </Badge>
              <Badge
                variant="secondary"
                className="px-2 py-1 w-fit text-md font-medium text-muted-foreground"
              >
                {categoryName}
              </Badge>
            </div>
            <DialogTrigger>
              <div
                className="p-1 rounded-full bg-red-500 hover:bg-red-400 text-white transition-colors cursor-pointer"
                // onClick={onAdd}
                aria-label={`Add ${foodName} to cart`}
              >
                <Plus size={30} />
              </div>
            </DialogTrigger>
            <DialogContent>
              <SelectedFoodCard
                foodName={foodName}
                price={price}
                image={image}
              />
            </DialogContent>
          </div>
          <p className="px-2 py-2 w-fit text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {ingredients}
          </p>
        </div>
      </section>
    </Dialog>
  );
};
export default FoodCard;
