import React from "react";

const Message = ({ message }) => {
  return (
    <p className="text-center text-white font-semibold">
      <span className="mr-1">👋</span>
      {message}
    </p>
  );
};

export default Message;
