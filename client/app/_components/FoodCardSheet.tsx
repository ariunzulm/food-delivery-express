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
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="w-10 h-10 rounded-full bg-zinc-200 border border-red-500/30 flex items-center justify-center cursor-pointer">
          <ShoppingCart className="w-5 h-5 text-red-500" />
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
