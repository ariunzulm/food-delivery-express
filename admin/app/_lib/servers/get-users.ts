import { cookies } from "next/headers";
import { UsersRoot } from "../types/usersTypes";

type User = {
  id: number;
  email: string;
  confirmPassword: string;
  phoneNumber: string;
  role: string;
  age: number;
};

export const getUser = async () => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;

  const response = await fetch(
    "https://food-delivery-server-wdw6.onrender.com/users/auth/me",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const user = (await response.json()) as User;
  return user;
};
