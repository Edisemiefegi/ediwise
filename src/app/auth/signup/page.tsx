
import Button from "@/components/base/Button";
import React from "react";
import Input from "@/components/base/Input";
import AuthContainer from "@/components/auth/AuthContainer";
import Link from "next/link";
import Checkbox from "@/components/base/Checkbox";

export default function page({}) {

  const InputField = [
    {
      label: "Full Name",
      placeholder: "Enter your full name",
      icon: "pi pi-user",
    },
    {
      label: "Email",
      placeholder: "Enter your email",
      icon: "pi pi-envelope",
    },
    {
      label: "Password",
      placeholder: "Create a password",
      icon: "pi pi-lock",
    },
    {
      label: " Confim Password",
      placeholder: "Confirm your password",
      icon: "pi pi-lock",
    },
  ];

  return (
    <AuthContainer
      heading="Create Your Account"
      subheading="Join EdiWise to start managing your financial future

"
      link={
        <Link href="/auth" className="text-primary">
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
        <Checkbox rounded>
          I agree to the <span className="text-primary">Terms of Service</span>{" "}
          and <span className="text-primary"> Privacy Policy</span>
        </Checkbox>
         <Link href="/">
          <Button  block>
         Create Account
        </Button>
         </Link>
       
        <hr className="text-gray-300" />
      </form>
    </AuthContainer>
  );
}
