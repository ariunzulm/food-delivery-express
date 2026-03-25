import { getCategories } from "@/app/lib/servers/get-Categies";
import { Button } from "@/components/ui/button";
import AddCategory from "./AddCategory";

const AddedCategoryPage = async () => {
  const categories = await getCategories();

  return (
    <div className="p-4 bg-zinc-800 text-red-500 w-full rounded-lg outline-1 space-y-2">
      <h2>Dishes Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          return (
            <div className="flex gap-2" key={category.id}>
              <Button key={category.id}>
                {category.categoryName}
                <p
                  key={category.id}
                  className="bg-zinc-700 w-fit px-2 py-1 text-[10px] rounded-lg text-white"
                >
                  {category.foods.length}
                </p>
              </Button>
            </div>
          );
        })}
        <AddCategory />
      </div>
    </div>
  );
};

export default AddedCategoryPage;
