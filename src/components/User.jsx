import React from "react";
import { useAuth } from "../context/FakeAuthContext";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    if (user) {
      logout();
      navigate("/");
    } else {
    }
  };
  return (
    <div className="absolute right-5 top-5 z-20 p-1 min-w-fit rounded-lg text-white bg-dark-1 flex justify-between items-center overflow-scroll">
      <img src={user.avatar} alt="" className="rounded-full w-10 ml-2 mr-1" />
      <span>Welcome, {user.name}</span>
      <button
        className="bg-dark-2 rounded-lg mx-2 p-1  text-gray-200 font-semibold uppercase"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
};

export default User;
