import { Order } from "./ordersTypes";

export type User = {
  id: number;
  email: string;
  password: string;
  phoneNumber: string;
  role: string;
  age: number;
  foodOrder: Order[];
};
