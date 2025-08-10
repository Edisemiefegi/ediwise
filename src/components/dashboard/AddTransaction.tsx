"use client";

import React, { useEffect, useState } from "react";

import Form, { InputField } from "@/components/base/Form";
import useUser from "@/hooks/useUser";
import { toast } from "react-toastify";

export default function AddTransactions({ setShowModal }: any) {
  const [userAccounts, setUserAccounts] = useState<any[]>([]);


  const { addTransactions, getUserAccounts, getUserTransactions,} = useUser();

  // Fetch accounts and transactions
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [accounts] = await Promise.all([getUserAccounts()]);
        setUserAccounts(accounts);
      } catch (err) {
        console.error("Failed to fetch accounts or transactions", err);
      }
    };

    fetchData();
  }, [getUserAccounts, getUserTransactions]);

  type FormValues = {
    type: string;
    amount: string;
    description: string;
    category: string;
    account: string;
    notes: string;
  };

  const initialValues: FormValues = {
    type: "",
    amount: "",
    description: "",
    category: "",
    account: "",
    notes: "",
  };

  const inputFields: InputField[] = [
    {
      placeholder: "Select type",
      label: "Type",
      option: ["Income", "Expense"],
      name: "type",
      inputType: "select",
    },
    {
      label: "Amount",
      type: "number",
      name: "amount",
      placeholder: "0.00",
      inputType: "input",
    },
    {
      label: "Description",
      type: "text",
      placeholder: "Transaction description",
      inputType: "input",
      name: "description",
    },
    {
      placeholder: "Select category",
      label: "Category",
      option: [
        "Shopping",
        "Entertainment",
        "Bills & Utilities",
        "Food & Dining",
        "Travel",
        "Health & Fitness",
        "Education",
        "Other",
      ],
      name: "category",
      inputType: "select",
    },
    {
      placeholder: "Select Account",
      label: "Account",
      option: userAccounts.map((account) => account.acctName),
      name: "account",
      inputType: "select",
    },
    {
      label: "Notes",
      type: "text",
      name: "notes",
      placeholder: "Add any additional notes (optional)",
      inputType: "input",
    },
  ];

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.type) errors.type = "Required";
    if (!values.amount) errors.amount = "Required";
    if (!values.description) errors.description = "Required";
    if (!values.category) errors.category = "Required";
    const amount = Number(values.amount);
    if (!amount) {
      errors.amount = "Required";
    }
    if (!values.account) errors.account = "Required";
    return errors;
  };

  const onSubmit = async (values: FormValues) => {
    try {
      await addTransactions({ ...values, acctType: values.type.toLowerCase() });
      toast.success("Transaction added successfully");
      setShowModal(false);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An error occurred";
      toast.error(message);
    }
  };
  return (
    <Form<FormValues>
      modalHeader={{
        heading: "Add New Transaction",
        text: "Enter the details for your new transaction.",
      }}
      inputFields={inputFields}
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      buttonText="Add Transaction"
      onClose={() => setShowModal(false)}
    />
  );
}
