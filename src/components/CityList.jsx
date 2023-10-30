import React from "react";
import Spinner from "./Spinner";
import CityItem from "./CityItem";

const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  return (
    <ul className="">
      {cities.map((city) => (
        <CityItem city={city} />
      ))}
    </ul>
  );
};

export default CityList;
