"use client";

import ReactECharts from "echarts-for-react";
import React, { useMemo } from "react";

type DataType = {
  name: string;
  values: number[];
  color: string;
};

interface BarChartProps {
  data: DataType[];
  labels: string[];
  title: {
    name: string;
    subheading: string;
  };
  mode?: "bar" | "bar-with-line"; // new mode prop
}

export default function BarChart({
  data,
  labels,
  title,
  mode = "bar",
}: BarChartProps) {
  const series = useMemo(() => {
    return data.map((el, idx) => {
      return {
        name: el.name,
        type: mode === "bar-with-line" && idx === 1 ? "line" : "bar", // make second item a line
        data: el.values,
        itemStyle: {
          color: el.color,
        },
        yAxisIndex: 0,
        smooth: true,
        lineStyle: mode === "bar-with-line" && idx === 1 ? { width: 3 } : undefined,
        barGap: "10%",
      };
    });
  }, [data, mode]);

  const options = useMemo(
    () => ({
      tooltip: {
        trigger: "axis",
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      legend: {
        data: data.map((el) => el.name),
      },
      xAxis: {
        type: "category",
        data: labels,
      },
      yAxis: {
        type: "value",
      },
      series,
    }),
    [data, labels, series]
  );

  return (
    <div>
      <div className="mb-4">
        <p className="text-xl font-bold">{title.name}</p>
        <p className="text-sm text-gray-500">{title.subheading}</p>
      </div>
      <div className="w-full h-[300px]">
        <ReactECharts
          opts={{ renderer: "svg" }}
          option={options}
          notMerge={true}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}
