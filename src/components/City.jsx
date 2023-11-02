import React from "react";
import { useParams } from "react-router-dom";

const City = () => {
  const { id } = useParams();
  return <h1 className="text-center">City {id}</h1>;
};

export default City;
