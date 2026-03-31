"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { signUp } from "@/lib/services/auth/sign-up";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ChangeEventHandler, useState } from "react";
import { LoginImage } from "../page";

type CredentialsProps = {
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  age: number;
};

const SignUp = () => {
  const [userInfo, setUserInfo] = useState<CredentialsProps>({
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    age: 1,
  });
  console.log(userInfo);
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
      confirmPassword: userInfo.confirmPassword,
      phoneNumber: userInfo.phoneNumber,
      age: userInfo.age,
    };
    await signUp(credentials);
  };
  return (
    <div className="flex justify-between gap-10 items-center max-w-4xl mx-auto min-h-screen p-10">
      <div className="max-w-lg mx-auto space-y-5">
        <div className="rounded-full p-1 w-fit bg-red-700 hover:bg-red-500 text-white transition-colors cursor-pointer">
          <Link href="/logIn">
            <ChevronLeft />
          </Link>
        </div>

        <Field>
          <FieldLabel htmlFor="input-field-username">
            Create your account
          </FieldLabel>
          <FieldDescription>
            Sign up to explore your favourite dishes.
          </FieldDescription>
          <Input
            onChange={onHandlechange}
            value={userInfo.email}
            name="email"
            id="email"
            type="email"
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
          <Input
            onChange={onHandlechange}
            value={userInfo.confirmPassword}
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
          />
          <Input
            onChange={onHandlechange}
            value={userInfo.phoneNumber}
            name="phoneNumber"
            id="phoneNumber"
            type="text"
            placeholder="Enter your phone number"
          />
          <Input
            onChange={onHandlechange}
            value={userInfo.age}
            name="age"
            id="age"
            type="text"
            placeholder="Enter your age"
          />
          <Link href="/logIn/signIn">
            <Button className="cursor-pointer" onClick={onSubmit}>
              Sign up
            </Button>
          </Link>
        </Field>
        <div className="flex gap-2 justify-between">
          <p className="text-muted-foreground text-sm">
            Already have an account
          </p>
          <Link href="/logIn/signIn" className="text-red-700 text-sm">
            Sign in
          </Link>
        </div>
      </div>
      <LoginImage />
    </div>
  );
};
export default SignUp;
