import React, { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import { useAuth } from "../context/FakeAuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, isAuthenticated, error } = useAuth();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }
  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
  }, [isAuthenticated]);
  return (
    <div className="h-full w-full">
      <PageNav />
      <div className="h-full flex justify-center items-center">
        <form className="border border-black p-7 flex flex-col bg-slate-400 bg-opacity-20 rounded-lg px-12">
          <label htmlFor="email" className="text-white font-semibold">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            className="mb-5 p-2 rounded-lg mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 bg-gray-100 rounded-md"
            onClick={handleSubmit}
          >
            Login
          </button>
          {error && <span className="text-red-500 mt-2">{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
