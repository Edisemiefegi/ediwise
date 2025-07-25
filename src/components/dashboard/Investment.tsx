import React from "react";
import Card from "../base/Card";
import Button from "../base/Button";

export default function Investment() {
  const holdings = [
    {
      heading: "Apple Inc.",
      text: "50 shares × $180.5",
      button: "AAPL",
      amount: "$9,025",
      percentage: "+2.3%",
    },
    {
      heading: "Alphabet Inc.",
      text: "50 shares × $180.5",
      button: "GOOGL",
      amount: "$9,025",
      percentage: "+2.3%",
    },
    {
      heading: "Microsoft Corp.",
      text: "50 shares × $180.5",
      button: "MSFT",
      amount: "$9,025",
      percentage: "+2.3%",
    },
    {
      heading: "Tesla Inc.",
      text: "50 shares × $180.5",
      button: "TSLA",
      amount: "$9,025",
      percentage: "+2.3%",
    },
  ];

  return (
    <Card>
      <p className="font-semibold text-xl">Holdings</p>
      <p className="text-gray mb-8 mt-1">Your individual stock positions</p>
      <div className="space-y-4">
        {holdings.map((item, index) => (
          <Button key={index} className="w-full py-3 !items-start " variant="outline">
            <div className="flex w-full justify-between items-center">
              <div className="flex gap-2 !text-start">
                <Button className="bg-secondary dark:bg-blue-950 !text-primary  rounded-xl">
                  {item.button}
                </Button>
                <p>
                  {item.heading}{" "}
                  <span className="block text-gray text-sm">{item.text}</span>
                </p>
              </div>

              <div>
                <p>{item.amount}</p>
                <p className="text-error">{item.percentage}</p>
              </div>

              <i className="pi pi-ellipsis-h"></i>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
}
