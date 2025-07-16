import React from "react";
import Card from "../base/Card";
import Button from "../base/Button";
import Select from "../base/Select";
import Input from "../base/Input";

export default function Profile() {
  const ProfileField = [
    {
      label: "Full Name",
      placeholder: "Di",
      type: "input",
    },
    {
      label: "Email Address",
      placeholder: "di@gmail.com",
      type: "input",
    },
    {
      label: "Phone Number",
      placeholder: "+1 (555) 123-4567",
      type: "input",
    },
    {
      label: "Timezone",
      option: ["Estern time", "Central time", "Tokyo", "Paris"],
      type: "select",
    },
    {
      label: "Default Currency",
      option: ["USD - US Dollar", "EUR Euro", "AUD", "CAD"],
      type: "select",
    },
    {
      label: "Language",
      option: ["English", "Spanish", "Latin", "French"],
      type: "select",
    },
  ];

  return (
    <Card className="space-y-8">
      {/* info */}
      <div className="space-y-1">
        <p className="font-bold text-2xl ">
          <i className="pi pi-user mr-2"></i>Profile Information
        </p>
        <p className="text-gray text-sm">
          Update your personal information and preferences
        </p>
      </div>
      {/* change photo */}
      <div className="flex gap-4">
        <div className="w-18 h-18 rounded-full bg-secondary"></div>
        <div className="space-y-1">
          <Button variant="outline" className="">
            <i className="pi pi-camera"></i> Change Photo
          </Button>
          <p className="text-gray text-sm">JPG, GIF or PNG. 5MB max.</p>
        </div>
      </div>
      <hr className="text-gray-300" />
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {ProfileField.map((item) => (
          <div key={item.label}>
            {item.type == "input" && (
              <Input labelUp={item.label} placeholder={item.placeholder} />
            )}{" "}
            {item.type == "select" && (
              <Select label={item.label} options={item?.option} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>{" "}
    </Card>
  );
}
