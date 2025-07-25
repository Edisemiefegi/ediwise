import Button from "@/components/base/Button";
import Card from "@/components/base/Card";
import React, { ReactNode } from "react";

interface AuthLayoutProp {
  children?: ReactNode;
  link?: ReactNode;
  heading?: string;
  subheading?: string;
}

export default function AuthContainer({
  children,
  link,
  heading = "Welcome to EdiWise",
  subheading = "Sign in to your account to manage your finances",
}: AuthLayoutProp) {
  return (
    <div className="bg-secondary dark:bg-gray-900 dark:text-white w-full  h-fit  text-center">
      <div className=" mx-auto md:w-lg w-full py-0 md:py-6 ">
        <Card className="space-y-6 min-h-screen md:h-fit">
          <Button size="medium">
            <i className="pi pi-wallet text-2xl"></i>
          </Button>

          <div className="space-y-1">
            <h1 className="text-3xl font-bold">{heading}</h1>
            <p className="text-gray">{subheading} </p>
          </div>

          {children}
          <Button variant="text" className="text-sm font-normal text-gray">
            Dont have an account? <span>{link}</span>
          </Button>
        </Card>
      </div>
    </div>
  );
}
