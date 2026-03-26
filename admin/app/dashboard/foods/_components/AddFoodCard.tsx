"use client";
import { LoaderCircle, Plus } from "lucide-react";
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
import { Category } from "@/app/lib/types/categoriesTypes";
import { useRouter } from "next/navigation";

type AddFoodCardProps = {
  category: Category;
};
type NewCategoryProps = {
  foodName: string;
  price: string;
  ingredients: string;
  image: string;
  foodCategoryId: number | null;
};

const AddFoodCard = ({ category }: AddFoodCardProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [newCategory, setNewCategory] = useState<NewCategoryProps>({
    foodName: "",
    price: "",
    ingredients: "",
    image: "",
    foodCategoryId: null,
  });

  const onHandleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    setNewCategory((prev) => ({ ...prev, [name]: value }));
    console.log({ ...newCategory, [name]: value });
  };

  const onAddFoodCard = async () => {
    setLoading(true);
    try {
      await fetch("http://localhost:3000/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          foodName: newCategory.foodName,
          price: newCategory.price,
          image: newCategory.image,
          ingredients: newCategory.ingredients,
          foodCategoryId:newCategory.foodCategoryId
        }),
      });
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(true);
  };

  return (
    <section className="group relative w-full flex items-center justify-center flex-col gap-3 overflow-hidden border border-zinc-100 p-2 dark:border-zinc-800 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 bg-white dark:bg-zinc-900">
      <h3 className="text-base text-center font-bold leading-tight text-red-500">
        Add new Dish to {category.categoryName}
      </h3>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <div className="rounded-full p-2 w-fit bg-red-500 hover:bg-red-400 text-white transition-colors cursor-pointer">
            <Plus />
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md p-4">
          <DialogHeader>
            <DialogTitle className="text-base text-center font-bold leading-tight text-red-500">
              Add new Dish to {category.categoryName}
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
                    name="foodName"
                    onChange={onHandleChange}
                    type="text"
                    id="foodName"
                    placeholder="Type your food name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="price" className="">
                    Food price
                  </Label>
                  <Input
                    onChange={onHandleChange}
                    name="price"
                    type="text"
                    id="price"
                    placeholder="Enter price"
                  />
                </div>
              </div>

              <Label htmlFor="ingredients" className="">
                Ingredients
              </Label>
              <Input
                onChange={onHandleChange}
                name="ingredients"
                type="text"
                id="ingredients"
                placeholder="List ingredients..."
              />
              <Label htmlFor="foodName" className="">
                Food image
              </Label>
              <Input
                onChange={onHandleChange}
                name="image"
                id="image"
                type="file"
                className="w-105 h-35 text-center"
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-end">
            <Button
              onClick={onAddFoodCard}
              disabled={loading}
              type="button"
              className="bg-red-500 hover:bg-red-400 text-white"
            >
              {loading ? <LoaderCircle className="animate-spin" /> : "Add Food"}
            </Button>
            {/* <SonnerTypes /> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};
export default AddFoodCard;
