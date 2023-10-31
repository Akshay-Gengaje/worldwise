import React from "react";

const CountryItem = ({ country }) => {
  return (
    <li className="flex justify-around items-center w-full h-20 bg-dark-2 mb-2 p-1 rounded-lg ">
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
};

export default CountryItem;
