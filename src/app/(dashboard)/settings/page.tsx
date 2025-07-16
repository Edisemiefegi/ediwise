"use client";

import Button from "@/components/base/Button";
import Tab from "@/components/base/Tab";
import React, { useState } from "react";
import Profile from "@/components/setting/Profile";
import Security from "@/components/setting/Security";
import Advance from "@/components/setting/Advance";
import Notification from "@/components/setting/Notification";
import Privacy from "@/components/setting/Privacy";

export default function page() {
  const tabs = [
    {
      label: "Profile",
      value: "Profile",
    },
    {
      label: "Security",
      value: "Security",
    },
    {
      label: "Notifications",
      value: "Notifications",
    },
    {
      label: "Privacy",
      value: "Privacy",
    },
    {
      label: "Advanced",
      value: "Advanced",
    },
  ];

  const [currentView, setCurrentView] = useState("Profile");

  const handleTabSwitch = (val: string) => {
    setCurrentView(val);
    console.log(val, "active");
  };

  return (
    <main className="space-y-6">
      <div className="flex flex-col gap-2 lg:flex-row justify-between lg:items-center">
        <div>
          <p className="text-3xl font-bold">Settings</p>
          <p className="text-gray">
            Manage your account preferences and security settings
          </p>
        </div>
        <div>
          <Button rounded size="small" className=" bg-secondary !text-gray-700">
            Standard User
          </Button>
        </div>
      </div>

      <div className="w-full scroll-x-auto  ">
        <Tab
        className=""
          options={tabs}
          onChange={handleTabSwitch}
          defaultValue="Profile"
        ></Tab>
      </div>

      <div>
        {currentView == "Profile" && <Profile />}
        {currentView == "Security" && <Security />}{" "}
        {currentView == "Notifications" && <Notification />}{" "}
        {currentView == "Privacy" && <Privacy />}{" "}
        {currentView == "Advanced" && <Advance />}
      </div>
    </main>
  );
}
