import { cookies } from "next/headers";
import { User, UsersRoot } from "../types/usersTypes";

type GetUserResponse = {
  user: UsersRoot;
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
  const users = (await response.json()) as GetUserResponse;

  return users.user;
};

type UsersProps = {
  users: UsersRoot;
};

export const getUsers = async () => {
  try {
    const response = await fetch(
      "https://food-delivery-server-wdw6.onrender.com/users",
    );

    const users = (await response.json()) as UsersProps;

    return users.users;
  } catch (error) {
    console.log(error);
  }
};
