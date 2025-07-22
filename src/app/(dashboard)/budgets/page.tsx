import Header from "@/components/dashboard/Header";
import React from "react";
import CardComponent from "../../../components/dashboard/CardComponent";
import Card from "@/components/base/Card";
import PlainCard from "@/components/dashboard/PlainCard";
import DetailCard from "@/components/dashboard/DetailCard";
import PieChart from "@/components/charts/PieChart";
import LineChart from "@/components/charts/LineChart";

export default function page() {
  const budgetHeader = {
    heading: "Budget Planning",
    text: "Set budgets, track spending, and achieve your financial goals",
    buttons: [
      {
        text: "View history ",
        icon: "pi pi-calendar",
        outline: true,
      },
      {
        text: "Add Budget",
        icon: "pi pi-plus",
      },
    ],
  };

  const cards = [
    {
      heading: "Total Budget",
      icon: "pi pi-bullseye",
      amount: 2700,
      subheading: "Monthly allocation",
      bg: "!bg-purple",
    },
    {
      heading: "Total Spent",
      icon: "pi pi-dollar",
      amount: 827,
      subheading: "94.8% of budget",
      bg: "!bg-warning",
    },
    {
      heading: "Remaining",
      icon: "pi pi-wallet",
      amount: 26,
      subheading: "Available to spend",
      bg: "!bg-green",
    },
    {
      heading: "Budget Health",
      icon: "pi pi-check",
      progress: { name: "Good" },
      subheading: "94.8% utilized",
      outline: true,
    },
  ];

  const alerts = [
    {
      button: "pi pi-exclamation-triangle text-error ",
      heading: "Housing",
      text: "Budget exceeded by $0.00",
      bg: "bg-transparent",
    },
    {
      button: "pi pi-exclamation-triangle text-black ",
      heading: "Entertainment",
      text: "B0% of budget used",
      bg: "bg-transparent",
    },
    {
      button: "pi pi-exclamation-triangle text-black ",
      heading: "Housing",
      text: "Budget exceeded by $0.00",
      bg: "bg-transparent",
    },
    {
      button: "pi pi-exclamation-triangle text-black  ",
      heading: "Housing",
      text: "Budget exceeded by $0.00",
      bg: "bg-transparent",
    },
    {
      button: "pi pi-exclamation-triangle  text-black ",
      heading: "Housing",
      text: "Budget exceeded by $0.00",
      bg: "bg-transparent",
    },
    {
      button: "pi pi-exclamation-triangle text-error ",
      heading: "Housing",
      text: "Budget exceeded by $0.00",
      bg: "bg-transparent",
    },
    {
      button: "pi pi-exclamation-triangle text-error ",
      heading: "Housing",
      text: "Budget exceeded by $0.00",
      bg: "bg-transparent",
    },
  ];

  const otherCards = [
    {
      icon: {
        name: "pi pi-credit-card text-primary",
        bg: "!bg-secondary",
      },
      heading: "Entertainment",
      subheading: "$180 of $200",

      button: "Near Limit",

      icon2: "pi pi-pen-to-square",
      progress: {
        name: "progress",
        range: "50% of $5,000",
      },
    },
    {
      icon: {
        name: "pi pi-credit-card text-primary",
        bg: "!bg-secondary",
      },
      heading: "Entertainment",
      subheading: "$180 of $200",

      button: "Near Limit",

      icon2: "pi pi-pen-to-square",
      progress: {
        name: "progress",
        range: "50% of $5,000",
      },
    },
    {
      icon: {
        name: "pi pi-credit-card text-primary",
        bg: "!bg-secondary",
      },
      heading: "Entertainment",
      subheading: "$180 of $200",

      button: "Near Limit",

      icon2: "pi pi-pen-to-square",
      progress: {
        name: "progress",
        range: "50% of $5,000",
      },
    },
    {
      icon: {
        name: "pi pi-credit-card text-primary",
        bg: "!bg-secondary",
      },
      heading: "Entertainment",
      subheading: "$180 of $200",

      button: "Near Limit",

      icon2: "pi pi-pen-to-square",
      progress: {
        name: "progress",
        range: "50% of $5,000",
      },
    },
  ];

  const lineChartData = {
    title: {
      name: "Budget vs Actual",
      subheading: "6-month spending trends comparison",
    },
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    data: [
      {
        name: "Budget",
        values: [300, 310, 302, 308, 320, 330, 340],
        color: "green",
      },
      {
        name: "Actual",
        values: [290, 300, 302, 308, 310, 320, 330],
        color: "#007BFF",
      },
    ],
  };

  const PieChartData = {
    title: {
      name: "Spending Distribution",
      subheading: "How you're spending your money this month",
    },
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

  return (
    <main className="space-y-8">
      <Header
        heading={budgetHeader.heading}
        text={budgetHeader.text}
        buttons={budgetHeader.buttons}
      />

      <div className="grid xl:grid-cols-4   lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {cards.map((card) => (
          <CardComponent key={card.heading} card={card} />
        ))}
      </div>

      {/* buddget alert */}
      <div className="space-y-6">
        <p className="font-semibold text-lg">Budget Alert</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {alerts.map((item, index) => (
            <PlainCard card={item} key={index} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherCards.map((item) => (
          <DetailCard detail={item} />
        ))}
      </div>

      {/* char */}
      <div className=" flex gap-6 lg:flex-row flex-col">
        <Card>
          <PieChart data={PieChartData.data} title={PieChartData.title} />
        </Card>
        <Card>
          <LineChart
            data={lineChartData.data}
            labels={lineChartData.labels}
            title={lineChartData.title}
          />
        </Card>
      </div>
    </main>
  );
}
