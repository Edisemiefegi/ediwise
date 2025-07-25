import React, { useState, useRef, useEffect } from "react";

export interface Props {
  options?: Array<string | number>;
  className?: string;
  label?: string;
  placeholder?: string;
  onChange?: (value: string | number) => void;
  value?: string | number;
}

export default function CustomSelect({
  options = [],
  className = "",
  label,
  placeholder = "Select an option",
  onChange,
  value,
}: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item: string | number) => {
    onChange?.(item);
    setOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && <p className="font-medium mb-2">{label}</p>}

      <div
        className="border dark:border-gray-800 border-gray-300 rounded-lg px-3 py-2 cursor-pointer flex justify-between items-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="truncate">{value || placeholder}</span>
        <svg
          className={`w-4 h-4 transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-md max-h-60 overflow-y-auto">
          {options.map((item, index) => (
            <li
              key={index}
              className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                item === value ? "bg-gray-100 font-medium" : ""
              }`}
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
