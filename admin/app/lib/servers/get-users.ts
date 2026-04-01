import { cookies } from "next/headers";
import { User } from "../types/usersTypes";

type GetUserResponse = {
  user: User;
};

export const getUser = async () => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;

  const response = await fetch("http://localhost:8787/users/auth/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const user = (await response.json()) as GetUserResponse;

  return user;
};

type UsersProps = {
  users: User[];
};

export const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:8787/users");

    const users = (await response.json()) as UsersProps;

    return users;
  } catch (error) {
    console.log(error);
  }
};
