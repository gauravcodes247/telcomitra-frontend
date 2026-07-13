import React from "react";
import SideBar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div className="flex h-screen">
        <SideBar />

        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 overflow-y-auto bg-gray-950 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
