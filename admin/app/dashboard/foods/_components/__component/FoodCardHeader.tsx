import { Category } from "@/app/lib/types/categoriesTypes";
import { DialogHeader } from "@/components/ui/dialog";
type FoodCardHeaderProps = {
  category: Category;
  title: string;
};
export const FoodCardHeader = ({ category, title }: FoodCardHeaderProps) => {
  return (
    <DialogHeader>
      <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-1">
        {title} {category.categoryName}
      </p>
    </DialogHeader>
  );
};
