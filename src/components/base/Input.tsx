"use client";

import React, { ReactNode } from "react";

// extend - includes all the normal input props, PLUS whatever extra props I define
// InputHTMLAttributes lets the component accept any regular input props
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  append?: ReactNode;
  prepend?: ReactNode;
  labelUp?: string;
  className?: string;
}

export default function Input({
  append,
  prepend,
  labelUp,
  className,
  ...rest
}: Props) {

  return (
    <div>
      {labelUp && <p className="font-medium mb-2">{labelUp}</p>}
      <div
        className={`flex  items-center gap-3 border  border-gray-300 dark:border-gray-800  rounded-lg focus-within:ring-2 focus-within:ring-primary  focus-within:transition ease-in delay-200   px-3 py-2 ${className}`}
      >
        {prepend && <div className="text-gray">{prepend}</div>}

        <input
          {...rest}
          className=" outline-none overflow-x-auto object-contain w-full  placeholder:text-gray-600 text-sm dark:!bg-gray-950  flex-1 bg-transparent"
        />

        {append && <div className="text-gray">{append}</div>}
      </div>
    </div>
  );
}
