import Button from "@/components/base/Button";
import React from "react";
import Image from "next/image";
import Input from "@/components/base/Input";
import AuthContainer from "@/components/auth/AuthContainer";
import Link from "next/link";

export default function page({}) {
  const InputField = [
    {
      label: "Email",
      placeholder: "Enter your email",
      icon: "pi pi-envelope",
    },
    {
      label: "Password",
      placeholder: "Enter your password",
      icon: "pi pi-lock",
    },
  ];

  return (
    <AuthContainer
      link={
        <Link href="/auth/signup" className="text-primary">
          Sign in
        </Link>
      }
    >
      <form className="w-full text-start space-y-5">
        {InputField.map((item, index) => (
          <Input
            key={index}
            labelUp={item.label}
            prepend={<i className={item.icon}></i>}
            placeholder={item.placeholder}
          />
        ))}
        <Button
          variant="text"
          className="text-primary  !px-0 !py-0 text-sm !items-start"
        >
          Forgot password?
        </Button>
        <Link href="/auth/signup">
          {" "}
          <Button block>Sign in</Button>
        </Link>
        <hr className="text-gray-300" />
        <Button variant="outline" block className="">
          <span>
            <Image
              src="/icons/google.ico"
              width={20}
              height={20}
              alt="google icon"
            />
          </span>
          Continue with Google
        </Button>{" "}
        <Button variant="outline" block className="">
          <span>
            <Image
              src="/icons/fb.png"
              width={30}
              height={30}
              alt="google icon"
            />
          </span>
          Continue with Facebook
        </Button>
      </form>
    </AuthContainer>
  );
}
