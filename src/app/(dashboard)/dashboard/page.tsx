import Header from "@/components/dashboard/Header";
import React from "react";
import CardComponent from "../../../components/dashboard/CardComponent";
import Card from "@/components/base/Card";
import Transactions from "@/components/dashboard/Transactions";
import PieChart from "@/components/charts/PieChart";
import LineChart from "@/components/charts/LineChart";
import QuickActions from "@/components/dashboard/QuickActions";

export default function page() {
  const dashboardHeader = {
    heading: "Good afternoon, di! 👋",
    text: "Here's your financial overview for July 21, 2025",
    buttons: [
      {
        text: "Add transaction",
        icon: "pi pi-plus",
      },
      {
        text: "View Reports",
        icon: "pi pi-calendar",
        outline: true,
      },
    ],
  };

  const cards = [
    {
      heading: "Total Balance",
      icon: "pi pi-wallet",
      amount: 127,
      subheading: "+2.1% from last month",
      bg: "!bg-purple",
    },
    {
      heading: "Monthly Income",
      icon: "pi pi-arrow-down-left",
      amount: 27,
      subheading: "+5.2% from last month",
      bg: "!bg-green",
    },
    {
      heading: "Monthly Expenses",
      icon: "pi pi-arrow-down-left",
      amount: 26,
      subheading: "-3.1% from last month",
      bg: "!bg-warning",
    },
    {
      heading: "Savings Rate",
      icon: "pi pi-bullseye",
      progress: {
        name: "30.2%",
      },
      subheading: "Target: 20%",
      outline: true,
    },
  ];

  const history = [
    {
      button: "food ",
      heading: "Grocery Shopping",
      date: " Jan 15, 2024",
      amount: 74646,
    },
    {
      button: "icome",

      heading: "Salary Payment",
      date: " Jan 01, 2024",
      amount: 74646,
    },
    {
      button: "investment ",

      heading: "Grocery Shopping",
      date: " Jan 15, 2024",
      amount: 74646,
    },
    {
      button: "food ",

      heading: "Salary Payment",
      date: " Jan 01, 2024",
      amount: 74646,
    },
    {
      button: "food ",

      heading: "Grocery Shopping",
      date: " Jan 15, 2024",
      amount: 74646,
    },
    {
      button: "food ",

      heading: "Salary Payment",
      date: " Jan 01, 2024",

      amount: 74646,
    },
  ];
  const bills = {
    history: [
      {
        button: "food ",
        heading: "Grocery Shopping",
        date: " Jan 15, 2024",
        amount: 74646,
      },
      {
        button: "icome",

        heading: "Salary Payment",
        date: " Jan 01, 2024",
        amount: 74646,
      },
      {
        button: "investment ",

        heading: "Grocery Shopping",
        date: " Jan 15, 2024",
        amount: 74646,
      },
      {
        button: "food ",

        heading: "Salary Payment",
        date: " Jan 01, 2024",
        amount: 74646,
      },
      {
        button: "food ",

        heading: "Grocery Shopping",
        date: " Jan 15, 2024",
        amount: 74646,
      },
      {
        button: "food ",

        heading: "Salary Payment",
        date: " Jan 01, 2024",

        amount: 74646,
      },
    ],
    heading: "Upcoming Bills",
    icon: "pi-calendar",
    text: "Bills due in the next 7 days",
  };

  const lineChartData = {
    title: {
      name: "Income Vs Expenses",
      subheading: "Monthly comparison for the last 6 months",
    },
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    data: [
      {
        name: "Icome",
        values: [100, 200, 150, 300, 250, 400, 350],
        color: "green",
      },
      {
        name: "Expense",
        values: [50, 100, 150, 200, 250, 400, 350],
        color: "#FF6F61",
      },
    ],
  };

  const PieChartData = {
    title: {
      name: "Spending by Category",
      subheading: "Current month breakdown",
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
        heading={dashboardHeader.heading}
        text={dashboardHeader.text}
        buttons={dashboardHeader.buttons}
      />

      {/* cards  */}
      <div className="grid xl:grid-cols-4    sm:grid-cols-2 grid-cols-1 gap-6">
        {cards.map((card) => (
          <CardComponent key={card.heading} card={card} />
        ))}
      </div>

      {/* charts */}
      <div className=" flex gap-6 lg:flex-row flex-col">
        <Card>
          <LineChart
            data={lineChartData.data}
            labels={lineChartData.labels}
            title={lineChartData.title}
          />
        </Card>
        <Card>
          <PieChart data={PieChartData.data} title={PieChartData.title} />
        </Card>
      </div>

      {/* history */}
      <div className=" flex gap-6 lg:flex-row flex-col">
        <Transactions transactions={history} />
        <Transactions
          transactions={bills.history}
          heading={bills.heading}
          icon={bills.icon}
          text={bills.text}
          button="Manage Bills "
        />
      </div>

      {/* quick actions */}
      <div>
        <QuickActions />
      </div>
    </main>
  );
}
