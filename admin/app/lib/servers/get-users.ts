import { User } from "../types/usersTypes";

type GetUsersProps = {
  users: User[];
};
export const getUsers = async (): Promise<GetUsersProps> => {
  const response = await fetch("http://localhost:8787/users");

  const data = await response.json();

  return data;
};
