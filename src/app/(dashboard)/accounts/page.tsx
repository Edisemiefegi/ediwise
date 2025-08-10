"use client";

import Header from "@/components/dashboard/Header";
import React, { useEffect, useState } from "react";
import CardComponent from "../../../components/dashboard/CardComponent";
import Card from "@/components/base/Card";
import PlainCard from "@/components/dashboard/PlainCard";
import Button from "@/components/base/Button";
import DetailCard from "@/components/dashboard/DetailCard";
import useUser from "@/hooks/useUser";
import { toast } from "react-toastify";
import Form, { InputField } from "@/components/base/Form";

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const { getUserAccounts, addAccount, toggleHideBalance, user } = useUser();
  const [userAccounts, setUserAccounts] = useState<any[]>([]);
  const [hidebalences, setHideBalances] = useState(false);

  useEffect(() => {
    if (user?.hideBalance !== undefined) {
      setHideBalances(user.hideBalance);
    }
  }, [user]);

  const accountHeader = {
    heading: "Accounts",
    text: "Manage your bank accounts and financial connections",
    buttons: [
      {
        text: hidebalences ? "Hide Balances" : "Show Balances",
        icon: hidebalences ? "pi pi-eye-slash" : "pi pi-eye",
        outline: true,
        onclick: async () =>
          await toggleHideBalance(hidebalences, setHideBalances),
      },
      {
        text: "Add Account",
        icon: "pi pi-plus",
        onclick: () => setShowModal(true),
      },
    ],
  };

  const asssts = userAccounts.filter((acct) => acct.acctType !== "Credit Card");
  const liabilities = userAccounts.filter(
    (acct) => acct.acctType == "Credit Card"
  );

  const totalAssets = asssts.reduce(
    (acc, curr) => acc + parseFloat(curr.balance || "0"),
    0
  );
  const totalLiabilities = liabilities.reduce(
    (acc, curr) => acc + parseFloat(curr.balance || "0"),
    0
  );
  const netWorth = totalAssets - totalLiabilities;

  useEffect(() => {
    const fetchAccounts = async () => {
      const accounts = await getUserAccounts();
      setUserAccounts(accounts);
    };
    fetchAccounts();
  }, [userAccounts, getUserAccounts]);

  // total assests, liabilities and networth card
  const cards = [
    {
      heading: "Total Assets",
      amount: hidebalences ? totalAssets : "****",
      icon: "pi pi-arrow-up-right",
      subheading: `Across  ${asssts.length} accounts`,
      bg: "!bg-green",
    },
    {
      heading: "Total Liabilities",
      icon: "pi pi-arrow-down-left",
      amount: hidebalences ? totalLiabilities : "****",
      subheading: `Across  ${liabilities.length} accounts`,
      bg: "!bg-warning",
    },
    {
      heading: "Net Worth",
      icon: "pi pi-wallet",
      amount: hidebalences ? netWorth : "****",
      subheading: "Assets minus liabilities",
      bg: "!bg-purple",
    },
  ];

  // connect your account card
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

  const inputFields: InputField[] = [
    {
      label: "Account Name",
      type: "text",
      placeholder: "e.g Primary Checking",
      inputType: "input",
      name: "acctName",
    },
    {
      placeholder: "Select account type",
      label: "Account Type",
      option: [
        "Chase Checking",
        "Savings Account",
        "Current Account",
        "Credit Card",
      ],
      name: "acctType",
      inputType: "select",
    },
    {
      label: "Bank Name",
      type: "text",
      name: "bankName",
      placeholder: "e.g Chase Bank",
      inputType: "input",
    },
    {
      label: "Current Balance",
      type: "number",
      name: "balance",
      placeholder: "0.00",
      inputType: "input",
    },
  ];

  type FormValues = {
    acctName: string;
    acctType: string;
    bankName: string;
    balance: number;
  };

  const initialValues: FormValues = {
    acctName: "",
    acctType: "",
    bankName: "",
    balance: 0,
  };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.acctName) errors.acctName = "Required";
    if (!values.acctType) errors.acctType = "Required";
    if (!values.bankName) errors.bankName = "Required";
    return errors;
  };

  const onSubmit = async (values: FormValues) => {
    try {
      await addAccount(values);
      toast.success("Account added successfully");
      setShowModal(false);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An error occurred";
      toast.error(message);
    }
  };

  return (
    <main className="space-y-8 ">
      <Header
        heading={accountHeader.heading}
        text={accountHeader.text}
        buttons={accountHeader.buttons}
      />

      {/*add account form modal */}
      {showModal && (
        <Form<FormValues>
          modalHeader={{
            heading: "Add New Account",
            text: "Connect a new bank account or add one manually",
          }}
          inputFields={inputFields}
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
          buttonText="Add Account"
          onClose={() => setShowModal(false)}
        />
      )}

      {/* asset, liability, net worth card */}
      <div className="grid lg:grid-cols-3   sm:grid-cols-2 grid-cols-1 gap-8">
        {cards.map((card) => (
          <CardComponent key={card.heading} card={card} />
        ))}
      </div>

      {/* checking if there's account in the array */}
      <div>
        {userAccounts.length > 0 ? (
          <p className="font-medium text-lg ">
            {userAccounts.length} accounts added{" "}
          </p>
        ) : (
          <p className="font-medium text-lg text-center">
            {" "}
            No accounts added yet{" "}
          </p>
        )}
      </div>

      {/* all user accounts  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8 ">
        {userAccounts.map((item, index) => {
          const liability = item.acctType === "Credit Card";
          const data = {
            icon: { name: "pi pi-credit-card" },
            icon2: "pi pi-ellipsis-h",
            icon3: "pi pi-cog",
            id: item.id,
            heading: item.acctName,
            subheading: `${item.bankName} • ****${item.id.slice(-4)}`,
            text: "Balance",
            amount: hidebalences ? item.balance : "****",
            button: "connected",
            date: new Date(item.createdAt).toLocaleDateString(),
            expense: liability,
          };
          return (
            <div key={index}>
              <DetailCard detail={data} />
            </div>
          );
        })}
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
          {accounts.map((account, index) => (
            <PlainCard key={index} card={account} />
          ))}
        </div>
        <div>
          <Button onClick={() => setShowModal(true)}>
            <i className="pi pi-plus"></i> Connect New Bank Account
          </Button>
        </div>
      </Card>
    </main>
  );
}
