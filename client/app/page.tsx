import FoodsCardListing from "./components/FoodsCategorieas";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <main className="max-w-460 mx-auto sm:p-6 lg:p-8 bg-zinc-50 dark:bg-zinc-800">
        <FoodsCardListing />
      </main>
    </div>
  );
};
export default HomePage;
