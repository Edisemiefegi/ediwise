import React from "react";

export default function Pricing() {
  const price = [
    { amount: "50,000+", text: "Users Trust EdiWise" },
    { amount: "$2.5B+", text: "Money Managed" },
    { amount: "35%", text: "Average Savings Increase" },
    { amount: "99.9%", text: "Security Uptime" },
  ];

  return (
    <div className="bg-secondary">
      <div className="container w-10/12 mx-auto py-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  justify-between ">
        {price.map((item, index) => (
          <div key={index} className="text-center">
            <p className="text-primary font-bold text-3xl">{item.amount}</p>
            <p className="text-xs text-gray">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
