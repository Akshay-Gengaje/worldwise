import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Logo from "./Logo";
const PageNav = () => {
  const [close, setClose] = useState(false);

  return (
    <nav className="absolute top-0 left-0 h-32 w-full flex items-center">
      <div className="flex-1">
        <div className="sm:mx-16 mx-2 flex items-center justify-between">
          {/* Logo  */}
          <Logo />

          {/* Menu Button for desktop view */}
          <ul className="hidden sm:gap-8 sm:flex">
            <li>
              <NavLink
                className="text-white uppercase font-semibold hover:text-blue-400"
                to="/product"
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white uppercase font-semibold hover:text-blue-400"
                to="/pricing"
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                className="bg-green-600 px-2 py-1 m-5 uppercase rounded-md hover:bg-green-700 font-bold button"
                to="/login"
              >
                <button>Login</button>
              </NavLink>
            </li>
          </ul>
          {/* Menu Button for mobile view */}
          <div className="sm:hidden">
            {close ? (
              <div className="fixed top-0 left-0 bg-black w-full h-full">
                <IoClose
                  className="text-white mx-5 text-3xl fixed right-0 top-12 "
                  onClick={() => setClose(!close)}
                />
                <ul className="flex flex-col justify-center items-center w-full h-screen gap-7">
                  <li>
                    <NavLink
                      className="text-white uppercase font-semibold hover:text-blue-400 active:text-blue-400"
                      to="/product"
                    >
                      Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-white uppercase font-semibold hover:text-blue-400 active:text-blue-400"
                      to="/pricing"
                    >
                      Pricing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="bg-green-600 px-2 py-1 m-5 uppercase rounded-md hover:bg-green-700 font-bold"
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              <HiOutlineMenuAlt3
                className="text-white mx-5 text-2xl"
                onClick={() => setClose(!close)}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PageNav;
