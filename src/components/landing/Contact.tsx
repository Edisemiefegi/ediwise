"use client"
import React from "react";
import Input from "../base/Input";
import Button from "../base/Button";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter()
  return (
    <div className="items-center text-center container  w-10/12 mx-auto  dark:text-white gap-4 flex flex-col">
      <h1 className="font-bold text-2xl sm:text-4xl ">Ready to transform your finances?</h1>
      <p className="text-gray">
        Join thousands of users who have already taken control of their
        financial future.
      </p>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <Input placeholder="Enter your email" />
        <Button className="w-full" onClick={() => router.push('/auth/signup')}>Get Started Free</Button>
      </div>
      <p className="text-xs text-gray">
        No credit card required. Start your free trial today.
      </p>
    </div>
  );
}
