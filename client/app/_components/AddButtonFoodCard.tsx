import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Food } from "../lib/types/categoriesTypes";
import SelectedFoodCard from "./SelectedFoodCard";

type AddButtonFoodCardProps = {
  food: Food;
};

const AddButtonFoodCard = ({ food }: AddButtonFoodCardProps) => {
  const { foodName } = food;
  return (
    <div className="px-4 flex justify-between">
      <Dialog>
        <DialogTrigger>
          <Button
            size="icon"
            className=" bg-red-500 cursor-pointer rounded-full hover:bg-red-400 text-white transition-colors"
            aria-label={`Add ${foodName} to cart`}
          >
            <Edit className="w-5 h-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md p-4">
          <SelectedFoodCard food={food} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AddButtonFoodCard;
