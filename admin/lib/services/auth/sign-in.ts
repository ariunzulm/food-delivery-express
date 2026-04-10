type Credentials = {
  email: string;
  password: string;
};
type SignInResponse = {
  accessToken: string;
};
export const signIn = async (credentials: Credentials) => {
  const response = await fetch("/api/user/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  console.log(response);
  return response;
};
