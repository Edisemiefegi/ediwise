"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Formik } from "formik";

import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import AuthContainer from "@/components/auth/AuthContainer";

type FormValues = {
  email: string;
  password: string;
};

const inputFields: Array<{
  label: string;
  placeholder: string;
  icon: string;
  type: string;
  name: keyof FormValues;
}> = [
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
];

export default function Page() {
  const router = useRouter();

  return (
    <AuthContainer
      link={
        <Link href="/auth/signup" className="text-primary">
          Sign in
        </Link>
      }
    >
      <Formik<FormValues>
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: Partial<FormValues> = {};
          if (!values.email) errors.email = "Required";
          if (!values.password) errors.password = "Required";
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
            router.push("/dashboard");
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
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="w-full text-start space-y-5">
            {inputFields.map((field) => {
              const { name } = field;
              return (
                <div key={name}>
                  <Input
                    labelUp={field.label}
                    placeholder={field.placeholder}
                    prepend={<i className={field.icon}></i>}
                    type={field.type}
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

            <Button
              variant="text"
              className="text-primary !px-0 !py-0 text-sm !items-start"
            >
              Forgot password?
            </Button>

            <Button type="submit" disabled={isSubmitting} block>
              Sign in
            </Button>

            <hr className="text-gray-300 dark:text-gray-700" />

            <Button variant="outline" block>
              <Image
                src="/icons/google.ico"
                width={20}
                height={20}
                alt="google icon"
              />
              Continue with Google
            </Button>

            <Button variant="outline" block>
              <Image
                src="/icons/fb.png"
                width={30}
                height={30}
                alt="facebook icon"
              />
              Continue with Facebook
            </Button>
          </form>
        )}
      </Formik>
    </AuthContainer>
  );
}
