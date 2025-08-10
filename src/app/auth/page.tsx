"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Formik } from "formik";

import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import AuthContainer from "@/components/auth/AuthContainer";
import { toast } from "react-toastify";
import useUser from "@/hooks/useUser";
import demoData from "@/service/demo.json"

export default function Page() {
  const router = useRouter();

  const { login, importDemoData } = useUser();

  const [loading, setloading] = useState(false);

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

  const handleSignin = async (values: FormValues) => {
    try {
      setloading(true);
      if (
        values.email.trim() === demoData.email &&
        values.password.trim() === demoData.password
      ) {
        console.log(values.email, values.password, "handle signin");

        await importDemoData(); // Import data only if it's the demo account
      } else {
        await login(values.email, values.password);
      }

      toast.success("sign in successful");
      router.push("/dashboard");
      console.log( "testing ");
    } catch (error) {
      let message = "An error occurred during sign in";
      if (error instanceof Error) {
        message = error.message;
      }
      toast.error(message);
      throw error;
    } finally {
      setloading(false);
    }
  };
  // const handleDemo = async () => {
  //   try {
  //     setloading(true);
  //     await importDemoData();
  //     toast.success("Demo sign-in successful");
  //     router.push("/dashboard");
  //   } catch (error) {
  //     let message = "An error occurred during demo sign-in";
  //     if (error instanceof Error) {
  //       message = error.message;
  //     }
  //     toast.error(message);
  //     throw error;
  //   } finally {
  //     setloading(false);
  //   }
  // };

  return (
    <AuthContainer
      link={
        <Link href="/auth/signup" className="text-primary">
          Sign up
        </Link>
      }
    >
      <div>
        <p className="font-bold">Demo account: </p>
        <div className="text-xs">
          <p>email: janedeo@ediwise.app</p>
          <p>password: 123456</p>
        </div>

        {/* form */}
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
              handleSignin(values);
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
            <form
              onSubmit={handleSubmit}
              className="w-full text-start space-y-5"
            >
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
                      <p className="text-red-500 text-sm mt-1">
                        {errors[name]}
                      </p>
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

              <Button type="submit" disabled={loading} loading={loading} block>
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
      </div>
    </AuthContainer>
  );
}
