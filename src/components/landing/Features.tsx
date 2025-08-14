"use client";

import React, { useState } from "react";
import Button from "../base/Button";
import Card from "../base/Card";
import Tab from "../base/Tab";
import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
import { useRouter } from "next/navigation";

export default function Features() {
  const router = useRouter();

  const tabs = [
    {
      label: "Overview",
      value: "Overview",
    },
    {
      label: "Spending",
      value: "Spending",
    },
  ];

  const [currentView, setCurrentView] = useState("Overview");

  const handleTabSwitch = (val: string) => {
    setCurrentView(val);
    console.log(val, "active");
  };

  const lineChartData = {
    labels: ["jan", "feb", "march", "april", "may"],
    data: [
      {
        name: "Icome",
        values: [1600, 1000, 1700, 1700, 1800],
        color: "green",
      },
    ],
  };

  const PieChartData = {
    data: [
      {
        name: " Food",
        value: 40,
      },
      {
        name: "Housing",
        value: 30,
      },
      {
        name: "Transport",
        value: 10,
      },
      {
        name: "Others",
        value: 20,
      },
    ],
  };

  const balance = [
    {
      amount: "$12,456",
      text: "Total Balance",
      light: "#DCFCE7",
      dark: "#14532D",
    },
    {
      amount: "+$1,656",
      text: "This Month",
      light: "#DBEAFE",
      dark: "#1E3A8A",
    },
  ];

  return (
    <main className="max-h-screen  dark:bg-gray-950 dark:text-white h-fit bg-sky-100/10 pt-20  ">
      <div className=" container w-10/12 mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="space-y-4">
          <h1 className="font-bold text-4xl lg:text-6xl">
            Take Control of Your{" "}
            <span className="text-primary ">Financial Future</span>
          </h1>
          <p className="text-gray text-lg">
            The modern way to manage your money. Track expenses, set goals, and
            build wealth with our intelligent financial platform.
          </p>
          <div className="w-full md:w-fit">
            <Button
              className="w-full"
              onClick={() => router.push("/auth/signup")}
            >
              {" "}
              Start Free Trial
            </Button>
          </div>{" "}
          <div className="flex gap-5">
            <div>
              {Array.from({ length: 4 }).map((_, index) => (
                <Button
                  key={index}
                  rounded
                  className="!bg-blue-100 !py-2 !px-2 -ml-2 opacity-50 border-2 border-white"
                >
                  <i className="pi pi-user text-primary"></i>
                </Button>
              ))}
            </div>
            <div>
              <div className="space-x-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <i key={index} className="pi pi-star text-warning"></i>
                ))}
              </div>

              <p className="text-sm text-gray">Trusted by 50,000+ users</p>
            </div>
          </div>
        </div>

        <Card className="space-y-4 !shadow-2xl">
          <div>
            <h1 className="font-medium text-lg">
              <i className="pi pi-chart-line text-green"></i> Financial Overview
            </h1>
            <p className="text-sm text-gray">
              Your money, visualized beautifully
            </p>
          </div>
          <Tab
            options={tabs}
            onChange={handleTabSwitch}
            defaultValue="Overview"
          />

          <div>
            {currentView == "Overview" && (
              <div className="">
                <div className="grid grid-cols-2 gap-4 ">
                  {balance.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: item.light,
                        color: item.dark,
                      }}
                      className="py-4 rounded-md flex flex-col items-center justify-center"
                    >
                      <p className="text-lg font-medium">{item.amount}</p>
                      <p className="text-xs">{item.text}</p>
                    </div>
                  ))}
                </div>
                <LineChart
                  data={lineChartData.data}
                  labels={lineChartData.labels}
                />
              </div>
            )}
            {currentView == "Spending" && (
              <div>
                <PieChart data={PieChartData.data} />
              </div>
            )}{" "}
          </div>
        </Card>
      </div>
    </main>
  );
}
