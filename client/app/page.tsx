import { FoodCardSheet } from "./_components/FoodCardSheet";
import FoodsCardListing from "./_components/FoodsCategoriesListing";
import Hero from "./_components/Hero";
import { NavCategories } from "./_components/NavCategories";
import { getCategories } from "./lib/servers/get-Categies";

const HomePage = async () => {
  const categories = await getCategories();
  console.log(categories, ":categories");

  const filteredCategories = categories.filter(
    (category) => category.foods.length,
  );

  return (
    <div className="min-h-screen w-full">
      <NavCategories />
      <Hero />
      <main className="max-w-460 mx-auto sm:p-6 lg:p-8 bg-zinc-50 dark:bg-zinc-800">
        <FoodsCardListing categories={filteredCategories} />
      </main>
      <FoodCardSheet />
    </div>
  );
};
export default HomePage;
