"use client";
import React, { ReactNode, useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  rounded?: boolean;
  className?: string;
}

export default function Checkbox({
  children,
  rounded,
  className = "",
  checked,
  ...rest
}: Props) {
  const [isChecked, setIsChecked] = useState(checked || false);

  //   React.ChangeEvent - tells typescript its a change event that came from an <input> element.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <label className="inline-flex relative items-center gap-2 cursor-pointer ">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="peer hidden "
        {...rest}
      />

      <span
        className={`
          w-5 h-5 flex  items-center justify-center
          border border-primary
          ${rounded ? "rounded-full" : "rounded-sm"}
          peer-checked:bg-primary
          text-white
        `}
      >
        {isChecked && <i className="pi pi-check text-xs"></i>}
      </span>

      {children && (
        <span className="text-sm  text-gray font-medium">{children}</span>
      )}
    </label>
  );
}
