import React from "react";
import Button from "../base/Button";

type buttonType = {
  text?: string;
  icon?: string;
  outline?: boolean;
};

interface Props {
  heading?: string;
  text?: string;
  buttons?: Array<buttonType>;
}

export default function Header({ heading, text, buttons = [] }: Props) {
  return (
    <header className="flex lg:flex-row flex-col gap-2 justify-between lg:items-center">
      <div className="space-y-1">
        <p className="text-3xl font-bold">{heading}</p>
        <p className="text-gray">{text}</p>
      </div>
      <div className="flex gap-3 ">
        {buttons.map((btn) => (
          <div key={btn?.text}>
            {btn?.outline ? (
              <Button variant="outline" className=" !text-sm sm:text-normal ">
                <i className={btn?.icon}></i> <span>{btn.text}</span>{" "}
              </Button>
            ) : (
              <Button>
                <i className={btn?.icon}></i> <span>{btn.text}</span>{" "}
              </Button>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}
