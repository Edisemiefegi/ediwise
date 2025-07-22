import React from "react";
import Card from "@/components/base/Card";
import LineChart from "@/components/charts/LineChart";

export default function Trends() {
  const lineChartData = {
    title: {
      name: "Financial Trends Analysis",
      subheading: "Identify patterns in your financial behavior",
    },
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    data: [
      {
        name: "Icome",
        values: [100, 200, 150, 300, 250, 400, 450],
        color: "green",
      },
      {
        name: "Expense",
        values: [50, 100, 120, 180, 200, 300, 350],
        color: "#FF6F61",
      },
      {
        name: "Actual",
        values: [30, 80, 100, 150, 180, 200, 250],
        color: "#FF6F61",
      },
    ],
  };

  return (
    <Card>
      <LineChart
        data={lineChartData.data}
        labels={lineChartData.labels}
        title={lineChartData.title}
      />
    </Card>
  );
}
