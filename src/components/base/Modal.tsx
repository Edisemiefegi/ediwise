"use client";

import React, { Children, ReactNode, useState } from "react";
import Card from "@/components/base/Card";
import Button from "@/components/base/Button";

type HeaderType = {
  heading: string;
  text?: string;
  icon?: string;
};



interface Props {
  onClose?: () => void;
  header?: HeaderType;
  fullScreen?: boolean;
  className?: string;
  footer?: ReactNode;
  children?: ReactNode;
}

export default function Modal({
  onClose,
  header,
  footer,
  children,
  fullScreen,
}: Props) {
  const fullScreenClass = fullScreen ? "h-screen" : "md:max-h-[90vh]";

  return (
    <div
      className="fixed z-40 inset-0 h-full w-full    bg-black/60  "
      onClick={onClose}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto md:w-1/2 p-2  w-full"
      >
        <Card
          className={`${fullScreenClass} "relative bg-white  dark:bg-gray-900 space-y-6 max-h-[90vh]  "`}
        >
          <div className="flex  justify-between items-center">
            <div>
              <div className="font-medium  text-lg space-x-1">
                <i className={header?.icon}></i> <span> {header?.heading}</span>
              </div>
              <div>
                <p className="text-sm text-gray">{header?.text}</p>
              </div>
            </div>

            <div>
              <i className="pi pi-times cursor-pointer" onClick={onClose}></i>
            </div>
          </div>
          <div className="flex-1 max-h-[60vh]   overflow-y-auto">
  
            {children}
        
          </div>
      <div >{footer}</div>
        </Card>{" "}
      </div>
    </div>
  );
}
