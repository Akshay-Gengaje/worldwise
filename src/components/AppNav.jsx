import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AppNav = () => {
  const [active, setActive] = useState("country");
  return (
    <nav className="mt-12 mb-8">
      <ul className="flex bg-dark-2 rounded-md justify-center items-center p-2 w-48 ">
        <li className=" link">
          <NavLink className="uppercase font-bold p-2 mx-2" to="cities">
            Cities
          </NavLink>
        </li>
        <li className=" link">
          <NavLink className=" uppercase font-bold p-2 mx-2" to="countries">
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
