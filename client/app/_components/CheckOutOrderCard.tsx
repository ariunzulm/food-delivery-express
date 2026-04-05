import { Clock, ClockPlus, LocateIcon, MapPin, Soup } from "lucide-react";
import { Food } from "../lib/types/categoriesTypes";

type CheckOutOrderCardProps = {
  food: Food;
  quantity: number;
};

const CheckOutOrderCard = ({ food, quantity }: CheckOutOrderCardProps) => {
  const unitPrice = Number(food.price);
  const lineTotal = (unitPrice * quantity).toFixed(2);
  const createdDate = new Date(food.createdAt);
  return (
    <div
      key={food.id}
      className="flex items-center justify-between py-2 border-b border-zinc-100 dark:border-zinc-800 last:border-0"
    >
      <div className="flex gap-2">
        <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0">
          <img
            src={food.image}
            alt={food.foodName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex gap-2">
              <span className="text-sm font-bold text-red-500 shrink-0">
                ${lineTotal}
              </span>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug line-clamp-1">
                (#{food.id})
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-full text-[11px] font-semibold capitalize mt-0.5 border-red-500 border text-red-600 dark:text-red-400">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-red-600" />
              PENDING
            </span>
          </div>

          <p className="text-xs text-zinc-400">
            {quantity} × ${unitPrice.toFixed(2)}
          </p>
          <p className="text-xs text-zinc-400">{food.foodName}</p>

          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
            <span className="flex items-center gap-1 text-[11px] text-zinc-400">
              <Clock size={10} />
              {createdDate.toLocaleString()}
            </span>

            <span className="flex items-center gap-1 text-[11px] text-zinc-400">
              <Soup size={10} />
              {food.foodName}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-zinc-400">
              <MapPin size={10} />
              Delivery address
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutOrderCard;
