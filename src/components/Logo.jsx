import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center ">
      <img src="/icon.png" alt="logo" className="h-12" />
      <Link to="/" className="text-white font-medium text-2xl ml-2 ">
        WorldWise
      </Link>
    </div>
  );
};

export default Logo;
