export interface UsersRoot {
  users: User[];
}

export interface User {
  id: number;
  email: string;
  confirmPassword: string;
  phoneNumber: string;
  role: string;
  age: number;
  foodOrder: FoodOrder[];
}

export interface FoodOrder {
  id: number;
  totalPrice: string;
  userId: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  foodOrderItems: FoodOrderItem[];
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
