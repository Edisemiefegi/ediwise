"use client";

import React, { useEffect, useState, useMemo } from "react";
import Header from "@/components/dashboard/Header";
import PlainCard from "@/components/dashboard/PlainCard";
import CardComponent from "@/components/dashboard/CardComponent";
import Card from "@/components/base/Card";
import Input from "@/components/base/Input";
import Select from "@/components/base/Select";
import useUser from "@/hooks/useUser";
import { Calendar } from "primereact/calendar";
import Pagination from "@/components/base/Pagination";
import { exportTransactionsToPDF } from "../../../../utilities/exportPdf";
import AddTransaction from "@/components/dashboard/AddTransaction"

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [userAccounts, setUserAccounts] = useState<any[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);

  const { getUserAccounts, getUserTransactions } = useUser();

  const [filterValues, setFilterValues] = useState({
    search: "",
    category: "All Categories",
    account: "All Accounts",
    date: null,
  });
  const date = filterValues.date;

  const ITEMS_PER_PAGE = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const filteredTransactions = transactions.filter((transaction) => {
    const { search, category, account, date } = filterValues;

    const categoryMatch =
      category === "All Categories" ||
      category === "" ||
      category === transaction.category;

    const accountMatch =
      account === "All Accounts" ||
      account === "" ||
      account === transaction.account;

    const searchMatch =
      !search ||
      transaction.description.toLowerCase().includes(search.toLowerCase()) ||
      transaction.account.toLowerCase().includes(search.toLowerCase());

    const dateMatch =
      !date ||
      new Date(transaction.createdAt).toDateString() ===
        new Date(date).toDateString();

    return categoryMatch && accountMatch && searchMatch && dateMatch;
  });

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);

  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const dateTemplate = (date: any) => {
    if (date.day > 10 && date.day < 15) {
      return <strong style={{ textDecoration: "none" }}>{date.day}</strong>;
    }

    return date.day;
  };

  // Fetch accounts and transactions
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [accounts, transactionsData] = await Promise.all([
          getUserAccounts(),
          getUserTransactions(),
        ]);
        setUserAccounts(accounts);
        setTransactions(transactionsData);
      } catch (err) {
        console.error("Failed to fetch accounts or transactions", err);
      }
    };

    fetchData();
  }, [getUserAccounts, getUserTransactions]);

  const currentMonthStats = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth(); // 0-based
    const currentYear = now.getFullYear();

    let income = 0;
    let expense = 0;

    transactions.forEach((tx) => {
      const txDate = new Date(tx.createdAt);

      const isSameMonth =
        txDate.getMonth() === currentMonth &&
        txDate.getFullYear() === currentYear;

      if (isSameMonth) {
        if (tx.acctType === "Income") income += tx.amount;
        else if (tx.acctType === "Expense") expense += tx.amount;
      }
    });

    const netWorth = income - expense;

    return { income, expense, netWorth };
  }, [transactions]);

  const filters = [
    {
      type: "input",
      placeholder: "Search transactions...",
      icon: <i className="pi pi-search" />,
    },
    {
      value: filterValues.category,
      name: "category",
      type: "select",
      options: [
        "All Categories",
        "Shopping",
        "Entertainment",
        "Bills & Utilities",
        "Food & Dining",
        "Travel",
        "Health & Fitness",
        "Education",
        "Other",
      ],
    },
    {
      value: filterValues.account,
      name: "account",
      type: "select",
      options: [
        "All Accounts",
        ...userAccounts.map((account) => account.acctName),
      ],
    },
    {
      type: "date",
    },
  ];

  const transactionHeader = {
    heading: "Transactions",
    text: "Manage and track all your financial transactions",
    buttons: [
      {
        text: "Export",
        icon: "pi pi-download",
        outline: true,
        onclick: () => exportTransactionsToPDF(filteredTransactions),
      },
      {
        text: "Add Transaction",
        icon: "pi pi-plus",
        onclick: () => setShowModal(true),
      },
    ],
  };

  // total income, expense and networth card
  const cards = [
    {
      heading: "Total Income",
      icon: "pi pi-arrow-down-left",
      amount: currentMonthStats.income,
      outline: true,
      subheading: "This month",
      padding: "p-3",
    },
    {
      heading: "Total Expenses",
      expense: "Expense",
      icon: "pi pi-arrow-up-right",
      amount: currentMonthStats.expense,
      outline: true,
      subheading: "This month",
      padding: "p-3",
    },
    {
      heading: "Net Worth",
      icon: "pi pi-wallet",
      amount: currentMonthStats.netWorth,
      outline: true,
      subheading: "This month",
      padding: "p-3",
    },
  ]; 




  return (
    <main className="space-y-8">
      <Header {...transactionHeader} />

      {/* total income, expense, and networth  Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <CardComponent key={card.heading} card={card} className="!p-1" />
        ))}
      </div>

      {/* Add Transaction Modal */}
      {showModal && (
        <AddTransaction setShowModal={setShowModal} />
       
      )}

      {/* Filters */}
      <Card className="space-y-4 relative ">
        <p className="font-semibold text-xl">Filters</p>
        <div className="grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {filters.map((item, index) => (
            <div key={index}>
              {item.type === "input" && (
                <Input
                  value={filterValues.search}
                  onChange={(e) =>
                    setFilterValues((prev) => ({
                      ...prev,
                      search: e.target.value,
                    }))
                  }
                  placeholder={item.placeholder}
                  prepend={item.icon}
                />
              )}
              {item.type === "select" && (
                <Select
                  className="text-sm"
                  options={item.options}
                  value={item.value}
                  name={item.name}
                  onChange={(e) =>
                    setFilterValues((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              )}
              {item.type === "date" && (
                <div className="w-fit border-gray-300  dark:border-gray-800 font-normal border text-xs sm:text-sm rounded-lg py-2.5 px-2.5 sm:px-4 sm:py-2">
                  <Calendar
                    value={date}
                    onChange={(e: any) =>
                      setFilterValues((prev) => ({
                        ...prev,
                        date: e.value,
                      }))
                    }
                    dateTemplate={dateTemplate}
                    showIcon
                    inputClassName="w-full outline-none"
                    panelClassName="shadow-md rounded-lg absolute top-3 right-3    border-gray-400  bg-white p-8  !w-10/12  md:!w-3/6"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Transactions */}
      <Card className="space-y-6">
        <div>
          <p className="font-semibold text-2xl">Recent Transactions</p>
          <p className="text-gray text-sm">
            Showing {paginatedTransactions.length} of{" "}
            {filteredTransactions.length} transactions
          </p>
        </div>
        <div className="space-y-3">
          {paginatedTransactions.length === 0 ? (
            <p className="text-center text-gray-500">No transactions found.</p>
          ) : (
            paginatedTransactions.map((item, index) => {
              const transactionData = {
                button:
                  item.acctType === "Expense"
                    ? "pi pi-arrow-down-left text-error"
                    : "pi pi-arrow-up-right text-green",
                heading: item.description,
                text: `${item.description} • ${item.category} • ${
                  item.account
                } • ${new Date(item.createdAt).toLocaleDateString()}`,
                bg: "bg-secondary",
                action: {
                  completed: "completed",
                  amount: item.amount,
                },
                expense: item.acctType,
              };
              return <PlainCard key={index} card={transactionData} />;
            })
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Card>
    </main>
  );
}
