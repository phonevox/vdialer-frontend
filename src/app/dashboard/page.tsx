import SideNav from "@/components/custom/side-nav";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="h-full w-full bg-zinc-50">
        <p>teste</p>
      </div>
    </div>
  );
};

export default Dashboard;
