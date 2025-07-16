import React from "react";
import Card from "../base/Card";
import Button from "../base/Button";
import Select from "../base/Select";
import Input from "../base/Input";
import Switch from "../base/Switch";

export default function Advance() {
  return (
    <Card className="space-y-8">
      <div className="space-y-1">
        <p className="font-bold text-2xl ">Advanced Settings</p>
        <p className="text-gray text-sm">
          Advanced configuration and account management
        </p>
      </div>

      {/* theme */}
      <div className="flex md:flex-row flex-col gap-2 justify-between md:items-center">
        <div className="space-y-1">
          <p className="font-medium text-lg space-x-1">
            <i className="pi pi-sun"></i>
            <span> Theme</span>
          </p>
          <p className="text-gray text-sm">
            Switch between light and dark mode
          </p>
        </div>
        <div className="">
          <Button variant="outline">
            <i className="pi pi-moon"></i>Dark Mode
          </Button>
        </div>
      </div>
      <hr className="text-gray-300" />
      {/* data management */}
      <div className="space-y-4">
        <p className="font-medium text-lg ">Data Management</p>
        <div className="flex md:flex-row flex-col gap-6">
          <Button variant="outline">
            <i className="pi pi-globe"></i>Export My Data
          </Button>
          <Button variant="outline">
            <i className="pi pi-upload"></i>Download Mobile App
          </Button>
        </div>
        <p className="text-gray text-sm">
          Export all your financial data in CSV format or download our mobile
          app for on-the-go access.{" "}
        </p>
      </div>

      <div className="space-y-4">
        <p className="font-medium text-lg text-error ">Danger Zone</p>

        <Button
          variant="outline"
          className="w-full !font-normal !justify-start !border-error text-error "
        >
          <i className="pi pi-exclamation-triangle "></i>These actions are
          permanent and cannot be undone. Please proceed with caution.
        </Button>

        <Button className="!bg-error">
          <i className="pi pi-trash"></i> Delete Account
        </Button>

        <p className="text-gray text-sm">
          Permanently delete your account and all associated data. This action
          cannot be reversed.
        </p>
      </div>
    </Card>
  );
}
