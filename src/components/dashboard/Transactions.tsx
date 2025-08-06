import React from "react";
import Card from "@/components/base/Card";
import Button from "../base/Button";
import { buttonType } from "@/types";

interface TransactionType {
  description?: string;
  createdAt?: string;
  category?: string;
  amount?: number;
}

interface Props {
  transactions?: TransactionType[];
  heading?: string;
  icon?: string;
  text?: string
  button?: buttonType
}

export default function Transactions({ transactions , heading = 'Recent Transactions', icon = 'pi-wallet', text = 'Your latest financial activity', }: Props) {
  return (
    <Card className="space-y-6 shadow-none">
      <div className="flex justify-between gap-0.5">
        <div>
          <p className="font-medium  text-xl sm:text-2xl">
            <i className={`pi ${icon}`}></i> {heading}
          </p>
          <p className="text-gray text-sm"> {text}</p>
        </div>{" "}
        <div>
          <Button className="text-sm sm:text-normal" onClick={button.onclick}  variant="outline">{button.text}</Button>
        </div>{" "}
      </div>
      <div className="space-y-3 ">
        {transactions?.map((item, index) => (
          <div key={index} className="flex justify-between  w-full">
            <div>
              <p className="font-medium text-sm">{item.description}</p>
              <p className="text-gray text-xs">{item.createdAt}</p>
            </div>
            <div className="flex gap-1">
              <div>
                <Button
                  rounded
                  size="small"
                  className="bg-secondary dark:bg-gray-700 dark:!text-white !text-black !py-1 text-xs"
                >
                  {item.category}
                </Button>
              </div>
              <p className="text-lg font-medium text-green">${item.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
