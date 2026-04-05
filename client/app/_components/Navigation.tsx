import { ModeToggle } from "./ToggleTheme";
import Link from "next/link";
import { FoodCardSheet } from "./FoodCardSheet";
import LocationPicker from "./LocationPicker";
import { NomNomLogo } from "./NomNomLogo";

const Navigation = () => {
  return (
    <header className="relative overflow-hidden">
      <nav className="relative max-w-7xl mx-auto p-2 sm:p-4 flex items-center justify-between">
        <Link href="/">
          <NomNomLogo />
        </Link>
        <div className="flex gap-2">
          <LocationPicker />

          <div className="flex items-center gap-2 cursor-pointer">
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
