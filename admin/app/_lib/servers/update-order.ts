"use server";
import { cookies } from "next/headers";

export const updateOrders = async (id: number, status: string) => {
  const body = { status };

  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;

  try {
    await fetch(`https://food-delivery-server-wdw6.onrender.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error);
  }
};
