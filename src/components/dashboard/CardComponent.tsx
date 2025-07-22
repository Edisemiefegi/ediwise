import React from "react";
import Card from "@/components/base/Card";
import clsx from "clsx";

type cardtype = {
  heading?: string;
  icon?: string;
  amount?: number | any;
  subheading?: string;
  progress?: any;
  bg?: string;
  outline?: boolean;
  padding?: string
};

interface Props {
  card: cardtype;
  className?: string;
}

export default function CardComponent({ card, className }: Props) {
  return (
    <Card
      key={card.heading}
      className={`${card.bg} ${card?.padding ? card.padding : 'p-12'} shadow-none  space-y-2`}
    >
      <p
        className={clsx(
          "flex justify-between items-center ",
          card.outline ? "text-black" : "text-gray-100"
        )}
      >
        <span>{card.heading}</span> <i className={card.icon}></i>
      </p>
      <div>
        {card?.progress && (
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-sm text-gray"> {card.progress?.name}</p>{" "}
              <p className="text-sm text-error"> {card.progress?.range}</p>
            </div>
            <div className=" rounded-full overflow-hidden bg-secondary w-full">
              <div className="bg-primary  p-1 w-1/2"></div>
            </div>
          </div>
        )}
        <p
          className={clsx(
            "font-bold text-2xl ",
            card.outline ? "text-green" : "text-white"
          )}
        >
          {card?.amount &&  `$ ${card?.amount}`}
        </p>{" "}
        <p
          className={clsx(
            "text-xs ",
            card.outline ? "text-gray-400" : "text-gray-100"
          )}
        >
          {card.subheading}
        </p>
      </div>
    </Card>
  );
}
