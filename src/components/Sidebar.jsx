import React, { useState } from "react";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from "./Footer";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Outlet } from "react-router-dom";
const Sidebar = () => {
  const [close, setClose] = useState(true);

  return (
    <div
      className={`${
        close
          ? "w-14"
          : "flex flex-col items-center pt-12 px-20 pb-14 text-gray-400 w-full sm:w-fit"
      } relative`}
    >
      {!close ? (
        <>
          <IoClose
            className="text-white text-3xl m-2 absolute top-0 left-0"
            onClick={() => {
              setClose(!close);
            }}
          />
          <Logo />
          <AppNav />
          <Outlet />
          <Footer />
        </>
      ) : (
        <div className="text-white my-3">
          {close && (
            <HiOutlineMenuAlt3
              className="text-3xl m-2"
              onClick={() => setClose(!close)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
