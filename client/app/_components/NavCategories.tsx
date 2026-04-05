"use client";
import { useState } from "react";

type Categories = {
  emoji: string;
  label: string;
  slug: string;
};

const categories: Categories[] = [
  { emoji: "🍽️", label: "All", slug: "all" },
  { emoji: "🍕", label: "Pizza", slug: "pizza" },
  { emoji: "🍔", label: "Burgers", slug: "burgers" },
  { emoji: "🍜", label: "Noodles", slug: "noodles" },
  { emoji: "🍣", label: "Sushi", slug: "sushi" },
  { emoji: "🌮", label: "Mexican", slug: "mexican" },
  { emoji: "🥗", label: "Healthy", slug: "healthy" },
  { emoji: "🍗", label: "Chicken", slug: "chicken" },
  { emoji: "☕", label: "Drinks", slug: "drinks" },
  { emoji: "🍰", label: "Desserts", slug: "desserts" },
  { emoji: "🥐", label: "Breakfast", slug: "breakfast" },
];

export const NavCategories = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <div className="border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex gap-1 overflow-x-auto scrollbar-none py-1">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`flex items-center gap-1.5 cursor-pointer px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap border transition-all duration-150
                ${
                  activeCategory === cat.slug
                    ? "bg-red-50 dark:bg-red-950/40 text-red-500 border-red-200 dark:border-red-800"
                    : "text-zinc-500 dark:text-zinc-400 border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-700 dark:hover:text-zinc-300"
                }`}
            >
              <span className="text-base leading-none">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
