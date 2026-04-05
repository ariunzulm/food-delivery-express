import { Minus, Plus, Trash2 } from "lucide-react";
import { Food } from "../lib/types/categoriesTypes";

type SelectedFoodCardProps = {
  food: Food;
  quantity: number;
  increaseFoodQuantity: () => void;
  decreaseFoodQuantity: () => void;

};

export const FoodCardAddButtons = ({
  food,
  quantity,

  increaseFoodQuantity,
  decreaseFoodQuantity,
}: SelectedFoodCardProps) => {
  const { image, foodName, price } = food;
  const unitPrice = Number(price);
  const totalPrice = (unitPrice * quantity).toFixed(2);
  return (
    <section className="flex gap-4 w-full overflow-hidden rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3">
      <div className="w-28 h-28 shrink-0 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={foodName}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 min-w-0 py-1">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug line-clamp-2">
          {foodName}
        </h3>

        <div className="flex items-center gap-3 text-sm">
          <span className="text-zinc-400 dark:text-zinc-500">
            ${unitPrice.toFixed(2)} each
          </span>
          <span className="text-zinc-300 dark:text-zinc-600">·</span>
          <span className="font-semibold text-red-500">${totalPrice}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={decreaseFoodQuantity}
            disabled={quantity <= 1}
            className="w-8 h-8 rounded-full cursor-pointer border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:border-red-400 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Minus size={14} />
          </button>

          <span className="w-6 text-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {quantity}
          </span>

          <button
            onClick={increaseFoodQuantity}
            className="w-8 h-8 rounded-full cursor-pointer border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:border-red-500 hover:bg-red-500 hover:text-white transition-all"
          >
            <Plus size={14} />
          </button>
        </div>
       
      </div>
    </section>
  );
};
