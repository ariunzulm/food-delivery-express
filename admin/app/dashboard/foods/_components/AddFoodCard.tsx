"use client";

import { LoaderCircle, Plus } from "lucide-react";
import { ChangeEventHandler, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Category } from "@/app/_lib/types/categoriesTypes";
import { useRouter } from "next/navigation";
import { FoodCardInputs } from "./__component/FoodCardInputs";
import { FoodCardHeader } from "./__component/FoodCardHeader";
import { addFood } from "@/app/_lib/servers/add-food";

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
  };
  const onSelectCategory = (foodCategoryId: number) => {
    setNewFood({ ...newFood, foodCategoryId: foodCategoryId });
  };

  const onUploadedImage = (url: string) => {
    setNewFood((prev) => ({ ...prev, image: url }));
  };
  const onAddFoodCard = async () => {
    setLoading(true);

    try {
      await addFood(newFood, category);
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <section className="w-full p-4 gap-2 flex flex-col items-center border border-zinc-100 dark:border-zinc-800 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-0.5 bg-white dark:bg-zinc-900 cursor-pointer">
        <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-1">
          Add new dish to {category.categoryName}
        </p>

        <DialogTrigger>
          <div className="flex items-center cursor-pointer gap-1 bg-red-500 hover:bg-red-600 active:scale-95 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-150">
            <Plus size={13} strokeWidth={2.5} />
            Add
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md p-4">
          <FoodCardHeader category={category} title="Add new dish to" />
          <FoodCardInputs
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
            onHandleChange={onHandleChange}
            categories={categories}
            values={newFood}
            onUploadedImage={onUploadedImage}
          />
          <DialogFooter className="sm:justify-end">
            <Button
              onClick={onAddFoodCard}
              disabled={loading}
              className="flex items-center cursor-pointer gap-1 bg-red-500 hover:bg-red-600 active:scale-95 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-150"
            >
              {loading ? <LoaderCircle className="animate-spin" /> : "Add Food"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </section>
    </Dialog>
  );
};
export default AddFoodCard;
