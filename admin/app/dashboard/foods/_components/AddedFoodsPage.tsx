import AddFoodCard from "./AddFoodCard";

import FoodCard from "@/app/components/FoodCard";
import { Category } from "@/app/lib/types/categoriesTypes";

type AddedFoodsPageProps = {
  categories: Category[];
};

const AddedFoodsPage = ({ categories }: AddedFoodsPageProps) => {
  console.log(categories, "addded");
  return (
    <div className="my-4">
      {categories.map((category) => {
        return (
          <div key={category.id} className="mx-auto space-y-2 max-w-7xl my-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EF4444]">
              {category.categoryName}
            </h2>

            <div className="grid">
              <AddFoodCard category={category} categories={categories} />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {category.foods.map((food) => {
                  return (
                    <div key={food.id}>
                      <FoodCard categories={categories} category={category} food={food} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default AddedFoodsPage;
// add new dish deer darahad addedcatergory(return foods) == foods listings ruu ochno
// food deer darahad umnuh utga hadgalagdana, edit button der darahad editting
