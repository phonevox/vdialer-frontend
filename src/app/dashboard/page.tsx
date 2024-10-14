"use client"

import SideNav from "@/components/custom/side-nav";
import { usePathname } from "next/navigation";
import React from "react";


const Dashboard = () => {
  const pathName = usePathname();
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="h-full w-full xborder-2 border-red-900 bg-zinc-50">
        <header className="flex px-4 items-center border-b border-zinc-300 min-h-16 max-h-16">
          <h1>{pathName}</h1>
        </header>
        <p>teste</p>
      </div>
    </div>
  );
};

export default Dashboard;
