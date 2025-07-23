"use client";

import Header from "@/components/dashboard/Header";
import PlainCard from "@/components/dashboard/PlainCard";
import CardComponent from "../../../components/dashboard/CardComponent";
import React from "react";
import Card from "@/components/base/Card";
import Input from "@/components/base/Input";
import Select from "@/components/base/Select";
import Button from "@/components/base/Button";

export default function page() {
  const transactionHeader = {
    heading: "Transactions",
    text: "Manage and track all your financial transactions",
    buttons: [
      {
        text: "Export",
        icon: "pi pi-download",
        outline: true,
      },
      {
        text: "Add Transaction",
        icon: "pi pi-plus",
      },
    ],
  };

  const cards = [
    {
      heading: "Total Income",
      icon: "pi pi-arrow-down-left ",
      amount: 5000,
      outline: true,
      subheading: "This month",
      padding: "p-3",
    },
    {
      heading: "Total Expenses",
      icon: "pi pi-arrow-up-right",
      amount: 1635,
      outline: true,

      subheading: "This month",
      padding: "p-3",
    },
    {
      heading: "Net Worth",
      icon: "pi pi-arrow-up-right",
      amount: 2699,
      outline: true,
      subheading: "This month",
      padding: "p-3",
    },
  ];

  const filters = [
    {
      type: "input",
      placeholder: "Search transactions...",
      icon: <i className="pi pi-search"></i>,
    },
    {
      type: "select",
      options: ["All Categories", "Food", "School", "Housing"],
    },
    {
      type: "select",
      options: ["All Accounts", "Savings", "Credit Card", "Investment Account"],
    },
    {
      type: "date",
    },
  ];

  const history = [
    {
      button: "pi pi-arrow-down-left text-green ",
      heading: "Grocery Shopping",
      text: "Food & Dining • Chase Checking • Jan 15, 2024",
      bg: "bg-secondary",
      action: {
        completed: "completed",
        amount: 57689,
      },
    },
    {
      button: "pi pi-arrow-up-right text-error ",
      heading: "Salary Payment",
      text: "Salary • Chase Checking • Jan 01, 2024",
      bg: "bg-secondary",
      action: {
        completed: "completed",
        amount: 57689,
      },
    },
    {
      button: "pi pi-arrow-down-left text-green ",
      heading: "Grocery Shopping",
      text: "Food & Dining • Chase Checking • Jan 15, 2024",
      bg: "bg-secondary",
      action: {
        completed: "completed",
        amount: 57689,
      },
    },
    {
      button: "pi pi-arrow-up-right text-error ",
      heading: "Salary Payment",
      text: "Salary • Chase Checking • Jan 01, 2024",
      bg: "bg-secondary",
      action: {
        completed: "completed",
        amount: 57689,
      },
    },
    {
      button: "pi pi-arrow-down-left text-green ",
      heading: "Grocery Shopping",
      text: "Food & Dining • Chase Checking • Jan 15, 2024",
      bg: "bg-secondary",
      action: {
        completed: "pending",
        amount: 57689,
      },
    },
    {
      button: "pi pi-arrow-up-right text-error ",
      heading: "Salary Payment",
      text: "Salary • Chase Checking • Jan 01, 2024",
      bg: "bg-secondary",
      action: {
        completed: "pending",
        amount: 57689,
      },
    },
  ];

  return (
    <main className="space-y-8">
      <Header
        heading={transactionHeader.heading}
        text={transactionHeader.text}
        buttons={transactionHeader.buttons}
      />

      <div className="grid lg:grid-cols-3   md:grid-cols-2 grid-cols-1 gap-8">
        {cards.map((card) => (
          <CardComponent className="!p-1" key={card.heading} card={card} />
        ))}
      </div>

      {/* filters */}
      <Card className="space-y-4 ">
        <p className="font-semibold text-xl">Filters</p>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  w-full">
          {filters.map((item, index) => (
            <div key={index}>
              {item.type == "input" && (
                <div>
                  <Input  placeholder={item.placeholder} prepend={item.icon} />
                </div>
              )}
              {item.type == "select" && (
                <Select className="text-sm " options={item.options} />
              )}
              {item.type == "date" && (
              <div>
                  <Button variant="outline"  className="font-normal !py-2.5 !px-2.5 sm:px-4 sm:py-2  !rounded-lg  w-full  !text-xs sm:!text-sm" >
                  <i className="pi pi-calendar"></i> Pick a date range
                </Button>
              </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* recent transactions  */}
      <Card className="space-y-6">
        <div>
          <p className="font-semibold text-2xl">Recent Transactions</p>
          <p className="text-gray text-sm">Showing 5 of 5 transactions</p>
        </div>{" "}
        <div className="space-y-3">
          {history.map((item, index) => (
            <PlainCard key={index} card={item}  />
          ))}
        </div>
      </Card>
    </main>
  );
}
