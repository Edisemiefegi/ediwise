"use client";

import Button from "@/components/base/Button";
import Navbar from "@/components/base/Navbar";
import React, { ReactNode, useState } from "react";
import clsx from "clsx";

interface DashboardLayoutProp {
  children?: ReactNode;
}

export default function Layout({ children }: DashboardLayoutProp) {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleToggle = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <main className="w-full h-screen overflow-hidden  flex ">
      {/* sidebar */}
      <div
        className={clsx(
          "relative z-20   h-full",
          showNavbar === true ? "block" : "md:block hidden xl:w-1/5 lg:w-[30%] md:w-1/3 "
        )}
      >
        <Navbar setShowNavbar={setShowNavbar}></Navbar>
      </div>

      {/* overlay */}
      {showNavbar && (
        <div
          className="fixed inset-0 bg-black/60  md:hidden"
          onClick={() => setShowNavbar(false)}
        />
      )}

      {/* main content */}
      <div className="xl:w-4/5 md:w-4/6 w-full   flex-1 overflow-y-auto ">
        <div className="border-b px-6 pt-4 pb-2 border-gray-300  flex items-center justify-between ">
          <div className="md:block hidden">
            <h1 className="font-medium text-lg">Welcome back, di!</h1>
            <p className="text-gray">
              Here is what is happening with your finances today.
            </p>
          </div>

          <Button
            onClick={handleToggle}
            variant="text"
            className="md:hidden block "
          >
            <i className="pi pi-bars "></i>
          </Button>

          <div className="flex gap-8 items-center">
            <i className="pi pi-bell"></i>
            <i className="pi pi-moon"></i>
            <div className="w-10 h-10 rounded-full bg-secondary"></div>
          </div>
        </div>

        <div className=" px-6 py-4   ">{children}</div>
      </div>
    </main>
  );
}
