import React from "react";
import Button from "../base/Button";

type actionType = {
  completed?: string;
  amount?: number;
};

type cardtype = {
  heading?: string;
  button?: string;
  text?: string;
  bg?: string;
  action?: actionType;
  expense?: string;
};

interface Props {
  card: cardtype;
  className?: string;
}

export default function PlainCard({ card }: Props) {
  return (
    <Button
      variant="outline"
      className="flex !text-start py-4 !justify-between w-full !items-start"
    >
      <div
        className={`${
          card?.action
            ? "md:flex-row flex  md:items-center  flex-col gap-4"
            : "flex gap-4 items-center  "
        } `}
      >
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
        <div className="flex md:flex-row flex-col gap-7 items-end md:items-center">
          <i className="pi pi-ellipsis-h order-1 md:order-2"></i>

          <div className="order-2 md:order-1">
            <p
              className={` text-end ${
                card?.expense == "Expense" ? "text-error" : "text-green"
              } `}
            >
              {card?.action?.amount && `$ ${card?.action?.amount}`}
            </p>
            <Button rounded size="small" className="text-xs">
              {card.action.completed}
            </Button>
          </div>
        </div>
      )}
    </Button>
  );
}
