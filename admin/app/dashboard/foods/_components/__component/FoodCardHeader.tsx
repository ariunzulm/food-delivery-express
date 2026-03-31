import { Category } from "@/app/lib/types/categoriesTypes";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
type FoodCardHeaderProps = {
  category: Category;
};
export const FoodCardHeader = ({ category }: FoodCardHeaderProps) => {
  return (
    <DialogHeader>
      <DialogTitle className="text-base text-center font-bold leading-tight text-red-500">
        Add new Dish to {category.categoryName}
      </DialogTitle>
    </DialogHeader>
  );
};
