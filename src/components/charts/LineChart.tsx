"use client";

import ReactECharts from "echarts-for-react";
import React, { useMemo } from "react";

type dataType = {
  name: string;
  values: any;
  color: string;
};

interface LineChartProps {
  data?: Array<dataType>;
  labels?: string[];
  title?: any;
  series?: string;
}

export default function LineChart({
  data,
  labels,
  title,
  series = "lineStyle",
}: LineChartProps) {
  const lineStyle = useMemo(() => {
    return data?.map((el) => {
      return {
        name: el.name,
        type: "line",
        data: [...(el.values || [])].map((a) => a * 10) || [],
        smooth: true,
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          color: el.color,
        },
        showSymbol: true,
      };
    });
  }, []);

  const areaStyle = useMemo(() => {
    return data?.map((el) => {
      return {
        name: el.name,
        type: "line",
        data: [...(el.values || [])].map((a) => a * 10) || [],

        itemStyle: {
          color: el.color,
        },
        areaStyle: {},
      };
    });
  }, []);
  // Line Chart Options
  const options = useMemo(
    () => ({
      // title: title,
      tooltip: {
        trigger: "axis",
        borderRadius: 10,
        textStyle: {
          color: "#333",
        },
      },
      legend: {
        show: false,
      },
      xAxis: {
        type: "category",
        data: labels || [],
        axisLabel: {
          color: "#444",
        },
        boundaryGap: false,
      },
      yAxis: {
        type: "value",
        data: data || [],
        axisLabel: {
          color: "#444",
        },
        min: 0, // 👈 prevents any negative values from rendering
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true, // keeps labels inside bounds
      },
      series: series == "lineStyle" ? lineStyle : areaStyle || [],
    }),
    [data, labels]
  );

  const HeaderContent = (
    <div className=" ">
      <p className="text-xl font-semibold ">
        {" "}
        <i className="pi pi-chart-line mr-2"></i>
        {title.name}{" "}
      </p>
      <p className="text-sm text-gray">{title.subheading}</p>
    </div>
  );

  return (
    <div>
      {HeaderContent}
      <div className="!w-full h-[300px]">
        <ReactECharts
          opts={{
            renderer: "svg",
          }}
          option={options}
          notMerge={true}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}
