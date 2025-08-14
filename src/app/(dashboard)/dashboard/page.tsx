"use client";

import Header from "@/components/dashboard/Header";
import React, { useEffect, useState } from "react";
import CardComponent from "../../../components/dashboard/CardComponent";
import Card from "@/components/base/Card";
import Transactions from "@/components/dashboard/Transactions";
import PieChart from "@/components/charts/PieChart";
import LineChart from "@/components/charts/LineChart";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/useUser";
import Button from "@/components/base/Button";

import AddTransaction from "@/components/dashboard/AddTransaction";

export default function Page() {
  const router = useRouter();
  const { user, getUserTransactions } = useUser();
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
    if (!transactions || transactions.length === 0) return;

    let balance = 0;
    let income = 0;
    let expense = 0;
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    // Prepare last 6 months data
    const incomeExpenseByMonth = Array.from({ length: 6 }, (_, i) => {
      const date = new Date(currentYear, currentMonth - (5 - i), 1);
      return {
        month: date.toLocaleString("default", { month: "long" }),
        year: date.getFullYear(),
        income: 0,
        expense: 0,
      };
    });

    transactions.forEach((tx) => {
      const date = new Date(tx.createdAt);
      const txMonth = date.getMonth();
      const txYear = date.getFullYear();

      // Adjust balance
      if (tx.acctType === "Income") {
        balance += tx.amount;
        if (txMonth === currentMonth && txYear === currentYear)
          income += tx.amount;
      } else {
        balance -= tx.amount;
        if (txMonth === currentMonth && txYear === currentYear)
          expense += tx.amount;
      }

      // Find matching month in the array
      const monthObj = incomeExpenseByMonth.find(
        (m) =>
          m.month === date.toLocaleString("default", { month: "long" }) &&
          m.year === txYear
      );

      if (monthObj) {
        if (tx.acctType === "Income") {
          monthObj.income += tx.amount;
        } else {
          monthObj.expense += tx.amount;
        }
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

  const quickButtons = [
    {
      icon: "pi pi-plus",
      name: "Add Income",
      onclick: () => setShowModal(true),
    },
    {
      icon: "pi pi-credit-card",
      name: "Add Expense",
      onclick: () => setShowModal(true),
    },
    {
      icon: "pi pi-bullseye",
      name: "Set Budget",
      onclick: () => router.push("/budgets"),
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
          {lineChartData.data.every(
            (dataset) => dataset.values.length === 0
          ) ? (
            <div>
              <div>
                {" "}
                <h2 className="text-xl font-bold">{lineChartData.title.name}</h2>
                <p className="text-sm text-gray">{lineChartData.title.subheading}</p>
              </div>{" "}
              <p className="pt-10 text-gray">Not enough data yet..</p>
            </div>
          ) : (
            <LineChart
              data={lineChartData.data}
              labels={lineChartData.labels}
              title={lineChartData.title}
            />
          )}
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
        <Card>
          <h1 className="font-semibold text-xl ">Quick Actions</h1>
          <p className="text-gray mb-6 mt-1">
            Manage your finances efficiently
          </p>
          <div className="grid gap-5  md:grid-cols-3 grid-cols-2 w-full">
            {quickButtons.map((btn) => (
              <div className="w-full" key={btn.name}>
                <Button
                  variant="outline"
                  onClick={btn.onclick}
                  className="flex w-full py-5 !px-2  !flex-col"
                >
                  <i className={btn.icon}></i> <span>{btn.name}</span>
                </Button>
              </div>
            ))}
          </div>
        </Card>{" "}
      </div>
    </main>
  );
}
