"use client";

import { LoaderCircle, Plus, X } from "lucide-react";
import { ChangeEventHandler, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Category } from "@/app/lib/types/categoriesTypes";
import { useRouter } from "next/navigation";
import { FoodCardInputs } from "./__component/FoodCardInputs";
import { FoodCardHeader } from "./__component/FoodCardHeader";

type AddFoodCardProps = {
  category: Category;
  categories: Category[];
  selectedCategory: number;
};
type NewFoodProps = {
  foodName: string;
  price: string;
  ingredients: string;
  image: string;
  foodCategoryId: number | null;
};

const AddFoodCard = ({
  category,
  categories,
  selectedCategory,
}: AddFoodCardProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [newFood, setNewFood] = useState<NewFoodProps>({
    foodName: "",
    price: "",
    ingredients: "",
    image: "",
    foodCategoryId: selectedCategory ?? null,
  });

  const onHandleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    setNewFood((prev) => ({ ...prev, [name]: value }));
    console.log({ ...newFood, [name]: value });
  };
  const onSelectCategory = (foodCategoryId: number) => {
    setNewFood({ ...newFood, foodCategoryId: foodCategoryId });
  };

  const onAddFoodCard = async () => {
    setLoading(true);

    try {
      await fetch("http://localhost:8787/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          foodName: newFood.foodName,
          price: newFood.price,
          image: newFood.image,
          ingredients: newFood.ingredients,
          foodCategoryId: category.id,
        }),
      });
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
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
          <FoodCardHeader category={category} />
          <FoodCardInputs
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
            onHandleChange={onHandleChange}
            categories={categories}
            values={newFood}
          />

          <DialogFooter className="sm:justify-end">
            <Button
              onClick={onAddFoodCard}
              disabled={loading}
              type="button"
              className="bg-red-500 hover:bg-red-400 text-white cursor-pointer"
            >
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Add Food "
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};
export default AddFoodCard;
