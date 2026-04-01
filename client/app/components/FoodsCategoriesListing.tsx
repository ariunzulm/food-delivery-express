import { getCategories } from "../lib/servers/get-Categies";
import FoodCard from "./FoodCard";

const FoodsCardListing = async () => {
  const categories = await getCategories();

  return (
    <div className="my-4">
      {categories.map((category) => {
        return (
          <div
            key={category.id}
            className="mx-auto space-y-1.5 max-w-7xl 0 px-4 my-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EF4444]">
              {category.categoryName}
            </h2>
            <div className="w-full my-6 h-0.5 bg-red-200"></div>
            <div className="grid grid-cols-2 md:grid-cols-3  gap-6">
              {category.foods.map((food) => {
                return (
                  <div key={food.id}>
                    <FoodCard
                      foodName={food.foodName}
                      price={food.price}
                      ingredients={food.ingredients}
                      categoryName={category.categoryName}
                      image={food.image}
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
export default FoodsCardListing;
