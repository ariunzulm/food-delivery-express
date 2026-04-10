export interface OrdersRoot {
  orders: Order[];
}

export interface Order {
  id: number;
  totalPrice: string;
  userId: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  foodOrderItems: FoodOrderItem[];
}

export interface User {
  id: number;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  role: string;
  age: number;
}

export interface FoodOrderItem {
  id: number;
  quantity: number;
  foodId: number;
  foodOrderId: number;
  createdAt: string;
  updatedAt: string;
  food: Food;
}

export interface Food {
  id: number;
  foodName: string;
  price: string;
  image: string;
  ingredients: string;
  foodCategoryId: number;
  createdAt: string;
  updatedAt: string;
}
