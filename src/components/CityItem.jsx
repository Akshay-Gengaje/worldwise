import React from "react";
import { Link } from "react-router-dom";
import { useCities } from "../context/CitiesContext";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};

const CityItem = ({ city }) => {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  return (
    <li className="text-white">
      <Link
        className={`${
          id === currentCity.id && "border-2 border-green-600"
        } flex justify-between w-72 bg-dark-2 mb-2 px-1 py-2 rounded-lg`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <div>
          <span className="h-full  w-2 bg-green-500 mr-2"> &nbsp;</span>
          <span>{emoji} &nbsp;</span>
          <span>{cityName}</span>
        </div>
        <div className="flex items-center">
          <time>({formatDate(date)})</time>
          <button className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center ml-2 pb-[0.20rem] hover:bg-white hover:text-black">
            &times;
          </button>
        </div>
      </Link>
    </li>
  );
};

export default CityItem;
