import FoodCard from "@/app/components/FoodCard";
import AddFoodCard from "./AddFoodCard";
import { CategoriesProps } from "../page";

const AddedFoodsPage = ({ categories }: CategoriesProps) => {
  return (
    <div className="my-4">
      {categories.map((category) => {
        return (
          <div
            key={category.id}
            className="mx-auto space-y-1.5 max-w-7xl my-4 "
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EF4444]">
              {category.categoryName}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3  gap-6">
              <AddFoodCard category={category} />
              {category.foods.map((food) => {
                return (
                  <div key={food.id}>
                    <FoodCard
                      foodName={food.foodName}
                      price={food.price}
                      description={food.ingredients}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default AddedFoodsPage;
