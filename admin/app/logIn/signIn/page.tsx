"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/services/auth/sign-in";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ChangeEventHandler, useState } from "react";
import { LoginImage } from "../page";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

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
  };

  return (
    <div className="flex justify-between items-center max-w-4xl mx-auto">
      <div className="max-w-md mx-auto space-y-5">
        <div className="rounded-full p-1 w-fit bg-red-700 hover:bg-red-500 text-white transition-colors cursor-pointer">
          <Link href="/logIn">
            <ChevronLeft />
          </Link>
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
          <Link href="/dashboard/foods">
            <Button className="cursor-pointer" onClick={onSubmit}>
              Sign In
            </Button>
          </Link>
        </Field>
        <div className="flex gap-2 justify-between">
          <p className="text-muted-foreground text-sm">Don't have an account</p>
          <Link href="/logIn/signUp" className="text-red-700 text-sm">
            Sign up
          </Link>
        </div>
      </div>
      <LoginImage />
    </div>
  );
};
export default SignIn;
