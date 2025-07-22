"use client";
import Header from "@/components/dashboard/Header";
import Tab from "@/components/base/Tab";
import React, { useState } from "react";
import CardComponent from "../../../components/dashboard/CardComponent";
import Overview from "@/components/dashboard/Reports/Overview";
import Analysis from "@/components/dashboard/Reports/Analysis";
import Trends from "@/components/dashboard/Reports/Trends";
import Ai from "@/components/dashboard/Reports/Ai";

export default function Page() {
  const reportHeader = {
    heading: "Reports & Insights",
    text: "Comprehensive financial analysis and AI-powered insights",
    buttons: [
      {
        text: "Export PDF",
        icon: "pi pi-download",
        outline: true,
      },
      {
        text: "Export CSV",
        icon: "pi pi-download",
      },
    ],
  };

  const tabs = [
    {
      label: "Overview",
      value: "Overview",
    },
    {
      label: "Spending Analysis",
      value: "Analysis",
    },
    {
      label: "Trends",
      value: "Trends",
    },
    {
      label: "AI Insight",
      value: "AIInsight",
    },
  ];

  const [currentView, setCurrentView] =  useState("Overview");

  const cards = [
    {
      heading: "Total Income",
      icon: "pi pi-wallet",
      amount: 127,
      subheading: "+2.1% from last month",
      bg: "!bg-purple",
    },
    {
      heading: "Total Expenses",
      icon: "pi pi-arrow-down-left",
      amount: 27,
      subheading: "+5.2% from last month",
      bg: "!bg-green",
    },
    {
      heading: "Net Savings",
      icon: "pi pi-arrow-down-left",
      amount: 26,
      subheading: "-3.1% from last month",
      bg: "!bg-warning",
    },
    {
      heading: "Investments",
      icon: "pi pi-bullseye",
      progress: {
        name: "30.2%",
      },
      subheading: "Target: 20%",
      outline: true,
    },
  ];

  const handleTabSwitch = (val: string) => {
    setCurrentView(val);
    console.log(val, "active");
  };
  return (
    <main className="space-y-8">
      <Header
        heading={reportHeader.heading}
        text={reportHeader.text}
        buttons={reportHeader.buttons}
      />

      <div className="grid xl:grid-cols-4    sm:grid-cols-2 grid-cols-1 gap-6">
        {cards.map((card) => (
          <CardComponent key={card.heading} card={card} />
        ))}
      </div>

      <div className="w-full scroll-x-auto  ">
        <Tab
          className=""
          options={tabs}
          onChange={handleTabSwitch}
          defaultValue="Overview"
        ></Tab>
      </div>

      <div>
        {currentView == "Overview" && <Overview />}
        {currentView == "Analysis" && <Analysis />}{" "}
        {currentView == "Trends" && <Trends />}{" "}
        {currentView == "AIInsight" && <Ai />}{" "}
      </div>
    </main>
  );
}
