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
    const response = await fetch(
      "https://food-delivery-server-wdw6.onrender.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      },
    );
    const data = (await response.json()) as SignInResponse;
    return data;
  } catch (error) {
    console.log(error);
  }
};
