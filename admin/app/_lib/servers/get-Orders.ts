import { OrdersRoot } from "../types/ordersTypes";

type GetOrdersProps = {
  orders: OrdersRoot;
};
export const getOrders = async () => {
  try {
    const response = await fetch("http://localhost:8787/orders", options);

    const data: GetOrdersProps = await response.json();
    console.log(data.orders, "orders");
    return data.orders.orders;
  } catch (error) {
    console.log(error);
  }
};

export const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
// accept: "application/json",
//   Authorization: `Bearer ${token}`,
