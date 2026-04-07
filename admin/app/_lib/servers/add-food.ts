"use server";

import { cookies } from "next/headers";

export const addFood = async (newFood: any, category: any) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  await fetch("https://food-delivery-server-wdw6.onrender.com/foods", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      foodName: newFood.foodName,
      price: newFood.price,
      image: newFood.image,
      ingredients: newFood.ingredients,
      foodCategoryId: category.id,
    }),
  });
};
