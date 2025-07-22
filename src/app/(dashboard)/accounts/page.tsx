import Header from "@/components/dashboard/Header";
import React from "react";
import CardComponent from "../../../components/dashboard/CardComponent";
import Card from "@/components/base/Card";
import PlainCard from "@/components/dashboard/PlainCard";
import Button from "@/components/base/Button";
import DetailCard from "@/components/dashboard/DetailCard";

export default function page() {
  const accountHeader = {
    heading: "Accounts",
    text: "Manage your bank accounts and financial connections",
    buttons: [
      {
        text: "Hide Balances",
        icon: "pi pi-eye",
        outline: true,
      },
      {
        text: "Add Account",
        icon: "pi pi-plus",
      },
    ],
  };

  const cards = [
    {
      heading: "Total Assets",
      icon: "pi pi-arrow-up-right",
      amount: 27,
      subheading: "Across 3 accounts",
      bg: "!bg-green",
    },
    {
      heading: "Total Liabilities",
      icon: "pi pi-arrow-down-left",
      amount: 27,
      subheading: "Across 3 accounts",
      bg: "!bg-warning",
    },
    {
      heading: "Net Worth",
      icon: "pi pi-wallet",
      amount: 26,
      subheading: "Assets minus liabilities",
      bg: "!bg-purple",
    },
  ];

  const otherCards = [
    {
      icon: { name: "pi pi-credit-card", bg: "!bg-primary" },
      heading: "Primary Checking",
      subheading: "Chase Bank • ****1234",
      text: "Balance",
      amount: 33450,
      button: "connected",
      date: "Updated 1/15/2024",
      icon2: "pi pi-ellipsis-h",
      icon3: "pi pi-cog",
    },
    {
      icon: { name: "pi pi-credit-card", bg: "!bg-purple" },
      heading: "Emergency Savings",
      subheading: "Chase Bank • ****1234",
      text: "Balance",
      amount: 33450,
      button: "connected",
      date: "Updated 1/15/2024",
      icon2: "pi pi-ellipsis-h",
      icon3: "pi pi-cog",
    },
    {
      icon: { name: "pi pi-credit-card", bg: "!bg-warning" },
      heading: "Credit Card",
      subheading: "Chase Bank • ****1234",
      text: "Balance",
      amount: 34507,
      button: "connected",
      date: "Updated 1/15/2024",
      icon2: "pi pi-ellipsis-h",
      icon3: "pi pi-cog",
    },
    {
      icon: { name: "pi pi-credit-card", bg: "!bg-green" },
      heading: "Investment Portfolio",
      subheading: "Chase Bank • ****1234",
      text: "Balance",
      amount: 34507,
      button: "connected",
      date: "Updated 1/15/2024",
      icon2: "pi pi-ellipsis-h",
      icon3: "pi pi-cog",
      progress: {
        name: "Credit Utilization",
        range: "50% of $5,000",
      },
    },
  ];

  const accounts = [
    {
      button: "pi pi-receipt text-primary ",
      heading: "Bank-level Security ",
      text: "Your data is encrypted and protected",
      bg: "bg-secondary",
    },
    {
      button: "pi pi-arrow-up-right text-primary ",
      heading: "Real-time Updates",
      text: "Transactions sync automatically",
      bg: "bg-secondary",
    },
  ];

  return (
    <main className="space-y-8">
      <Header
        heading={accountHeader.heading}
        text={accountHeader.text}
        buttons={accountHeader.buttons}
      />

      {/* cards  */}
      <div className="grid lg:grid-cols-3   md:grid-cols-2 grid-cols-1 gap-8">
        {cards.map((card) => (
          <CardComponent key={card.heading} card={card} />
        ))}
      </div>

      {/* other cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherCards.map((item, index) => (
          <DetailCard key={index} detail={item} />
        ))}
      </div>

      {/*connect your account   */}
      <Card className="space-y-6">
        <div>
          <p className="font-medium text-2xl">Connect Your Accounts</p>
          <p className="text-gray text-sm">
            Securely connect your bank accounts for automatic transaction
            syncing
          </p>
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accounts.map((account) => (
            <PlainCard key={account.heading} card={account} />
          ))}
        </div>
        <div>
          <Button>
            <i className="pi pi-plus"></i> Connect New Bank Account
          </Button>
        </div>
      </Card>
    </main>
  );
}
