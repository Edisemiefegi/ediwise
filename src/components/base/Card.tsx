import React, { ReactNode } from "react";

interface Prop {
  children?: ReactNode;
  className?: string;
}

export default function Card({ children, className }: Prop) {
  return (
    <div className={`${className} bg-white shadow-md p-6 w-full border-gray-100 border hover:shadow-lg rounded-lg`}>
      {children}
    </div>
  );
}
