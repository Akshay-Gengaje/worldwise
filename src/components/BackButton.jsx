import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      type={"outlined"}
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
};

export default BackButton;
