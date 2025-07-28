"use client";

import Button from "@/components/base/Button";
import Navbar from "@/components/base/Navbar";
import React, { ReactNode, useState, useEffect } from "react";
import clsx from "clsx";
import { useStore } from "@/store/Store";
import Modal from "@/components/dashboard/Notification/Modal";

interface DashboardLayoutProp {
  children?: ReactNode;
}

export default function Layout({ children }: DashboardLayoutProp) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const { theme, toggleTheme } = useStore();

  const handleNotification = () => {
    console.log(showNotification, "b");

    setShowNotification((e) => !e);
    console.log(showNotification, "a");
  };

  useEffect(() => {
    console.log(showNotification, "updated value");
  }, [showNotification]);

  const handleToggle = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <main className="w-full h-screen overflow-hidden  flex ">
      {/* sidebar */}
      <div
        className={clsx(
          "relative z-20   h-full",
          showNavbar === true
            ? "block"
            : "md:block hidden xl:w-1/5 lg:w-[30%] md:w-1/3 "
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
      <div className="xl:w-4/5 md:w-4/6 w-full dark:bg-gray-950 dark:text-white   flex-1 overflow-y-auto ">
        <div className="border-b dark:border-gray-800 px-6 pt-4 pb-2 border-gray-300  flex items-center justify-between ">
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
            <div >
              {showNotification && (
                <div
                  className="fixed z-40 inset-0 bg-black/60  "
                  onClick={() => {
                    console.log("Backdrop clicked, closing modal");
                    setShowNotification(false);
                  }}
                >
                  <div
                    onClick={(e) => {
                      console.log("Modal clicked, stop propagation");
                      e.stopPropagation();
                    }}
                    className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto md:w-1/2  w-full"
                  >
                    <Modal setShowNotification={setShowNotification} />
                  </div>
                </div>
              )}
            </div>{" "}
            <i
              className="pi pi-bell cursor-pointer"
              onClick={handleNotification}
            ></i>
            <span className="cursor-pointer" onClick={toggleTheme}>
              {theme == "dark" ? (
                <i className="pi pi-sun"></i>
              ) : (
                <i className="pi pi-moon "></i>
              )}
            </span>{" "}
            <div className="w-10 h-10 rounded-full bg-secondary"></div>
          </div>
        </div>

        <div className=" px-6 py-4   ">{children}</div>
      </div>
    </main>
  );
}
