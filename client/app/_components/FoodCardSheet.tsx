"use client";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CreditCard, ShoppingCart, Trash2 } from "lucide-react";
import { CardToggle } from "./CardToggle";
import { useContext } from "react";
import { FoodCardContext } from "../_contexts/FoodCardContext";

export function FoodCardSheet() {
  const { foodCard, clearFoodCard } = useContext(FoodCardContext);
  const cartCount = foodCard.reduce((sum, food) => sum + food.quantity, 0);
  const subTotal = foodCard.reduce(
    (sum, food) => sum + Number(food.food.price) * food.quantity,
    0,
  );
  const total = subTotal + 0.99;
  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative">
          <button className="relative cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-red-400 transition-colors">
            <ShoppingCart className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
          </button>

          {cartCount > 0 && (
            <span className="pointer-events-none absolute -top-1 -right-1 min-w-4.5 h-4.5 px-1 rounded-full bg-red-500 text-white text-[10px] font-semibold flex items-center justify-center border-2 border-white dark:border-zinc-900">
              {cartCount > 9 ? "9+" : cartCount}
            </span>
          )}
        </div>
      </SheetTrigger>

      <SheetContent className="flex flex-col overflow-hidden p-0">
        <SheetHeader className=" px-5 py-4 border-b border-zinc-100 dark:border-zinc-800">
          <SheetTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-base">
              <ShoppingCart className="w-4 h-4 text-red-500" />
              Order details
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cartCount === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center py-16">
              <div className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-zinc-400" />
              </div>
              <p className="text-sm font-medium text-zinc-500">
                Your cart is empty
              </p>
              <p className="text-xs text-zinc-400">
                Add some delicious food to get started
              </p>
            </div>
          ) : (
            <CardToggle />
          )}
        </div>
        {cartCount > 0 && (
          <button
            onClick={clearFoodCard}
            className="justify-end mr-5 flex cursor-pointer items-center gap-1 text-xs text-zinc-400 hover:text-red-500 transition-colors"
          >
            <Trash2 size={12} />
            Clear all
          </button>
        )}
        <div className="flex mx-5 items-center gap-2 text-base">
          <CreditCard className="w-4 h-4 text-red-500" />
          Payment info
        </div>
        {cartCount > 0 && (
          <SheetFooter className="px-5 py-4 border-t border-zinc-100 dark:border-zinc-800 flex-col gap-0">
            <div className="w-full flex flex-col gap-2 mb-4">
              <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
                <span>
                  Subtotal ({cartCount} item{cartCount !== 1 ? "s" : ""})
                </span>
                <span>${subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
                <span>Shipping </span>
                <span>$0.99</span>
              </div>

              <div className="h-px bg-zinc-100 dark:bg-zinc-800 my-1" />
              <div className="flex justify-between text-base font-semibold text-zinc-900 dark:text-zinc-100">
                <span>Total</span>
                <span className="text-red-500">${total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white cursor-pointer font-medium py-5 rounded-xl transition-colors"
            >
              Checkout · ${total.toFixed(2)}
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
