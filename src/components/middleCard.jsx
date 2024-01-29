import React from "react";
import { FaMapLocation } from "react-icons/fa6";
import { MdAddLocationAlt } from "react-icons/md";
import { AiOutlinePercentage } from "react-icons/ai";
import { FaArrowTrendUp } from "react-icons/fa6";
import TableTransaksi from "./tableTransaksi";

const MiddleCard = () => {
  return (
    <div>
      <div className="mt-2">
        <div className="flex gap-3">
          <div className="flex flex-col w-[25vw] h-[40vh] gap-y-3">
            <div className="bg-white w-full border border-slate-300 flex-1 rounded-md">
              <div className="flex flex-col gap-1 px-5 py-2">
                <h1 className="font-semibold text-base">Locations</h1>
                <p className="text-xs text-slate-400 mb-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="flex flex-row justify-between gap-2 sm:flex-col md:flex-col xl:flex-row lg:flex-col">
                  <div className="flex flex-row gap-2">
                    <FaMapLocation
                      size={50}
                      color="rgb(19 ,78, 74, 1)"
                      className="bg-teal-200 p-2 rounded-md"
                    />
                    <div className="flex flex-col gap-1">
                      <h1 className="font-semibold text-sm">All</h1>
                      <h1 className="font-semibold text-slate-500">56.000</h1>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <MdAddLocationAlt
                      size={50}
                      color="rgb(120 ,53 ,15, 1)"
                      className="bg-amber-200 p-2 rounded-md"
                    />
                    <div className="flex flex-col gap-1">
                      <h1 className="font-semibold text-sm">New</h1>
                      <h1 className="font-semibold text-slate-500">56.000</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white w-full border border-slate-300 flex-1 rounded-md">
              <div className="flex flex-col gap-1 px-5 py-2">
                <h1 className="font-semibold text-base">Analytic Traffic</h1>
                <p className="text-xs text-slate-400 mb-3">
                  Monthly traffic average and comparison.
                </p>
                <div className="flex justify-between gap-2">
                  <div className="flex flex-row gap-2">
                    <AiOutlinePercentage
                      size={50}
                      color="rgb(153 ,27, 27, 1)"
                      className="bg-red-200 p-2 rounded-md"
                    />
                    <div className="flex flex-col gap-1">
                      <h1 className="font-semibold text-xl">54.2%</h1>
                      <div className="flex flex-row gap-2 text-slate-500 items-center text-xs">
                        <FaArrowTrendUp width={20} color="green" />
                        <p>5%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 h-full">
            <TableTransaksi />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleCard;
