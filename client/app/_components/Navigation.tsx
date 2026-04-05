import { ModeToggle } from "./ToggleTheme";
import Link from "next/link";
import { FoodCardSheet } from "./FoodCardSheet";
import LocationPicker from "./LocationPicker";

const Navigation = () => {
  return (
    <header className="relativeoverflow-hidden">
      <nav className="relative max-w-7xl mx-auto p-2 sm:p-4 flex items-center justify-between">
        <Link href="/">
          <span className="font-display text-2xl font-bold tracking-tight capitalize select-none">
            <span className="text-red-500">nom</span>
            <span className="text-zinc-900 dark:text-zinc-100">nom</span>
          </span>
        </Link>
        <div className="flex gap-2">
          <LocationPicker />

          <div className="flex items-center justify-between gap-2 cursor-pointer">
            <Link
              href="/userLogIn"
              className="h-10 px-5 rounded-full bg-red-500 hover:bg-red-600 text-white text-[13px] font-medium flex items-center gap-1.5 transition-colors duration-150 whitespace-nowrap cursor-pointer"
            >
              Sign in
            </Link>

            <FoodCardSheet />

            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navigation;
