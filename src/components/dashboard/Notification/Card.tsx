import React from "react";
import Button from "../../base/Button";

type cardtype = {
  heading?: string;
  button?: string;
  text?: string;
  bg?: string;
  time?: string;
  icon?: string;
};

interface Props {
  card: cardtype;
  className?: string;
}

export default function Card({ card }: Props) {
  return (
    <Button
      variant="outline"
      className="flex !border-blue-700 !text-start py-3 !justify-between w-full !items-start"
    >
      <div className="flex gap-4 items-center  ">
        <i className={card.icon}></i>

        <div className="space-y-1">
          <p className="font-medium ">{card.heading}</p>
          <p className="text-gray font-normal text-sm">{card.text}</p>
          <div className="space-x-2">
            <Button rounded className="bg-gray-300 !py-1 text-xs ">
              {card.button}
            </Button>
            <span className="text-gray text-xs">{card.time}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-7 ">
        <i className="pi pi-check "></i>

        <i className="pi pi-times"></i>
      </div>
    </Button>
  );
}
