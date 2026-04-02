"use client";
import { ChevronRightIcon, LogIn, MapPin, User } from "lucide-react";
import { NomNomLogo } from "./Footer";
import { ModeToggle } from "./ToggleTheme";
import Link from "next/link";
import { FoodCardSheet } from "./FoodCardSheet";

const Navigation = () => {
  return (
    <header className="relative bg-zinc-950 overflow-hidden">
      <nav className="relative max-w-7xl mx-auto p-2 sm:p-4 flex items-center justify-between">
        <Link href="/">
          <NomNomLogo />
        </Link>
        <div className="flex gap-2">
          <div className="w-fit h-10 px-4 rounded-full bg-zinc-200 border border-red-500/30 flex items-center justify-between gap-2 cursor-pointer">
            <label htmlFor="input" className="text-red-500 flex gap-2">
              <MapPin className="w-5 h-5 text-red-500" /> Delivery Address:
            </label>
            <input
              type="text"
              placeholder="Add location"
              id="input"
              className="outline-none border-none w-30"
            />
            <button className="text-muted-foreground">
              <ChevronRightIcon />
            </button>
          </div>
          <Link href="/userLogIn">
            <div className="w-10 h-10 rounded-full bg-red-500 border border-red-500/30 flex items-center justify-center cursor-pointer">
              <LogIn className="w-5 h-5 text-zinc-200" />
            </div>
          </Link>
          <div className="w-10 h-10 rounded-full bg-zinc-200 border border-red-500/30 flex items-center justify-center cursor-pointer">
            <User className="w-5 h-5 text-red-500" />
          </div>
          <FoodCardSheet />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};
export default Navigation;
