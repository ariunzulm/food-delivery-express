import { Food } from "../types/categoriesTypes";
import { FoodOrderItem } from "../types/ordersTypes";

type GetOrdersProps = {
  orders: FoodOrderItem[];
};
export const getOrders = async () => {
  try {
    const response = await fetch("http://localhost:8787/orders", options);

    const data: GetOrdersProps = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoibXVua2hiYXR0My5hcml1bnp1bHZ2dkBnbWFpbHZmdmZkdmZkLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJG5Fb012TkdtekZ1Mi5DUE9hbzNLcHVoL1FSOFFMQ09PblM2bWtYN0wxU0pRQ2duZzlKV1l5Iiwicm9sZSI6IkFETUlOIn0sImlhdCI6MTc3NDMzNDg4NiwiZXhwIjoxNzc0MzM4NDg2fQ.GiGmtPLOhTESyaFJv4VH1MjjHbf_yCj-GsRDe4EVesQ";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
}