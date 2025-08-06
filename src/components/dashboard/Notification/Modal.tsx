"use client";

import React, { useState } from "react";
import Card from "@/components/base/Card";
import Button from "@/components/base/Button";
import Tab from "@/components/base/Tab";
import NotifyCard from "@/components/dashboard/Notification/Card";
import ModalComponent from "@/components/base/Modal";

interface Props {
  setShowNotification: any;
}

export default function Modal({ setShowNotification }: Props) {
  const header = { heading: "Notifications", icon: "pi pi-bell" };

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

  const handleclose = () => {
    setShowNotification(false)
  }

  return (
    <ModalComponent fullScreen header={header} onClose={handleclose}>
      <div className="space-y-4  ">
        <div className="flex sticky text-sm justify-between   items-center gap-3">
          <Button variant="outline">
            <i className="pi pi-check"></i>
            Mark all read
          </Button>
          <i className="pi pi-cog"></i>
        </div>

        <div className="w-full scroll-x-auto  sticky ">
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
      </div>
    </ModalComponent>
  );
}
