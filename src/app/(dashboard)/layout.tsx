"use client";

import Button from "@/components/base/Button";
import Navbar from "@/components/base/Navbar";
import React, { ReactNode, useState, useEffect } from "react";
import clsx from "clsx";
import { useTheme } from "@/store/Theme";
import Modal from "@/components/dashboard/Notification/Modal";
import useUser from "@/hooks/useUser";
import Card from "@/components/base/Card";

interface DashboardLayoutProp {
  children?: ReactNode;
}

export default function Layout({ children }: DashboardLayoutProp) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useUser();

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
          "relative z-30   h-full",
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
        <div className="border-b sticky  top-0 bg-white z-20 dark:bg-gray-950 dark:border-gray-800 px-6 pt-4 pb-2 border-gray-300  flex items-center justify-between ">
          <div className="md:block hidden">
            <h1 className="font-medium text-lg">Welcome back, {user?.name}</h1>
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
            <div>
              {showNotification && (
                <Modal setShowNotification={setShowNotification} />
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
            <div className=" ">
              <Button
                rounded
                onClick={() => setShowProfile((prev) => !prev)}
                className="w-10  !p-0 h-10 bg-secondary !text-gray-800 dark:!text-white dark:bg-gray-900"
              >
                {" "}
                {user?.profile ? (
                  <img
                    src={user.profile}
                    alt={user.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  user?.name?.slice(0, 2).toUpperCase()
                )}
              </Button>
              {showProfile && (
                <div className="absolute  w-40 right-8 top-17 transition-all duration-300 ease-in-out">
                  <Card className=" w-fit">
                    <Button
                      variant="text"
                      onClick={logout}
                      className="text-sm w-fit text-error"
                    >
                      <i className="pi pi-sign-out"></i> Logout
                    </Button>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" px-6 py-4   ">{children}</div>
      </div>
    </main>
  );
}
