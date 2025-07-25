import React, { ReactNode } from "react";

interface Prop {
  children?: ReactNode;
  className?: string;
}

export default function Card({ children, className }: Prop) {
  return (
    <div className={`${className} bg-white dark:bg-gray-950 shadow-md p-6 w-full dark:border-gray-800 border-gray-100 border hover:shadow-lg rounded-lg`}>
      {children}
    </div>
  );
}
