import { getCategories } from "@/app/lib/servers/get-Categies";
import AddedCategoryPage from "./_components/AddedCategoryPage";
import AddedFoodsPage from "./_components/AddedFoodsPage";
import { Category } from "@/app/lib/types/categoriesTypes";

const FoodMenuPage = async () => {
  const categories = await getCategories();

  return (
    <section className="min-h-screen w-full p-4">
      <AddedCategoryPage categories={categories} />
      <AddedFoodsPage categories={categories} />
    </section>
  );
};

export default FoodMenuPage;
