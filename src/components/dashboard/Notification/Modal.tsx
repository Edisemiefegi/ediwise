"use client";

import React, { useState } from "react";
import Card from "@/components/base/Card";
import Button from "@/components/base/Button";
import Tab from "@/components/base/Tab";
import NotifyCard from "@/components/dashboard/Notification/Card";

interface Props {
  setShowNotifcation: any;
}

export default function Modal({ setShowNotifcation }: Props) {
  const tabs = [
    {
      label: "All",
      value: "All",
    },
    {
      label: "Unread",
      value: "Unread",
    },
    {
      label: "Bills",
      value: "Bills",
    },
    {
      label: "Budget",
      value: "Budget",
    },
    {
      label: "Security",
      value: "Security",
    },
  ];

  const alerts = [
    {
      icon: "pi pi-exclamation-triangle text-error ",
      heading: "Housing",
      text: "Budget exceeded by $0.00",
      time: "2h ago",
      button: "goal",
    },
    {
      icon: "pi pi-exclamation-triangle text-black dark:text-white ",
      heading: "Entertainment",
      text: "B0% of budget used",
      time: "2h ago",
      button: "billing",
    },
    {
      icon: "pi pi-exclamation-triangle text-black  dark:text-white",
      heading: "Housing",
      text: "Budget exceeded by $0.00",
      time: "2h ago",
      button: "billing",
    },
    {
      icon: "pi pi-exclamation-triangle text-black  dark:text-white ",
      heading: "Housing",
      text: "Budget exceeded by $0.00",
      time: "2h ago",
      button: "billing",
    },
    {
      icon: "pi pi-exclamation-triangle  text-black dark:text-white ",
      heading: "Housing",
      text: "Budget exceeded by $0.00",
      time: "2h ago",
      button: "billing",
    },
    {
      icon: "pi pi-exclamation-triangle text-error ",
      heading: "Housing",
      text: "Budget exceeded by $0.00",
      time: "2h ago",
      button: "billing",
    },
    {
      icon: "pi pi-exclamation-triangle text-error ",
      heading: "Housing",
      text: "Budget exceeded by $0.00",
      time: "2h ago",
      button: "billing",
    },
  ];

  const [currentView, setCurrentView] = useState("All");

  const handleTabSwitch = (val: string) => {
    setCurrentView(val);
    console.log(val, "active");
  };

  return (
    <Card className="space-y-6 h-screen  md:max-h-[90vh] overflow-hidden  ">
      <div className="flex justify-between items-center">
        <p className="font-medium  text-lg space-x-1">
          <i className="pi pi-bell"></i> <span> Notifications</span>
        </p>

        <div className="flex text-sm  items-center gap-3">
          <Button variant="outline">
            <i className="pi pi-check"></i>
            Mark all read
          </Button>
          <i className="pi pi-cog"></i>
          <i
            className="pi pi-times cursor-pointer"
            onClick={setShowNotifcation(false)}
          ></i>
        </div>
      </div>

      <div className="w-full scroll-x-auto  ">
        <Tab
          className=""
          options={tabs}
          onChange={handleTabSwitch}
          defaultValue="All"
        ></Tab>
      </div>

      {currentView && (
        <div className="space-y-4 scroll-y-auto  max-h-[60vh]">
          {alerts.map((item, index) => (
            <NotifyCard card={item} key={index} />
          ))}
        </div>
      )}
    </Card>
  );
}
