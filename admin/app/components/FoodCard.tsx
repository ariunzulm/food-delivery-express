import { Category, Food } from "../lib/types/categoriesTypes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, SquarePlus } from "lucide-react";
import UpdateFoodCard from "../dashboard/foods/_components/UpdateFoodCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type FoodCardProps = {
  food: Food;
  category: Category;
  categories: Category[];
  selectedCategory: number;
};

const FoodCard = ({
  food,
  category,
  categories,
  selectedCategory,
}: FoodCardProps) => {
  const { foodName, price, ingredients, id, image } = food;
  const posterUrl = image;

  return (
    <section className="group relative w-full space-y-2 overflow-hidden border border-zinc-100 p-2 dark:border-zinc-800 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 bg-white dark:bg-zinc-900">
      <div className="w-full aspect-4/3 overflow-hidden rounded-2xl">
        <img
          src={posterUrl}
          alt={`${foodName} poster`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="px-4 flex flex-col gap-3">
        <h3 className="text-base font-bold leading-tight text-red-500 ">
          {foodName}
        </h3>
        <div className="flex gap-1">
          <Badge
            variant="secondary"
            className="px-2 py-2 w-fit text-sm font-semibold text-zinc-900 dark:text-zinc-100"
          >
            ₮ {price}
          </Badge>
          <Badge
            variant="secondary"
            className="px-2 py-1 w-fit text-xs font-medium text-muted-foreground"
          >
            {category.categoryName}
          </Badge>
        </div>
      </div>
      <div className="px-4 flex justify-between">
        <p className="px-2 py-2 w-fit text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {ingredients}
        </p>
        <Dialog>
          <DialogTrigger>
            <Button
              size="icon"
              className=" bg-red-500 cursor-pointer rounded-full hover:bg-red-400 text-white transition-colors"
              aria-label={`Add ${foodName} to cart`}
            >
              <Edit className="w-5 h-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md p-4">
            <UpdateFoodCard
              selectedCategory={selectedCategory}
              food={food}
              categories={categories}
              category={category}
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
export default FoodCard;
