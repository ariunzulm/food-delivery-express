import AddCategory from "./AddCategory";
import { Category } from "@/app/_lib/types/categoriesTypes";

type AddedCategoryPageProps = {
  categories: Category[];
};
const AddedCategoryPage = ({ categories }: AddedCategoryPageProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-5">
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
        Dish Categories
      </h2>
      <div className="flex items-center gap-3 mb-8">
        <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
        <div className="h-px w-8 bg-zinc-100 dark:bg-zinc-800" />
      </div>
      <div className="flex flex-wrap gap-2">
        <button className="flex items-center gap-1.5 cursor-pointer px-4 py-2 rounded-full font-medium whitespace-nowrap border-red-600 border transition-all duration-150 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-700 dark:hover:text-zinc-300">
          All dishes
          <p className="w-fit px-2 py-1 text-[10px] rounded-full text-white bg-zinc-800 cursor-pointer">
            {categories.flatMap((category) => category.foods).length}
          </p>
        </button>
        {categories.map((category) => (
          <div className="flex gap-2" key={category.id}>
            <button
              className="flex items-center gap-1.5 cursor-pointer px-4 py-2 rounded-full font-medium whitespace-nowrap border-zinc-600 border transition-all duration-150 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-700 dark:hover:text-zinc-300"
              key={category.id}
            >
              {category.categoryName}
              <p
                key={category.id}
                className="w-fit px-2 py-1 text-[10px] rounded-full text-white bg-zinc-800 cursor-pointer"
              >
                {category.foods.length}
              </p>
            </button>
          </div>
        ))}
        <AddCategory />
      </div>
    </div>
  );
};

export default AddedCategoryPage;
