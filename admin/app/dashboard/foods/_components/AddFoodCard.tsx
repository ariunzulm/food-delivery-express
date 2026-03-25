"use client";
import { Plus } from "lucide-react";
import { ChangeEventHandler, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type AddCardProps = {
  categoryName: string;
};
const AddFoodCard = ({ categoryName }: AddCardProps) => {
  const [addedCategory, setAddedCategory] = useState("");

  const onChangeAddButton: ChangeEventHandler<HTMLInputElement> = (event) => {
    setAddedCategory(event.target.value);
  };

  return (
    <section className="group relative w-full flex items-center justify-center flex-col gap-3 overflow-hidden border border-zinc-100 p-2 dark:border-zinc-800 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 bg-white dark:bg-zinc-900">
      <h3 className="text-base text-center font-bold leading-tight text-red-500">
        Add new Dish to {categoryName.toUpperCase()}
      </h3>
      <Dialog>
        <DialogTrigger>
          <div className="rounded-full p-2 w-fit bg-red-500 hover:bg-red-400 text-white transition-colors cursor-pointer">
            <Plus />
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md p-4">
          <DialogHeader>
            <DialogTitle className="uppercase">
              Add new Dish to Appetizers
            </DialogTitle>
          </DialogHeader>

          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-4">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="foodName" className="">
                    Food name
                  </Label>
                  <Input
                    onChange={onChangeAddButton}
                    type="text"
                    id="foodName"
                    placeholder="Type your food name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="price" className="">
                    Food price
                  </Label>
                  <Input type="text" id="price" placeholder="Enter price" />
                </div>
              </div>

              <Label htmlFor="ingredients" className="">
                Ingredients
              </Label>
              <Input
                type="text"
                id="ingredients"
                placeholder="List ingredients..."
              />
              <Label htmlFor="foodName" className="">
                Food image
              </Label>
              <Input
                id="picture"
                type="file"
                className="w-105 h-35 text-center"
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-end">
            <Button
              type="button"
              className="bg-red-500 hover:bg-red-400 text-white"
            >
              Add Dish
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};
export default AddFoodCard;
