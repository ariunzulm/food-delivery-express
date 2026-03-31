import { Button } from "@/components/ui/button";
import AddCategory from "./AddCategory";
import { Category } from "@/app/lib/types/categoriesTypes";

type AddedCategoryPageProps = {
  categories: Category[];
};
const AddedCategoryPage = ({ categories }: AddedCategoryPageProps) => {
  return (
    <div className="p-4 bg-zinc-800 text-red-500 w-full rounded-lg outline-1 space-y-2">
      <h2>Dishes Categories</h2>
      <div className="flex flex-wrap gap-2">
        <Button>
          All dishes
          <p className="bg-zinc-700 w-fit px-2 py-1 text-[10px] rounded-lg text-white cursor-pointer">
            {categories.flatMap((category) => category.foods).length}
          </p>
        </Button>
        {categories.map((category) => {
          return (
            <div className="flex gap-2" key={category.id}>
              <Button key={category.id}>
                {category.categoryName}
                <p
                  key={category.id}
                  className="bg-zinc-700 w-fit px-2 py-1 text-[10px] rounded-lg text-white cursor-pointer"
                >
                  {category.foods.length}
                </p>
              </Button>
            </div>
          );
        })}
        <AddCategory categories={categories} />
      </div>
    </div>
  );
};

export default AddedCategoryPage;
