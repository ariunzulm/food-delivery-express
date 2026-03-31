type Credentials = {
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  age: number;
};
type SignInResponse = {
  accessToken: string;
};
export const signUp = async (credentials: Credentials) => {
  try {
    const response = await fetch("http://localhost:8787/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = (await response.json()) as SignInResponse;
    return data;
  } catch (error) {
    console.log(error);
  }
};
