import React from "react";
import PieChart from "@/components/charts/PieChart";
import Card from "@/components/base/Card";
import Investment from "../Investment";

export default function Analysis() {
  const PieChartData = {
    title: {
      name: "Spending Distribution",
      subheading: "Where your money goes by category",
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

  return (
    <div className=" flex gap-6 lg:flex-row flex-col">
      <Card>
        <PieChart data={PieChartData.data} title={PieChartData.title} />
      </Card>

      <Investment />
    </div>
  );
}
