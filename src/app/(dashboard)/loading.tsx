import React from "react";

export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse  min-h-screen">
      <div className="flex gap-5">
        <div className="p-6 w-9/12 dark:bg-gray-600 bg-gray-200"></div>
        <div className="p-6 w-1/4  dark:bg-gray-600 bg-gray-200"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-20 w-full  dark:bg-gray-600 bg-gray-200"></div>
        <div className="p-20 w-full  dark:bg-gray-600 bg-gray-200"></div>
        <div className="p-20 w-full  dark:bg-gray-600 bg-gray-200"></div>
      </div>
      <div className="p-20 w-full  dark:bg-gray-600 bg-gray-200"></div>
    </div>
  );
}
