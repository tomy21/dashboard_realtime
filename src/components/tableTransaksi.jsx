// import React from "react";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { getAllData } from "../utils/api";

const socket = io("https://api-testing-murex.vercel.app");
// const socket = io("http://127.0.0.1:3005");

const formatNumber = (num) => {
  const suffixes = ["", "K", "Mio", "B", "T"];
  const tier = (Math.log10(Math.abs(num)) / 3) | 0;

  if (tier === 0) return num;

  const suffix = suffixes[tier];
  const scale = Math.pow(10, tier * 3);

  const scaled = num / scale;

  return scaled + " " + suffix;
};

const formatTime = (dateTimeString) => {
  const dateTimeObject = new Date(dateTimeString);
  const hours = dateTimeObject.getHours();
  const minutes = dateTimeObject.getMinutes();
  const seconds = dateTimeObject.getSeconds();
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export default function TableTransaksi() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        socket.on("dataAllRealtime", (results) => {
          setAllData(results);
          console.log("dataSocket:", results);
        });
        const allData = await getAllData();
        setAllData(allData);
      } catch (error) {
        console.log({ Data_error: error });
      }
    };

    fetchData();

    return () => {
      socket.off("dataAllRealtime");
    };
  }, []);
  console.log({ datanya: allData });
  return (
    <div className="border w-full rounded-md shadow-md border-slate-300 p-1">
      <p className="mb-3 font-semibold px-2 py-1">Table Transactions Current</p>
      <div className=" overflow-x-auto  h-[80vh] max-h-[100vh] p-1">
        <div className="overflow-x-auto">
          {allData.data && allData.data.length > 0 && (
            <table className="table table-zebra text-[12px]">
              <thead className="bg-base-100 ">
                <tr>
                  <th>Transaction No</th>
                  <th>Locations</th>
                  <th>Type</th>
                  <th>In</th>
                  <th>Pay</th>
                  <th>Out</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {allData.data.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.TransactionNo}</td>
                    <td>{transaction.LocationName}</td>
                    <td>{transaction.VehicleType}</td>
                    <td>{formatTime(transaction.InTime)}</td>
                    <td>
                      {transaction.PaymentDate === null
                        ? "00:00"
                        : formatTime(transaction.PaymentDate)}
                    </td>
                    <td>
                      {transaction.OutTime === null
                        ? "00:00"
                        : formatTime(transaction.OutTime)}
                    </td>
                    <td>{formatNumber(transaction.tariff)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
