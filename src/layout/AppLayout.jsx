import React from "react";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import SidebarProvider from "../context/SidebarContext";
import User from "../components/User";
const AppLayout = () => {
  return (
    <div className="h-screen overscroll-y-none flex relative">
      <SidebarProvider>
        <Sidebar />
        <Map />
      </SidebarProvider>
    </div>
  );
};

export default AppLayout;
