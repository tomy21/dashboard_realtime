import React from "react";
import Clock from "./clock";
import ExportButton from "./exportButton";

const Headers = () => {
  return (
    <div>
      <div className="flex justify-between items-center ">
        <div className="flex flex-col my-3">
          <h1 className="font-semibold text-3xl">Dashboard</h1>
          <div className="text-sm text-zinc-500">
            <Clock />
          </div>
        </div>
        <div className="flex flex-row gap-x-3 items-center">
          {/* <div role="tablist" className="tabs tabs-boxed">
            <a role="tab" className="tab tab-active">
              Days
            </a>
            <a role="tab" className="tab">
              Weekly
            </a>
            <a role="tab" className="tab">
              Monthly
            </a>
            <a role="tab" className="tab">
              Yearly
            </a>
          </div> */}
          <div className="dropdown dropdown-hover dropdown-left p-0">
            <div
              tabIndex={0}
              role="button"
              className="btn mr-1 bg-amber-100 text-amber-500 hover:bg-amber-200"
            >
              Export
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="mr-5">
                <ExportButton />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
