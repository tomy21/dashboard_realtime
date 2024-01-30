import React, { useEffect, useState } from "react";
import ChartAreaComponent from "./chart/chartArea";
import io from "socket.io-client";
import { getTransactions, getSummaryWeekly } from "../utils/api";
import DateRangeComponent from "./rangeDate";

const socket = io("https://api-testing-murex.vercel.app");
// const socket = io("http://127.0.0.1:3005");

socket.on("getTransactions", (results) => {
  // setTotalData(results);
  console.log({ dataSocket: results });
});

const formatNumber = (num) => {
  const suffixes = ["", "K", "Mio", "B", "T"];
  const tier = (Math.log10(Math.abs(num)) / 3) | 0;

  if (tier === 0) return num;

  const suffix = suffixes[tier];
  const scale = Math.pow(10, tier * 3);

  const scaled = num / scale;

  return scaled + " " + suffix;
};

const TopCard = () => {
  const [totalData, setTotalData] = useState(0);
  const [totalWeekly, setTotalWeekly] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        socket.on("getTransactions", (results) => {
          setTotalData(results);
          console.log({ dataSocket: results });
        });
        socket.on("summaryDataWeekly", (weekly) => {
          setTotalWeekly(weekly);
          console.log({ dataSocket3: weekly });
        });
        const transactions = await getTransactions();
        const summary = await getSummaryWeekly();
        setTotalData(transactions);
        setTotalWeekly(summary);
      } catch (error) {
        console.log({ Data_error: error });
      }
    };

    fetchData();

    // return () => {
    //   socket.off("getTransactions");
    //   socket.off("summaryDataWeekly");
    // };
  }, []);

  return (
    <div>
      <div className="flex gap-3">
        <div className="flex-1 w-[70vw] h-[65vh] border border-slate-300 rounded-lg">
          <ChartAreaComponent />
        </div>
        <div className="flex flex-col w-[30vw] h-[65vh] gap-y-5">
          <div className="flex flex-col border border-slate-300 rounded-lg p-2">
            <div className="flex flex-col h-[10vh]">
              <h3 className="font-semibold text-base">Traffic</h3>
              <h1 className="text-xs text-slate-400">
                Real-time traffic across all locations.
              </h1>
            </div>
            <div className="flex justify-between items-center px-10 py-4">
              {totalData && totalData.data.in && (
                <div>
                  <h3 className="font-semibold text-base">IN</h3>
                  <h3>{formatNumber(totalData.data.in.total)}</h3>
                </div>
              )}

              {totalData && totalData.data.pay[0] && (
                <div className="border-l border-r border-slate-400 px-16">
                  <h3 className="font-semibold text-base">PAY</h3>
                  <h3>{formatNumber(totalData.data.pay[0].total)}</h3>
                </div>
              )}

              {totalData && totalData.data.out[0] && (
                <div>
                  <h3 className="font-semibold text-base">OUT</h3>
                  <h3>{formatNumber(totalData.data.out[0].total)}</h3>
                </div>
              )}
            </div>
          </div>

          <div className="relative flex flex-col border border-slate-300 rounded-lg p-2 h-full">
            <div className="flex flex-col">
              <h3 className="font-semibold text-base">Volume Vs Amount</h3>
              <h1 className="text-xs text-slate-400">
                Current week periode {<DateRangeComponent />}
              </h1>
            </div>
            <div className="flex justify-between items-center py-4 text-center z-10">
              {totalWeekly && totalWeekly.data.traffic && (
                <div className="border-r w-1/2 border-slate-400">
                  <h3 className="font-semibold text-base">Traffic</h3>
                  <h3>{totalWeekly.data.traffic.totalTransactions}</h3>
                </div>
              )}
              {totalWeekly && totalWeekly.data.amount && (
                <div className="w-1/2">
                  <h3 className="font-semibold text-base">Amount</h3>
                  <h3>{formatNumber(totalWeekly.data.amount.totalAmount)}</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
