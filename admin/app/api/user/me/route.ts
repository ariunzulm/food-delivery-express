import { cookies } from "next/headers";

type Credentials = {
  email: string;
  password: string;
};
type SignInResponse = {
  accessToken: string;
};

export async function GET() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;
  const response = await fetch("http://localhost:8787/users/auth/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = (await response.json()) as SignInResponse;
  cookiesStore.set("token", data.accessToken);
  return new Response("OK");
}
