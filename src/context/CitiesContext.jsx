import React, { createContext, useEffect, useState } from "react";

// 1. Create Context
const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  const BASE_URL = "http://localhost:8000";
  useEffect(() => {
    async function fetchcities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        console.log("Something went wrong....");
      } finally {
        setIsLoading(false);
      }
    }
    fetchcities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      console.log("Something went wrong....");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

const useCities = () => {
  const context = React.useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("You are using city context out of the CitiesProvider");
  }
  return context;
};
export { CitiesContext, CitiesProvider, useCities };
