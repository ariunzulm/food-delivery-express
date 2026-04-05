import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import SelectedFoodCard from "./SelectedFoodCard";
import { Category, Food } from "../lib/types/categoriesTypes";

type FoodCardProps = {
  food: Food;
  category: Category;
};

const FoodCard = ({ food, category }: FoodCardProps) => {
  const { image, foodName, price, ingredients } = food;

  return (
    <Dialog>
      <section className="group relative w-full overflow-hidden border border-zinc-100 dark:border-zinc-800 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-0.5 bg-white dark:bg-zinc-900 cursor-pointer">
        <div className="relative w-full aspect-square overflow-hidden">
          <img
            src={image}
            alt={foodName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-2 left-2 bg-white/90 dark:bg-zinc-900/90 text-zinc-600 dark:text-zinc-300 text-[11px] font-medium px-2 py-0.5 rounded-full backdrop-blur-sm">
            {category.categoryName}
          </span>
        </div>
        <div className="p-3 flex flex-col gap-2">
          <h3 className="text-sm font-semibold leading-snug text-zinc-900 dark:text-zinc-100 line-clamp-1">
            {foodName}
          </h3>

          <p className="text-xs text-zinc-400 dark:text-zinc-500 line-clamp-2 leading-relaxed">
            {ingredients}
          </p>

          <div className="flex items-center justify-between mt-1">
            <span className="text-base font-bold text-red-500">${price}</span>

            <DialogTrigger asChild>
              <button
                className="flex items-center gap-1 bg-red-500 hover:bg-red-600 active:scale-95 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-150"
                aria-label={`Add ${foodName} to cart`}
              >
                <Plus size={13} strokeWidth={2.5} />
                Add
              </button>
            </DialogTrigger>
          </div>
        </div>
        <DialogContent>
          <SelectedFoodCard food={food} />
        </DialogContent>
      </section>
    </Dialog>
  );
};
export default FoodCard;
