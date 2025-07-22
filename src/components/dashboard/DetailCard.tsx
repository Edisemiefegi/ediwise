import React from "react";
import Card from "../base/Card";
import Button from "../base/Button";

type detailType = {
  heading?: string;
  icon?: any;
  date?: string;
  button?: string;
  text?: string;
  amount?: number;
  icon2?: string;
  icon3?: string;
  subheading?: string;
  progress?: string | any;
};

interface Props {
  detail?: detailType;
}

export default function DetailCard({ detail }: Props) {
  return (
    <Card className="space-y-6">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <Button  className={`${detail?.icon.bg} `}>
            <i className={detail?.icon.name}></i>
          </Button>
          <div>
            <p className="font-semibold text-lg"> {detail?.heading}</p>
            <p className="text-sm text-gray">
              <i className="pi pi-receipt"></i> {detail?.subheading}
            </p>
          </div>
        </div>
        <i className={detail?.icon2}></i>
      </div>

      <div className="flex justify-between">
        <p>{detail?.text}</p>
        <p className="text-xl text-green font-bold">
          {" "}
          {detail?.amount && `$ ${detail?.amount}`}
        </p>
      </div>

      {detail?.progress && (
        <div className="space-y-2">
          <div className="flex justify-between">
            <p className="text-sm text-gray"> {detail.progress.name}</p>{" "}
            <p className="text-sm text-error"> {detail.progress.range}</p>
          </div>
          <div className=" rounded-full overflow-hidden bg-secondary w-full">
            <div className="bg-primary  p-1 w-1/2"></div>
          </div>
        </div>
      )}

      <hr className="text-gray-300" />

      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Button rounded size="small" className="text-xs">
            {detail?.button}
          </Button>
          <p className="text-sm text-gray">{detail?.date}</p>
        </div>
        <i className={detail?.icon3}></i>
      </div>
    </Card>
  );
}
