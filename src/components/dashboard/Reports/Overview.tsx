import Card from "@/components/base/Card";
import React from "react";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";

export default function Overview() {
  const barChartData = {
    title: {
      name: "Financial Overview - 2024",
      subheading: "Monthly breakdown of income, expenses, and savings",
    },
    labels: ["January", "February", "March", "April", "May", "June"],
    data: [
      {
        name: "Income",
        values: [500, 700, 600, 800, 750, 900],
        color: "#4CAF50", // green
      },
      {
        name: "Expense",
        values: [400, 500, 450, 600, 550, 700],
        color: "#FF6F61", // red line
      },
    ],
  };

  const barOnlyData = {
    title: {
      name: "Product Sales",
      subheading: "Units sold per month",
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    data: [
      {
        name: "Product A",
        values: [100, 120, 140, 160, 180, 200],
        color: "#2196F3", // blue
      },
      {
        name: "Product B",
        values: [80, 100, 120, 140, 160, 180],
        color: "#FFC107", // yellow
      },
    ],
  };

  const lineChartData = {
    title: {
      name: "Savings Growth",
      subheading: "Total savings progress over time",
    },
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    data: [
      {
        name: "savings",
        values: [100, 210, 302, 308, 320, 330, 340],
        color: "green",
      },
    ],
  };

  return (
    <div className="space-y-8">
      <Card>
        <BarChart
          data={barChartData.data}
          labels={barChartData.labels}
          title={barChartData.title}
          mode="bar-with-line"
        />
      </Card>

      <div className=" flex gap-6 lg:flex-row flex-col">
        <Card>
          <LineChart
            data={lineChartData.data}
            labels={lineChartData.labels}
            title={lineChartData.title}
            series="areaStyle"
          />
        </Card>
        <Card>
          <BarChart
            data={barOnlyData.data}
            labels={barOnlyData.labels}
            title={barOnlyData.title}
            mode="bar"
          />
        </Card>
      </div>
    </div>
  );
}
