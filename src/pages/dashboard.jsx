import React from "react";
import TopCard from "../components/topCard";
import MiddleCard from "../components/middleCard";
import Headers from "../components/headers";

const Dashboard = () => {
  return (
    <div>
      <div className="container m-auto">
        <Headers />
        <div className="flex flex-col py-3 gap-y-3">
          <TopCard />
          <MiddleCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
