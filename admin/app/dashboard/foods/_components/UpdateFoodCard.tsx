"use client";

import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { LoaderCircle, Plus, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Category, Food } from "@/app/lib/types/categoriesTypes";
import { ChangeEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

import { UpdatedFoodCardInputs } from "./__component/FoodCardInputs copy";
import { toast } from "react-toastify";
import { FoodCardHeader } from "./__component/FoodCardHeader";

type UpdateFoodCardProps = {
  food: Food;
  categories: Category[];
  category: Category;
};
type UpdatedFoodProps = {
  foodName: string;
  price: string;
  ingredients: string;
  image: string;
  foodCategoryId: number | null;
};
const UpdateFoodCard = ({
  food,
  categories,
  category,
}: UpdateFoodCardProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { id, foodName, price, ingredients, image } = food;

  const [updatedFood, setUpdatedFood] = useState<UpdatedFoodProps>({
    foodName: food.foodName,
    price: food.price,
    ingredients: food.ingredients,
    image: food.image ?? "",
    foodCategoryId: food.foodCategoryId,
  });

  const onHandleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setUpdatedFood((prev) => ({ ...prev, [name]: value }));
  };

  const onSelectCategory = (foodCategoryId: number) => {
    setUpdatedFood({ ...updatedFood, foodCategoryId: foodCategoryId });
  };

  const onUpdatedFood = async () => {
    setLoading(true);

    try {
      await fetch(`http://localhost:8787/foods/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          foodName: updatedFood.foodName,
          price: updatedFood.price,
          image: updatedFood.image,
          ingredients: updatedFood.ingredients,
          foodCategoryId: updatedFood.foodCategoryId,
        }),
      });
      toast.success("Dish updated successfully! 🎉", {
        position: "top-right",
        autoClose: 3000,
      });
      router.refresh();
      setOpen(false);
    } catch (error) {
      toast.error("Failed to update dish. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
      console.log(error);
    }
    setLoading(false);
  };
  const onDeleteFood = async () => {
    setLoading(true);

    try {
      await fetch(`http://localhost:8787/foods/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Dish deleted!", {
        position: "top-right",
        autoClose: 3000,
      });
      router.refresh();
      setOpen(false);
    } catch (error) {
      toast.error("Failed to delete dish. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div>
        <FoodCardHeader category={category} />
        <UpdatedFoodCardInputs
          values={updatedFood}
          categories={categories}
          onHandleChange={onHandleChange}
          onSelectCategory={onSelectCategory}
        />

        <DialogFooter className="sm:justify-end">
          <Button
            disabled={loading}
            onClick={onDeleteFood}
            className="bg-red-500 hover:bg-red-400 text-white"
          >
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <TrashIcon />
            )}
          </Button>
          <Button
            onClick={onUpdatedFood}
            disabled={loading}
            type="button"
            className="bg-red-500 hover:bg-red-400 text-white"
          >
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Update the food"
            )}
          </Button>
        </DialogFooter>
      </div>
    </Dialog>
  );
};
export default UpdateFoodCard;
