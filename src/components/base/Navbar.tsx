import React  from "react";
import Button from "./Button";
import Tab from "@/components/base/Tab";

interface Props {
  setShowNavbar?: (value: boolean) => void;
}

export default function Navbar({ setShowNavbar }: Props) {
  const tabMenu = [
    {
      name: "Main Navigation",
      tabs: [
        {
          path: "/dashboard",
          value: "dashboard",
          label: (
            <>
              <i className="pi pi-objects-column"></i> Dashboard
            </>
          ),
        },
        {
          path: "/accounts",
          value: "Accounts",
          label: (
            <>
              <i className="pi pi-credit-card"></i> Accounts
            </>
          ),
        },
        {
          path: "/transactions",
          value: "Transactions",
          label: (
            <>
              <i className="pi pi-arrow-right-arrow-left"></i> Transactions
            </>
          ),
        },
        {
          path: "/budgets",
          value: "Budget",
          label: (
            <>
              <i className="pi pi-receipt"></i> Budget
            </>
          ),
        },
        {
          path: "/goals",
          value: "Goals",
          label: (
            <>
              <i className="pi pi-bullseye"></i> Goals
            </>
          ),
        },
        {
          path: "/investments",
          value: "Investments",
          label: (
            <>
              <i className="pi pi-chart-line"></i> Investments
            </>
          ),
        },
        {
          path: "/reports",
          value: "Reports",
          label: (
            <>
              <i className="pi pi-book"></i> Reports
            </>
          ),
        },
      ],
    },
    {
      name: "Account",
      tabs: [
        {
          path: "/settings",
          value: "Settings",
          label: (
            <>
              <i className="pi pi-cog"></i> Settings
            </>
          ),
        },
      ],
    },
  ];

  return (
    <nav className=" bg-secondary h-screen xl:w-1/5 lg:w-[29%] md:w-1/3 w-2/3 fixed border-r border-gray-300">
      <div className="border-b p-6 border-gray-300 flex gap-2">
        <Button size="small">
          <i className="pi pi-wallet "></i>
        </Button>
        <p className="flex flex-col ">
          <span className="font-medium ">EdiWise</span>
          <span className="text-xs text-gray">Financial Hub</span>
        </p>
      </div>
      <div className="w-full p-3 space-y-6 ">
        {tabMenu.map((tab) => (
          <div key={tab.name}>
            <p className="text-sm  text-gray mb-1.5 ml-3">{tab.name}</p>
            <Tab
            setShowNavbar={setShowNavbar}
              activeTabClass="bg-primary text-white"
              className="flex w-full flex-col items-start"
              options={tab.tabs}
            ></Tab>
          </div>
        ))}
      </div>
    </nav>
  );
}
