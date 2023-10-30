import React from "react";

const CityItem = ({ city }) => {
  return <li key={city.cityName}>{city}</li>;
};

export default CityItem;
