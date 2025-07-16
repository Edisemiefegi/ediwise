import React from "react";
import Card from "../base/Card";
import Button from "../base/Button";
import Select from "../base/Select";
import Input from "../base/Input";
import Switch from "../base/Switch";

export default function Security() {


  return (
    <Card className="space-y-8">
      {/* security */}
      <div className="space-y-1">
        <p className="font-bold text-2xl ">
          <i className="pi pi-shield mr-2"></i>Security Settings
        </p>
        <p className="text-gray text-sm">
          Manage your account security and authentication methods
        </p>
      </div>
      {/* two factor */}
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <p className="font-medium text-lg ">Two-Factor Authentication</p>
          <p className="text-gray text-sm">
            Add an extra layer of security to your account
          </p>
        </div>
        <Switch />
      </div>
      <hr className="text-gray-300" />
      {/* login notification */}
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <p className="font-medium text-lg ">Login Notifications</p>
          <p className="text-gray text-sm">
            Get notified when someone logs into your account
          </p>
        </div>
        <Switch />
      </div>
      <hr className="text-gray-300" />
      <div className="md:w-1/3 w-full">
        <Select
          label={"Session Timeout (minutes)"}
          options={["30 minutes", "1 hour", "2 hour", "3 hour"]}
        />
      </div>
      <hr className="text-gray-300" />
      <div className="space-y-4">
        <p className="font-medium text-lg ">Change Password</p>

        <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <Input labelUp={"Current Password"} />

          <Input labelUp={"New Password"} />
        </div>
      </div>
      <div className="">
        <Button variant="outline"> <i className="pi pi-lock"></i>Update Password</Button>
      </div>{" "}
    </Card>
  );
}
