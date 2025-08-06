// components/base/FormModal.tsx
"use client";

import React, { useState } from "react";
import { Formik } from "formik";
import Modal from "./Modal";
import Input from "./Input";
import CustomSelect from "./Select";
import Button from "./Button";


type FormikValues = {
  [field: string]: any;
};

export type InputField = {
  label: string;
  type?: string;
  placeholder?: string;
  name?: string;
  inputType: "input" | "select";
  option?: string[];
};

type Props<T  extends FormikValues> = {
  modalHeader: {
    heading: string;
    text?: string;
  };
  inputFields?: InputField[];
  initialValues: T;
  validate: (values: T) => Partial<T>;
  onSubmit: (values: T) => Promise<void>;
  buttonText: string;
  onClose: () => void;
};

export default function Form<T extends FormikValues>({
  modalHeader,
  inputFields,
  initialValues,
  validate,
  onSubmit,
  buttonText,
  onClose,
}: Props<T>) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="relative">
      <Modal onClose={onClose} header={modalHeader}>
      <Formik<T>
        initialValues={initialValues}
        validate={validate}
        onSubmit={async (values, { setSubmitting }) => {
          setLoading(true);
          try {
            await onSubmit(values);
          } finally {
            setLoading(false);
            setSubmitting(false);
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="space-y-4 h-fit  p-1">
            {inputFields?.map((field, index) => {
              const name = field.name as keyof T;

              return (
                <div key={index}>
                  {field.inputType === "input" ? (
                    <Input
                      labelUp={field.label}
                      placeholder={field.placeholder}
                      type={field.type}
                      name={name as string}
                      value={values[name]}
                      onChange={handleChange}
                    />
                  ) : (
                    <CustomSelect
                      placeholder={field.placeholder}
                      options={field.option || []}
                      label={field.label}
                      name={name as string}
                      value={values[name]}
                      onChange={handleChange}
                    />
                  )}
                  {touched[name] && errors[name] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[name] as string}
                    </p>
                  )}
                </div>
              );
            })}
            <Button type="submit" loading={loading} disabled={loading}>
              {buttonText}
            </Button>
          </form>
        )}
      </Formik>
    </Modal>
    </div>
  );
}
