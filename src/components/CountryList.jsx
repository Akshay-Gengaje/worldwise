import React from "react";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../context/CitiesContext";

const CityList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className="w-72  list-none overflow-y-scroll overflow-x-hidden grid gap-2 grid-cols-2">
      {countries?.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
};

export default CityList;
