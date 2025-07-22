import React from "react";
import Card from "@/components/base/Card";
import Button from "@/components/base/Button";

export default function Ai() {
  const cards = [
    {
      heading: "Optimize Subscription Spending",
      text: "You could save $180/month by reviewing unused subscriptions. We found 3 services you haven't used in 60+ days.",
      button: "high priority",
      budget: "$2,160 annual savings",
      icon: "pi pi-dollar text-xs",
    },
     {
      heading: "Optimize Subscription Spending",
      text: "You could save $180/month by reviewing unused subscriptions. We found 3 services you haven't used in 60+ days.",
      button: "high priority",
      budget: "$2,160 annual savings",
      icon: "pi pi-dollar text-xs",
    }, {
      heading: "Optimize Subscription Spending",
      text: "You could save $180/month by reviewing unused subscriptions. We found 3 services you haven't used in 60+ days.",
      button: "high priority",
      budget: "$2,160 annual savings",
      icon: "pi pi-dollar text-xs",
    }, {
      heading: "Optimize Subscription Spending",
      text: "You could save $180/month by reviewing unused subscriptions. We found 3 services you haven't used in 60+ days.",
      button: "high priority",
      budget: "$2,160 annual savings",
      icon: "pi pi-dollar text-xs",
    },
  ];

  return (
    <Card>
      <div className="mb-8">
        <p className="text-2xl font-semibold">AI-Powered Financial Insights</p>
        <p className="text-sm text-gray-500">
          Personalized recommendations based on your financial data
        </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {cards.map((item, index) => (
          <Card key={index} className="flex gap-2 border-l-4  border-l-primary">
            <i className={item.icon}></i>
            <div className="space-y-3">
              <h1 className="font-semibold text-lg">{item.heading}</h1>
              <p className="text-gray">{item.text}</p>
              <div className="flex gap-2">
                <Button rounded className="text-xs" size="small">
                  {item.button}
                </Button>
                <p className="text-green ">{item.budget}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}
