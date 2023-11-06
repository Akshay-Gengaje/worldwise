import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from "./Footer";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

const Sidebar = () => {
  const { close, setClose } = useSidebar();
  const [isMobileView, setIsMobileView] = useState(false);

  // Add a function to detect mobile view
  const checkMobileView = () => {
    if (window.innerWidth <= 768) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  // Add an event listener to check for mobile view when the component mounts
  useEffect(() => {
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  return (
    <div
      className={`${
        isMobileView && close
          ? "w-14"
          : "flex flex-col items-center pt-12 px-10 pb-14 text-gray-400"
      } relative`}
    >
      {isMobileView && (
        <div className="text-white my-3">
          {close ? (
            <HiOutlineMenuAlt3
              className="text-3xl m-2"
              onClick={() => setClose(!close)}
            />
          ) : (
            <IoClose
              className="text-white text-3xl m-2 absolute top-0 left-0"
              onClick={() => setClose(!close)}
            />
          )}
        </div>
      )}
      {!close || !isMobileView ? (
        <>
          <Logo />
          <AppNav />
          <div className="w-72">
            <Outlet />
          </div>
          <Footer />
        </>
      ) : null}
    </div>
  );
};

export default Sidebar;
