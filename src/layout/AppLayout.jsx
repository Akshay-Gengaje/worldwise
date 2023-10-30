import React from "react";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
const AppLayout = () => {
  return (
    <div className="h-screen overscroll-y-none flex relative">
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
