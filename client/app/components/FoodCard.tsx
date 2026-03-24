"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SquarePlus } from "lucide-react";

type FoodCardProps = {
  price: string;
  foodName: string;
  description: string;
  onAdd?: () => void;
};

const FoodCard = ({ foodName, price }: FoodCardProps) => {
  const posterUrl = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-DzXYr43tUerhBqf_UkJnMAlzKzjEAy_ceg&s`;

  return (
    <section className="group relative w-full overflow-hidden border border-zinc-100 p-2 dark:border-zinc-800 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 bg-white dark:bg-zinc-900">
      <div className="w-full aspect-4/3 overflow-hidden rounded-2xl">
        <img
          src={posterUrl}
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
              className="px-2 py-2 w-fit text-sm font-semibold text-zinc-900 dark:text-zinc-100"
            >
              ₮ {price}
            </Badge>
            <Badge
              variant="secondary"
              className="px-2 py-1 w-fit text-xs font-medium text-muted-foreground"
            >
              389 ккал
            </Badge>
          </div>

          <Button
            size="icon"
            className="shrink-0 bg-red-500 hover:bg-red-400 text-white transition-colors"
            // onClick={onAdd}
            aria-label={`Add ${foodName} to cart`}
          >
            <SquarePlus className="w-5 h-5" />
          </Button>
        </div>
        <p className="px-2 py-2 w-fit text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          description
        </p>
      </div>
    </section>
  );
};
export default FoodCard;
