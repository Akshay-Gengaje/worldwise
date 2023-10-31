import React from "react";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

const CityItem = ({ city }) => {
  const { cityName, emoji, date } = city;
  return (
    <li className="flex justify-between w-72 bg-dark-2 mb-2 p-1 rounded-lg ">
      <div>
        <span className="h-full  w-2 bg-green-500 mr-2"> &nbsp;</span>
        <span>{emoji}</span>
        <span>{cityName}</span>
      </div>
      <div className="flex items-center">
        <time>({formatDate(date)})</time>
        <button className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center ml-2 pb-[0.20rem] hover:bg-white hover:text-black">
          &times;
        </button>
      </div>
    </li>
  );
};

export default CityItem;
