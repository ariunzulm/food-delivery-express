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
      <Hero /> <NavCategories />
      <FoodsCardListing categories={filteredCategories} />
    </div>
  );
};
export default HomePage;
