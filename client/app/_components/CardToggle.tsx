"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContext } from "react";
import { FoodCardContext } from "../_contexts/FoodCardContext";
import CheckOutFoodCard from "./CheckOutFoodCard";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import CheckOutOrderCard from "./CheckOutOrderCard";

export function CardToggle() {
  const data = useContext(FoodCardContext);

  const subTotal = data.foodCard.reduce(
    (sum, food) => sum + Number(food.food.price) * food.quantity,
    0,
  );
  return (
    <Tabs defaultValue="card" className="w-full">
      <TabsList className="w-full grid grid-cols-2 mb-4">
        <TabsTrigger value="cart">Cart</TabsTrigger>
        <TabsTrigger value="order">Order</TabsTrigger>
      </TabsList>
      <TabsContent value="cart" className="flex flex-col gap-3">
        {data.foodCard.length === 0 ? (
          <p className="text-sm text-zinc-400 text-center py-8">No items yet</p>
        ) : (
          data.foodCard.map((item) => (
            <CheckOutFoodCard key={item.food.id} food={item.food} />
          ))
        )}

        <div className="mt-2 flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
            <MapPin size={12} className="text-red-400" />
            Delivery location
          </div>
          <Input
            type="text"
            className="w-full h-20"
            placeholder="Enter your complete address"
          />
        </div>
      </TabsContent>
      <TabsContent value="order" className="flex flex-col gap-2">
        <h1 className="text-sm text-zinc-400">Order history</h1>
        {data.foodCard.length === 0 ? (
          <p className="text-sm text-zinc-400 text-center py-8">No items yet</p>
        ) : (
          data.foodCard.map((item) => (
            <CheckOutOrderCard
              key={item.food.id}
              food={item.food}
              quantity={item.quantity}
            />
          ))
        )}
      </TabsContent>
    </Tabs>
  );
}
