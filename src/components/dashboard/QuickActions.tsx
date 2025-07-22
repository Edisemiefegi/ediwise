import React from "react";
import Card from "../base/Card";
import Button from "../base/Button";

export default function QuickActions() {
  const buttons = [
    {
      icon: "pi pi-plus",
      name: "Add Income",
    },
    {
      icon: "pi pi-credit-card",
      name: "Add Expense",
    },
    {
      icon: "pi pi-bullseye",
      name: "Set Budget",
    },
    {
      icon: "pi pi-wallet",
      name: "Transfer Funds",
    },
  ];

  return (
    <Card>
      <h1 className="font-semibold text-xl ">Quick Actions</h1>
      <p className="text-gray mb-6 mt-1">Manage your finances efficiently</p>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full">
        {buttons.map((btn) => (
        <div className="w-full"  key={btn.name}>
          <Button variant="outline" className="flex w-full py-5 !flex-col">
            <i className={btn.icon}></i> <span>{btn.name}</span>
          </Button>
        </div>
      ))}
      </div>
    </Card>
  );
}
