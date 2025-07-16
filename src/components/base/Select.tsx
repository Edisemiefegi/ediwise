import React from "react";

export interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<string | number>;
  className?: string;
  label?: string;
}

export default function Select({
  options = [],
  className,
  label,
  ...rest
}: Props) {
  return (
    <div>
      {label && <p className="font-medium mb-2">{label}</p>}

      <select
        {...rest}
        className={` border outline-none  border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-primary  focus-within:transition ease-in delay-200   px-3 py-2 w-full ${className}`}
      >
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
