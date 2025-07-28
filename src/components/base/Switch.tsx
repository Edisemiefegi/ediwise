"use client";

import React, { useState } from "react";
import Button from "./Button";
import clsx from "clsx";

export default function Switch() {
  const [isOn, setIson] = useState(false);

  const handleSwitch = () => {
    setIson(!isOn);
  };

  return (
    <div
      className={clsx(
        " bg-secondary dark:bg-gray-500 p-0.5 w-13   rounded-full flex transition delay-100 ease-out  items-center",
        isOn ? "justify-end !bg-primary" : "justify-start"
      )}
    >
      <Button
        onClick={handleSwitch}
        rounded
        variant="text"
        className="bg-white !px-3 !py-3 "
      ></Button>
    </div>
  );
}
