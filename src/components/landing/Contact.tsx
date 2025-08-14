"use client"
import React from "react";
import Input from "../base/Input";
import Button from "../base/Button";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter()
  return (
    <div className="items-center gap-4 flex flex-col">
      <h1 className="font-bold text-4xl">Ready to transform your finances?</h1>
      <p className="text-gray">
        Join thousands of users who have already taken control of their
        financial future.
      </p>
      <div className="flex gap-4">
        <Input placeholder="Enter your email" />
        <Button onClick={() => router.push('/auth/signup')}>Get Started Free</Button>
      </div>
      <p className="text-xs text-gray">
        No credit card required. Start your free trial today.
      </p>
    </div>
  );
}
