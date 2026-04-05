import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { CardToggle } from "./CardToggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export function FoodCardSheet() {
  const cartCount = 2;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative">
          <FoodCardSheet />
          {cartCount > 0 && (
            <span className="pointer-events-none absolute top-0.5 right-0.5 min-w-4 h-4 px-0.5 rounded-full bg-red-500 text-white text-[10px] font-semibold flex items-center justify-center border-2 border-white dark:border-zinc-900">
              {cartCount > 9 ? "9+" : cartCount}
            </span>
          )}
        </div>
      </SheetTrigger>

      <SheetContent className="z-100 overflow-scroll">
        <SheetHeader>
          <SheetTitle className="flex gap-2">
            <ShoppingCart className="w-5 h-5" />
            Order details
          </SheetTitle>
        </SheetHeader>
        <CardToggle />

        <SheetFooter className="flex">
          <Card className="w-full p-4">
            <CardTitle>Payment info</CardTitle>
            <CardContent className="text-sm text-muted-foreground gap-2 flex flex-col">
              <div className="flex justify-between">
                <CardDescription>Items</CardDescription>
                <span>$15</span>
              </div>
              <div className="flex justify-between border-dotted border-b pb-5">
                <CardDescription>Shipping</CardDescription>
                <span>$15</span>
              </div>
              <div className="flex justify-between">
                <CardDescription>Total</CardDescription> <span>$15</span>
              </div>
            </CardContent>

            <Button type="submit" className="w-full px-10 py-4">
              Check out
            </Button>
          </Card>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
