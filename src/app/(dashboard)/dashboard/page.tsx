"use client";

import Header from "@/components/dashboard/Header";
import React, { useEffect, useState } from "react";
import CardComponent from "../../../components/dashboard/CardComponent";
import Card from "@/components/base/Card";
import Transactions from "@/components/dashboard/Transactions";
import PieChart from "@/components/charts/PieChart";
import LineChart from "@/components/charts/LineChart";
import QuickActions from "@/components/dashboard/QuickActions";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/useUser";

import AddTransaction from "@/components/dashboard/AddTransaction";

export default function Page() {
  const router = useRouter();
  const { user, getUserTransactions, } = useUser();
  const [transactions, setTransactions] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [totalBalance, setTotalBalance] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [monthlyExpense, setMonthlyExpense] = useState(0);
  const [incomeVsExpense, setIncomeVsExpense] = useState<any[]>([]);

  const dashboardHeader = {
    heading: `Good day, ${user?.name} 👋`,
    text: "Here's your financial overview for July 21, 2025",
    buttons: [
      {
        text: "Add transaction",
        icon: "pi pi-plus",
        onclick: () => setShowModal(true),
      },
      {
        text: "View Reports",
        icon: "pi pi-calendar",
        outline: true,
        onclick: () => router.push("/reports"),
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [transactionsData] = await Promise.all([getUserTransactions()]);
        setTransactions(transactionsData.slice(0, 5));
      } catch (err) {
        console.error("Failed to fetch accounts or transactions", err);
      }
    };

    fetchData();
  }, [getUserTransactions]);

  const history = {
    btn: {
      text: "View All",
      onclick: () => router.push("/transactions"),
    },
    transaction: transactions,
  };
  const bills = {
    button: { text: "Manage Bills ", onclick: () => router.push("/budgets") },
    history: [
      {
        category: "food ",
        description: "Grocery Shopping",
        createdAt: " Jan 15, 2024",
        amount: 74646,
      },
      {
        category: "icome",

        description: "Salary Payment",
        createdAt: " Jan 01, 2024",
        amount: 74646,
      },
      {
        category: "investment ",

        description: "Grocery Shopping",
        createdAt: " Jan 15, 2024",
        amount: 74646,
      },
      {
        category: "food ",

        description: "Salary Payment",
        createdAt: " Jan 01, 2024",
        amount: 74646,
      },
      {
        category: "food ",

        description: "Grocery Shopping",
        createdAt: " Jan 15, 2024",
        amount: 74646,
      },
      {
        category: "food ",

        description: "Salary Payment",
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
    labels: incomeVsExpense.map((d) => d.month),
    data: [
      {
        name: "Icome",
        values: incomeVsExpense.map((d) => d.income),
        color: "green",
      },
      {
        name: "Expense",
        values: incomeVsExpense.map((d) => d.expense),
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

  useEffect(() => {
    if (!transactions.length) return;

    let balance = 0;
    let income = 0;
    let expense = 0;
    const currentMonth = new Date().getMonth();
    const now = new Date();

    const incomeExpenseByMonth = Array(6)
      .fill(0)
      .map((_, index) => ({
        month: new Date(
          now.getFullYear(),
          currentMonth - (5 - index),
          1
        ).toLocaleString("default", { month: "long" }),
        income: 0,
        expense: 0,
      }));

    transactions.forEach((tx) => {
      const date = new Date(tx.createdAt || tx.createdAt);
      const monthIndex =
        now.getMonth() -
        (5 -
          incomeExpenseByMonth.findIndex(
            (m) => m.month === date.toLocaleString("default", { month: "long" })
          ));

      if (tx.category.toLowerCase().includes("income")) {
        balance += tx.amount;
        if (date.getMonth() === currentMonth) income += tx.amount;
        if (monthIndex >= 0 && monthIndex < 6)
          incomeExpenseByMonth[monthIndex].income += tx.amount;
      } else {
        balance -= tx.amount;
        if (date.getMonth() === currentMonth) expense += tx.amount;
        if (monthIndex >= 0 && monthIndex < 6)
          incomeExpenseByMonth[monthIndex].expense += tx.amount;
      }
    });

    setTotalBalance(balance);
    setMonthlyIncome(income);
    setMonthlyExpense(expense);
    setIncomeVsExpense(incomeExpenseByMonth);
  }, [transactions]);

  const cards = [
    {
      heading: "Total Balance",
      icon: "pi pi-wallet",
      amount: totalBalance,
      subheading: "+2.1% from last month",
      bg: "!bg-purple",
    },
    {
      heading: "Monthly Income",
      icon: "pi pi-arrow-down-left",
      amount: monthlyIncome,
      subheading: "+5.2% from last month",
      bg: "!bg-green",
    },
    {
      heading: "Monthly Expenses",
      icon: "pi pi-arrow-down-left",
      amount: monthlyExpense,
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

  return (
    <main className="space-y-8">
      <Header
        heading={dashboardHeader.heading}
        text={dashboardHeader.text}
        buttons={dashboardHeader.buttons}
      />

      {/* Add Transaction Modal */}
      {showModal && <AddTransaction setShowModal={setShowModal} />}

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
        <Transactions transactions={history.transaction} button={history.btn} />
        <Transactions
          transactions={bills.history}
          heading={bills.heading}
          icon={bills.icon}
          text={bills.text}
          button={bills.button}
        />
      </div>

      {/* quick actions */}
      <div>
        <QuickActions />
      </div>
    </main>
  );
}
