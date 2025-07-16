import React from "react";
import Card from "../base/Card";
import Select from "../base/Select";
import Switch from "../base/Switch";

export default function Privacy() {
  const data = [
    {
      label: "Allow anonymous data sharing for service improvement",
      heading: "Data Sharing",
    },
    {
      label: "Help us improve by sharing usage analytics",
      heading: "Analytics Tracking",
    },
  ];

  return (
    <Card className="space-y-8">
      <div className="space-y-1">
        <p className="font-bold text-2xl ">
          <i className="pi pi-eye mr-2"></i>Privacy Settings
        </p>
        <p className="text-gray text-sm">
          Control your privacy and data sharing preferences
        </p>
      </div>

      <div className="md:w-1/3 w-full">
        <Select
          label={"Profile Visibility"}
          options={["Private", "Friends Only", "Public"]}
        />
      </div>

      <hr className="text-gray-300" />

      {data.map((item) => (
        <div key={item.heading} className="space-y-8">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="font-medium text-lg ">{item.heading}</p>
              <p className="text-gray text-sm">{item.label}</p>
            </div>
            <Switch />
          </div>
          <hr className="text-gray-300" />
        </div>
      ))}
    </Card>
  );
}
