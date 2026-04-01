import { cookies } from "next/headers";
import { NextResponse } from "next/server";

type Credentials = {
  email: string;
  password: string;
};
type SignInResponse = {
  accessToken: string;
};

export async function POST(req: Request) {
  const credentials = await req.json();

  const cookiesStore = await cookies();

  const response = await fetch("http://localhost:8787/users/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = (await response.json()) as SignInResponse;
  cookiesStore.set("token", data.accessToken);

  return NextResponse.json({ success: true }, { status: 200 });
}
