"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/services/auth/sign-in";
import Link from "next/link";
import { ChangeEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const onHandlechange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };
  const onSubmit = async () => {
    const credentials = {
      email: userInfo.email,
      password: userInfo.password,
    };
    await signIn(credentials);
    router.push("/dashboard/foods");
  };

  return (
    <div className="flex justify-between items-center max-w-4xl mx-auto min-h-screen">
      <div className="max-w-md mx-auto space-y-5">
        <div className="p-2 w-fit rounded-full bg-red-500 hover:bg-red-600 text-white font-medium flex items-center transition-colors duration-150  cursor-pointer">
          <ChevronLeft size={16} />
        </div>
        <Field>
          <FieldLabel htmlFor="input-field-username">Log in</FieldLabel>
          <FieldDescription>
            Log in to enjoy your favourite dishes.
          </FieldDescription>
          <Input
            onChange={onHandlechange}
            value={userInfo.email}
            name="email"
            id="email"
            type="text"
            placeholder="Enter your email"
          />
          <Input
            onChange={onHandlechange}
            value={userInfo.password}
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
          <button className="text-muted-foreground text-sm text-start underline cursor-pointer">
            Forgot password ?
          </button>

          <button
            onClick={onSubmit}
            className="h-8 px-3 w-fit justify-center rounded-full bg-red-500 hover:bg-red-600 text-white text-[13px] font-medium flex items-center gap-1.5 transition-colors duration-150 whitespace-nowrap cursor-pointer"
          >
            Sign in
          </button>
        </Field>
        <div className="flex gap-2 justify-between">
          <p className="text-muted-foreground text-sm">Don't have an account</p>
          <Link href="/logIn/signUp">
            <p className="text-red-500 text-sm">Sign up</p>
          </Link>
        </div>
      </div>
      <LoginImage />
    </div>
  );
};
export default SignIn;

export const LoginImage = () => {
  return (
    <div className="max-w-xl h-full">
      <img
        src="/signin.png"
        alt="sign In image"
        className="object-cover w-full h-full shrink-0"
      />
    </div>
  );
};
