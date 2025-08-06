"use client";

import React, { useState } from "react";

import Modal from "@/components/base/Modal";
import Input from "@/components/base/Input";
import CustomSelect from "@/components/base/Select";
import { Formik } from "formik";
import Button from "@/components/base/Button";
import useUser from "@/hooks/useUser";
import {  toast } from "react-toastify";

export default function AddAccount({ setShowModal }: any) {
  const modal = {
    header: {
      heading: "Add New Account",
      text: "Connect a new bank account or add one manually",
    },
    inputFields: [
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
        option: ["Checking", "Savings", "Credit Card"],
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
    ],
    button: {
      text: "Add Account",
      onclick: () => addAccount({}),
    },
  };
  const [loading, setloading] = useState(false);

  const { addAccount } = useUser();

  type FormValues = {
    acctName: string;
    acctType: string;
    bankName: string;
    balance: string;
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleAddAccount = async (values: any) => {
    try {
      setloading(true);

      await addAccount(values);
      toast.success("account added successfully");
      setShowModal(false);
      console.log(values, "New account values");
    } catch (error) {
      let message = "An error occurred please try again";
      if (error instanceof Error) {
        message = error.message;
      }
      toast.error(message);
      throw error;
    } finally {
      setloading(false);
    }
  };
  return (
    <Modal className="" onClose={handleClose} header={modal.header}>

      <Formik<FormValues>
        initialValues={{
          acctName: "",
          acctType: "",
          bankName: "",
          balance: "",
        }}
        validate={(values) => {
          const errors: Partial<FormValues> = {};
          if (!values.acctName) errors.acctName = "Required";
          if (!values.acctType) errors.acctType = "Required";
          if (!values.bankName) errors.bankName = "Required";

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          await handleAddAccount(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="space-y-4  p-1">
            {modal.inputFields.map((field, index) => {
              const name = field.name as keyof FormValues;
              return (
                <div key={index}>
                  {field.inputType === "input" ? (
                    <Input
                      labelUp={field.label}
                      placeholder={field.placeholder}
                      type={field.type}
                      name={name}
                      value={values[name]}
                      onChange={handleChange}
                    />
                  ) : (
                    <CustomSelect
                      placeholder={field.placeholder}
                      options={field.option}
                      label={field.label}
                      name={name}
                      value={values[name]}
                      onChange={handleChange}
                    />
                  )}
                  {touched[name] && errors[name] && (
                    <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
                  )}
                </div>
              );
            })}

            <div className="">
              <Button type="submit" loading={loading} disabled={loading}>
                Add Account
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
}
