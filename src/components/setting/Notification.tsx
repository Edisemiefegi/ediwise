import React from "react";
import Card from "../base/Card";
import Switch from "../base/Switch";

export default function Notification() {
  const notify = [
    {
      label: "Receive notifications via email",
      heading: "Email Notifications",
      icon: "pi pi-envelope",
    },
    {
      label: "Receive push notifications on your devices",
      heading: "Push Notifications",
      icon: "pi pi-mobile",
    },
  ];

  const notifyType = [
    {
      label: "When you approach or exceed budget limits",
      heading: "Budget Alerts",
    },
    {
      label: "Progress updates on your financial goals",
      heading: "Goal Reminders",
    },
    {
      label: "Upcoming bill due dates",
      heading: "Bill Reminders",
    },
    {
      label: "Important security notifications",
      heading: "Security Alerts",
    },
    {
      label: "Product updates and financial tips",
      heading: "Marketing Emails",
    },
  ];

  return (
    <Card className="space-y-8">
      {/* notificaion preference */}
      <div className="space-y-1">
        <p className="font-bold text-2xl ">
          <i className="pi pi-bell mr-2"></i>Notification Preferences
        </p>
        <p className="text-gray text-sm">
          Choose how and when you want to be notified
        </p>
      </div>

      {/* email and push notification */}
      {notify.map((item) => (
        <div key={item.icon} className="space-y-8">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="font-medium text-lg space-x-1">
                <i className={  item.icon}></i>
              <span>  {item.heading}</span>
              </p>
              <p className="text-gray text-sm">{item.label}</p>
            </div>
            <Switch />
          </div>
          <hr className="text-gray-300" />
        </div>
      ))}

      {/* notification type*/}
      <div className="space-y-4">
        <p className="font-medium text-lg ">Change Password</p>

        {notifyType.map((item) => (
          <div key={item.heading}>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="font-medium text-lg ">{item.heading}</p>
                <p className="text-gray text-sm">{item.label}</p>
              </div>
              <Switch />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
