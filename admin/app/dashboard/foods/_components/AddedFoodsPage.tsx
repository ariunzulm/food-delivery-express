import AddFoodCard from "./AddFoodCard";

import FoodCard from "@/app/_components/FoodCard";
import { Category } from "@/app/_lib/types/categoriesTypes";

type AddedFoodsPageProps = {
  categories: Category[];
};

const AddedFoodsPage = ({ categories }: AddedFoodsPageProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-14">
      {categories.map((category) => (
        <section key={category.id}>
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-1">
                Menu
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                {category.categoryName}
              </h2>
            </div>
            <span className="text-sm text-zinc-400 dark:text-zinc-500 hidden sm:block">
              {category.foods.length} item
              {category.foods.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <div className="h-px w-8 bg-zinc-100 dark:bg-zinc-800" />
          </div>
          <div className="grid gap-4">
            <AddFoodCard
              category={category}
              categories={categories}
              selectedCategory={category.id}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {category.foods.map((food) => (
                <div key={food.id}>
                  <FoodCard
                    selectedCategory={category.id}
                    categories={categories}
                    category={category}
                    food={food}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
export default AddedFoodsPage;
