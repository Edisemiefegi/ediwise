"use client";

import ReactECharts from "echarts-for-react";
import React, { useMemo } from "react";

type dataType = {
  name: string;
  value: number;
};

interface LineChartProps {
  data?: Array<dataType>;
  title?: any;
  series?: string;
}

export default function PieChart({
  data,
  title,
  series = "full",
}: LineChartProps) {
  const full = useMemo(() => {
    return {
      type: "pie",
      data: data || [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    };
  }, [data]);

  const half = useMemo(() => {
    return {
      type: "pie",
      data: data || [],
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
    };
  }, [data]);
  // Line Chart Options
  const options = useMemo(
    () => ({
      // title: title,
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },

      series: series == "full" ? full : half || [],
    }),
    [data, title]
  );

  const HeaderContent = (
    <div className=" ">
      <p className="text-xl font-semibold "><i className="pi pi-bullseye mr-2"></i>{title.name} </p>
      <p className="text-sm text-gray">{title.subheading}</p>
    </div>
  );

  return (
    <div className="space-y-4">
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
