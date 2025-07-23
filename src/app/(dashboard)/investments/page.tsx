import Header from "@/components/dashboard/Header";
import CardComponent from "../../../components/dashboard/CardComponent";
import React from "react";
import Card from "@/components/base/Card";
import PieChart from "@/components/charts/PieChart";
import LineChart from "@/components/charts/LineChart";
import Investment from "@/components/dashboard/Investment";

export default function page() {
  const investmentHeader = {
    heading: "Investments",
    text: "Track your portfolio performance and holdings",
    buttons: [
      {
        text: "Refresh",
        icon: "pi pi-history",
        outline: true,
      },
      {
        text: "Add Investment",
        icon: "pi pi-plus",
      },
    ],
  };

  const lineChartData = {
    title: {
      name: "Portfolio Performance",
      subheading: "Track your investment growth over time",
    },
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    data: [
      {
        name: "performance",
        values: [300, 310, 302, 308, 320, 330, 340],
        color: "#007BFF",
      },
    ],
  };
  

  const PieChartData = {
    title: {
      name: "Asset Allocation",
      subheading: "Portfolio diversification breakdown",
    },
    data: [
      {
        name: " Food",
        value: 40,
      },
      {
        name: "Housing",
        value: 30,
      },
      {
        name: "Transport",
        value: 10,
      },
      {
        name: "Others",
        value: 20,
      },
    ],
  };

  const cards = [
    {
      heading: "Total Portfolio Value",
      icon: "pi pi-dollar ",
      amount: 5000,
      outline: true,
      subheading: "+4.2% this month",
      padding: "p-3",
    },
    {
      heading: "Total Gain/Loss",
      icon: "pi pi-arrow-up-right",
      amount: 1635,
      outline: true,
      subheading: "Since inception",
      padding: "p-3",
    },
    {
      heading: "Today's Change",
      icon: "pi pi-arrow-up-right",
      amount: 2699,
      outline: true,
      subheading: "-0.8% from yesterday",
      padding: "p-3",
    },
    {
      heading: "Diversification",
      icon: "pi pi-bullseye",
      amount: 4,
      outline: true,
      subheading: "Asset classes",
      padding: "p-3",
    },
  ];

  return (
    <main className="space-y-8">
      <Header
        heading={investmentHeader.heading}
        text={investmentHeader.text}
        buttons={investmentHeader.buttons}
      />

      <div className="grid lg:grid-cols-4   md:grid-cols-2 grid-cols-1 gap-6">
        {cards.map((card) => (
          <CardComponent key={card.heading} card={card} />
        ))}
      </div>

      {/* performance */}
      <Card>
        <LineChart
          data={lineChartData.data}
          labels={lineChartData.labels}
          title={lineChartData.title}
        />
      </Card>

      <div className="grid grid-cols-6 gap-8">
        <div className="lg:col-span-4 col-span-6">
          <Investment />
        </div>
        <div className="lg:col-span-2 col-span-6">
          <Card className="space-y-3">
            <PieChart
              series="half"
              data={PieChartData.data}
              title={PieChartData.title}
            />
          </Card>
        </div>
      </div>
    </main>
  );
}
