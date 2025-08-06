"use client";
import Button from "@/components/base/Button";
import React, { useState } from "react";
import Input from "@/components/base/Input";
import AuthContainer from "@/components/auth/AuthContainer";
import Link from "next/link";
import Checkbox from "@/components/base/Checkbox";
import { useRouter } from "next/navigation";
import { Formik } from "formik";
import { toast } from "react-toastify";
import useUser from "@/hooks/useUser";

export default function Page({}) {
  const {register} = useUser()

  const router = useRouter();
  const [loading, setloading] = useState(false);

  type FormValues = {
    email: string;
    password: string;
    name: string;
    confirm: string;
  };

  const inputFields: Array<{
    label: string;
    placeholder: string;
    icon: string;
    type: string;
    name: keyof FormValues;
  }> = [
    {
      label: "Full Name",
      placeholder: "Enter your full name",
      icon: "pi pi-user",
      type: "string",
      name: "name",
    },
    {
      label: "Email",
      placeholder: "Enter your email",
      icon: "pi pi-envelope",
      type: "email",
      name: "email",
    },
    {
      label: "Password",
      placeholder: "Enter your password",
      icon: "pi pi-lock",
      type: "password",
      name: "password",
    },
    {
      label: " Confim Password",
      placeholder: "Confirm your password",
      icon: "pi pi-lock",
      type: "password",
      name: "confirm",
    },
  ];

  const handleSubmit = async (values: FormValues) => {
    try {
      setloading(true);
      const { email, password, name } = values;
      const userData = {
        email,
        name,
        password,
        id: "",
        profile: "",
        createdAt: new Date().toISOString(),
        monthlyIncome: 0,
        monthlyExpense: 0,
        hideBalance: false,
        totalAssets: 0,
        totalLiabilities: 0,
  
        
      };

      await register(userData);
      toast.success("Sign up successful");
      router.push("/dashboard");
    } catch (error) {
      let message = "An error occurred during sign in";
      if (error instanceof Error) {
        message = error.message;
      }
      toast.error(message);
    } finally {
      setloading(false);
    }
  };

  return (
    <AuthContainer
      heading="Create Your Account"
      subheading="Join EdiWise to start managing your financial future

"
      link={
        <Link href="/auth" className="text-primary">
          Sign in
        </Link>
      }
    >

      <Formik<FormValues>
        initialValues={{ email: "", password: "", name: "", confirm: "" }}
        validate={(values) => {
          const errors: Partial<FormValues> = {};
          if (!values.email) errors.email = "Required";
          if (!values.password) errors.password = "Required";
          if (!values.name) errors.name = "Required";
          if (!values.confirm) errors.confirm = "Required";

          if (values.password !== values.confirm)
            errors.confirm = "confirm password does not match the password";
          if (
            values.email &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            handleSubmit(values);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className="w-full text-start space-y-5">
            {inputFields.map((item) => {
              const { name } = item;
              return (
                <div key={name}>
                  <Input
                    labelUp={item.label}
                    prepend={<i className={item.icon}></i>}
                    placeholder={item.placeholder}
                    type={item.type}
                    name={name}
                    value={values[name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched[name] && errors[name] && (
                    <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
                  )}
                </div>
              );
            })}
            <Checkbox rounded>
              I agree to the{" "}
              <span className="text-primary">Terms of Service</span> and{" "}
              <span className="text-primary"> Privacy Policy</span>
            </Checkbox>
            <Button type="submit" loading={loading} disabled={loading} block>
              Create Account
            </Button>

            <hr className="text-gray-300  dark:text-gray-700" />
          </form>
        )}
      </Formik>
    </AuthContainer>
  );
}
