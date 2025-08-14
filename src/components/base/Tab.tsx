"use client";

import React, { ReactNode, useEffect } from "react";
import { useState } from "react";
import Button from "./Button";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

export type TabOptions = {
  value: string;
  label: string | ReactNode;
  path?: string;
};

interface Props {
  options?: TabOptions[];
  className?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  activeTabClass?: string;
  inactiveTab?: string;
  path?: string;
  setShowNavbar?: (value: boolean) => void;
}

export default function Tab({
  options = [],
  className = "",
  setShowNavbar,
  activeTabClass = "bg-white dark:bg-black dark:text-white ",
  inactiveTab = "text-gray hover:bg-white/20",
  defaultValue,
  onChange,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  // determine whether its using route or not
  const usesRouting = options.some((opt) => opt.path);

  const [activeTab, setActiveTab] = useState(
    defaultValue || options[0]?.value || ""
  );

  useEffect(() => {
    if (!usesRouting && defaultValue) {
      setActiveTab(defaultValue);
    }
  }, [defaultValue, usesRouting]);

  const handleClick = (option: TabOptions) => {
   if (option.path) {
    router.push(option.path);
    setShowNavbar?.(false);
  } else {
    // Scroll to section if it exists
    const section = document.getElementById(option.value);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setActiveTab(option.value);
    onChange?.(option.value);
    setShowNavbar?.(false); // close mobile nav
  }
  };

  const isVertical = className.includes("flex-col");

  return (
    <div
      className={clsx(
        "flex items-center dark:bg-gray-900  bg-secondary p-1  rounded-xl justify-evenly w-full",
        className
      )}
    >
      {options?.map((option) => {
        const isActive = option.path
          ? option.path === pathname
          : option.value === activeTab;
        return (
          <Button
            key={option.value}
            variant="text"
            onClick={() => handleClick(option)}
            className={clsx(
              " md:!py-2 !py-1 md:px-0 !px-2 md:text-sm    text-xs  w-full transition-all duration-50",
              isActive ? activeTabClass : inactiveTab,
              isVertical ? " !justify-start" : ""
            )}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}
