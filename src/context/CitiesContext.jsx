import React, { createContext, useEffect, useReducer } from "react";
import { useCallback } from "react";

// 1. Create Context
const CitiesContext = createContext();

const BASE_URL = "http://localhost:8000";

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};
const LOADING = "LOADING";
const CITIES_LOADED = "CITIES_LOADED";
const CITY_LOADED = "CITY_LOADED";
const CITY_CREATED = "CITY_CREATED";
const CITY_DELETED = "CITY_DELETED";
const REJECTED = "REJECTED";
function reducer(state, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: true };

    case CITIES_LOADED:
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case CITY_LOADED:
      return { ...state, isLoading: false, currentCity: action.payload };

    case CITY_CREATED:
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case CITY_DELETED:
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

const CitiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cities, isLoading, currentCity, error } = state;

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: LOADING });
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: CITIES_LOADED, payload: data });
      } catch {
        dispatch({
          type: REJECTED,
          payload: "There was an error loading cities...",
        });
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(
    async function getCity(id) {
      if (Number(id) === currentCity.id) return;
      try {
        dispatch({ type: LOADING });
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: CITY_LOADED, payload: data });
      } catch {
        dispatch({ type: REJECTED, payload: "Something went wrong!" });
      }
    },
    [currentCity.id]
  );
  async function createCity(newCity) {
    try {
      dispatch({ type: LOADING });
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json(newCity);
      dispatch({ type: CITY_CREATED, payload: data });
    } catch {
      dispatch({
        type: REJECTED,
        payload: "There is an error occured while creating city",
      });
    }
  }
  async function deleteCity(id) {
    try {
      dispatch({ type: LOADING, payload: true });
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({
        type: CITY_DELETED,
        payload: id,
      });
    } catch {
      dispatch({
        type: REJECTED,
        payload: "There is an error occured while deleting city",
      });
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
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
