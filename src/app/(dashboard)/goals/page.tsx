import Header from "@/components/dashboard/Header";
import React from "react";
import CardComponent from "../../../components/dashboard/CardComponent";
import Card from "@/components/base/Card";
import PlainCard from "@/components/dashboard/PlainCard";
import Button from "@/components/base/Button";
import DetailCard from "@/components/dashboard/DetailCard";
import PieChart from "@/components/charts/PieChart";
import LineChart from "@/components/charts/LineChart";

export default function page() {
  const goalHeader = {
    heading: "Goals & Savings",
    text: "Set financial goals and track your progress towards achieving them",
    buttons: [
      {
        text: "View Analytics",
        icon: "pi pi-arrow-right-up",
        outline: true,
      },
      {
        text: "Add Goal",
        icon: "pi pi-plus",
      },
    ],
  };

  const cards = [
    {
      heading: "Total Saved",
      icon: "pi pi-bullseye",
      amount: 127,
      subheading: "Across 5 goals",
      bg: "!bg-purple",
    },
    {
      heading: "Overall Progress",
      icon: "pi pi-arrow-down-left",
      progress: {},
      amount: 20,
      bg: "!bg-green",
    },
    {
      heading: "Monthly Savings",
      icon: "pi pi-dollar",
      amount: 26,
      subheading: "Automatic contributions",
      bg: "!bg-warning",
    },
    {
      heading: "Completed Goals",
      icon: "pi pi-check",
      amount: 0,
      subheading: "Out of 5 goals",
      outline: true,
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

  const accounts = [
    {
      button: "pi pi-check text-green ",
      heading: "Smart Auto-Save",
      text: "Automatically save spare change from transactions",
      bg: "!bg-green-100",
    },
    {
      button: "pi pi-calendar text-primary ",
      heading: "Scheduled Transfers",
      text: "Set up recurring transfers on payday",
      bg: "bg-secondary",
    },
  ];

  const lineChartData = {
    title: {
      name: "Savings Growth",
      subheading: "Total savings progress over time",
    },
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    data: [
      {
        name: "savings",
        values: [100, 210, 302, 308, 320, 330, 340],
        color: "green",
      },
    ],
  };

  const PieChartData = {
    title: {
      name: "Goal Distribution",
      subheading: "Current savings allocation by goal",
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
        heading={goalHeader.heading}
        text={goalHeader.text}
        buttons={goalHeader.buttons}
      />

      <div className="grid xl:grid-cols-4    sm:grid-cols-2 grid-cols-1 gap-6">
        {cards.map((card) => (
          <CardComponent key={card.heading} className="p-2" card={card} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherCards.map((item, index) => (
          <DetailCard detail={item} key={index} />
        ))}
      </div>

      {/* chart */}
      <div className=" flex gap-6 lg:flex-row flex-col">
        <Card>
          <LineChart
            data={lineChartData.data}
            labels={lineChartData.labels}
            title={lineChartData.title}
            series="areaStyle"
          />
        </Card>
        <Card>
          <PieChart data={PieChartData.data} title={PieChartData.title} />
        </Card>
      </div>

      <Card className="space-y-6">
        <div>
          <p className="font-medium text-2xl">Automated Savings</p>
          <p className="text-gray text-sm">
            Set up automatic transfers to reach your goals faster
          </p>
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accounts.map((account, index) => (
            <PlainCard key={index} card={account} />
          ))}
        </div>
        <div>
          <Button>
            <i className="pi pi-plus"></i> Set Up Auto-Save
          </Button>
        </div>
      </Card>
    </main>
  );
}
