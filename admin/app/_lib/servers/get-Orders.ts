import { OrdersRoot } from "../types/ordersTypes";

export const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
export const getOrders = async () => {
  try {
    const response = await fetch(
      "https://food-delivery-server-wdw6.onrender.com/orders",
      options,
    );

    const data: OrdersRoot = await response.json();
    console.log(data.orders, "orders");
    return data.orders;
  } catch (error) {
    console.log(error);
  }
};

// accept: "application/json",
//   Authorization: `Bearer ${token}`,
