import React from "react";
import PageNav from "../components/PageNav";

const Login = () => {
  return (
    <div className="h-full w-full">
      <PageNav />
      <div className="h-full flex justify-center items-center">
        <form
          action=""
          className="border border-black p-7 flex flex-col bg-slate-400 bg-opacity-20 rounded-lg px-12"
        >
          <label htmlFor="email" className="text-white font-semibold">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            className="mb-5 p-2 rounded-lg mt-2"
          />
          <label htmlFor="password" className="text-white font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="mb-5 p-2 rounded-lg mt-2"
          />
          <button type="submit" className="p-2 bg-gray-100 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
