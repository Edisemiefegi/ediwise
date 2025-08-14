import React from "react";
import Card from "../base/Card";
import Button from "../base/Button";

export default function About() {
  const about = [
    {
      icon: "pi pi-chart-bar ",
      heading: "Smart Analytics",
      text: "AI-powered insights and beautiful visualizations to understand your spending patterns.",
    },
    {
      icon: "pi  pi-shield",
      heading: "Bank-Level Security",
      text: "256-bit encryption and multi-factor authentication to keep your data safe.",
    },
    {
      icon: "pi pi-bullseye ",
      heading: "Goal Tracking",
      text: "Set and achieve financial goals with automated savings and progress tracking.",
    },
    {
      icon: "pi pi-mobile ",
      heading: "Mobile First",
      text: "Access your finances anywhere with our responsive design and PWA support.",
    },
    {
      icon: "pi pi-users ",
      heading: "Money Transfers",
      text: "Send money to friends and family instantly with ediWise tags or email.",
    },
    {
      icon: "pi pi-chart-pie ",
      heading: "Budget Planning",
      text: "Create and manage budgets with real-time alerts and spending insights.",
    },
  ];

  const testimonies = [
    {
      name: "Sarah Johnson",
      title: "Entrepreneur",
      text: '"EdiWise has transformed how I manage my business finances. The insights are incredible!"',
    },
    {
      name: "Michael Chen",
      title: "Software Engineer",
      text: '"Finally, a financial app that gets it right. Clean design and powerful features."',
    },
    {
      name: "Emily Rodriguez",
      title: "Marketing Manager",
      text: '"The goal tracking feature helped me save for my dream vacation. Highly recommended!"',
    },
  ];

  return (
    <main className="space-y-20  dark:text-white ">
      <div className="container  w-10/12 mx-auto   ">
        <div className="flex flex-col gap-10 items-center">
          <div className="text-center w-full md:w-3/4 space-y-3">
            <h1 className="text-4xl font-bold">
              Everything you need to manage your finances
            </h1>
            <p className="text-lg text-gray">
              From tracking expenses to planning for the future, EdiWise has all
              the tools you need to achieve financial success.
            </p>
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
            {about.map((item, index) => (
              <Card key={index}>
                <Button className=" text-xs py-3 bg-secondary">
                  <i className={`${item.icon} text-primary text-2xl`}></i>
                </Button>
                <h1 className="text-lg font-medium mb-4 mt-1">
                  {item.heading}
                </h1>

                <p className="text-gray">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* testimonials */}
      <div className="bg-secondary dark:bg-gray-950  py-20">
        <div className=" flex container  w-10/12 mx-auto  flex-col  gap-10 items-center ">
        <div className="text-center w-full md:w-3/4 space-y-3">
          <h1 className="text-4xl font-bold">
            Everything you need to manage your finances
          </h1>
          <p className="text-lg text-gray">
            From tracking expenses to planning for the future, EdiWise has all
            the tools you need to achieve financial success.
          </p>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
          {testimonies.map((item, index) => (
            <Card key={index}>
              <div className="flex gap-4">
                <Button rounded className=" text-xs !py-3 !px-3 bg-secondary">
                  <i className="pi pi-user text-primary text-xl"></i>
                </Button>
                <div>
                  <h1 className=" font-medium ">{item.name}</h1>

                  <p className="text-gray text-sm">{item.title}</p>
                </div>
              </div>
              <div className="space-x-3 mb-4 mt-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <i key={index} className="pi pi-star text-warning"></i>
                ))}
              </div>
              <p className="text-gray">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </main>
  );
}
