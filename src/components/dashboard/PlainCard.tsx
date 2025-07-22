import React from "react";
import Button from "../base/Button";

type cardtype = {
  heading?: string;
  button?: string;
  text?: string;
  bg?: string;
  action?: any;
};

interface Props {
  card: cardtype;
  className?: string;
}

export default function PlainCard({ card, className }: Props) {
  return (
    <Button
      variant="outline"
      className="flex !text-start py-4 !justify-between w-full !items-start"
    >
      <div className="flex gap-4 items-center ">
        <div>
          <Button className={`${card.bg} text-xs py-3`}>
            <i className={card.button}></i>
          </Button>
        </div>
        <div>
          <p className="font-medium ">{card.heading}</p>
          <p className="text-gray font-normal text-sm">{card.text}</p>
        </div>
      </div>

      {card.action && (
        <div className="flex gap-7 items-center">
          <div>
            <p className="text-primary text-end">${card.action.amount}</p>
            <Button rounded size="small" className="text-xs">
              {card.action.completed}
            </Button>
          </div>
          <i className="pi pi-ellipsis-h"></i>
        </div>
      )}
    </Button>
  );
}
