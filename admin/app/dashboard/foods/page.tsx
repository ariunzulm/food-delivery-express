import AddCategoryButton from "./_components/AddCategory";
import AddedCategoryPage from "./_components/AddedCategoryPage";
import AddedFoodsPage from "./_components/AddedFoodsPage";

const FoodMenuPage = () => {
  return (
    <section className="min-h-screen w-full p-4">
      <AddedCategoryPage />
      <AddedFoodsPage />
    </section>
  );
};

export default FoodMenuPage;
