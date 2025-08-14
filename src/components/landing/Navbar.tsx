"use client";

import React, { useState } from "react";
import Button from "../base/Button";
import Tab from "@/components/base/Tab";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const tabMenu = [
    { value: "Features", label: "Features" },
    { value: "Pricing", label: "Pricing" },
    { value: "About", label: "About" },
    { value: "Contact", label: "Contact" },
  ];

  return (
    <main className="bg-transparent z-20  py-3 w-full  dark:bg-gray-900 dark:text-white  backdrop-blur-md fixed border-b  dark:border-gray-800 border-gray-300">
      <nav className="container  w-10/12 mx-auto flex justify-between items-center  ">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Button className="!px-2">
            <i className="pi pi-wallet"></i>
          </Button>
          <span className="font-medium">EdiWise</span>
        </div>

        {/*  mobile only */}
        <div className="sm:hidden block">
          <i
            className="pi pi-bars  text-xl cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          ></i>
        </div>

        {/* Desktop menu */}
        <div className="w-fit sm:block hidden">
          <Tab
            activeTabClass="text-primary "
            className="!bg-transparent"
            options={tabMenu}
          />
        </div>

        {/* Desktop auth buttons */}
        <div className="sm:block hidden">
          <div className="flex gap-3">
            <Button variant="text" onClick={() => router.push("/auth")}>
              Sign In
            </Button>
            <Button onClick={() => router.push("/auth/signup")}>
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t dark:border-gray-800 border-gray-300 sm:hidden flex flex-col p-4 space-y-4">
            <Tab
              activeTabClass="text-primary"
              className="flex flex-col gap-4 !bg-transparent"
              options={tabMenu}
            />
            <div className="flex flex-col gap-2">
              <Button variant="text">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        )}
      </nav>
    </main>
  );
}
