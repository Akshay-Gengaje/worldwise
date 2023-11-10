import React, { useEffect, useState } from "react";
import Button from "./Button";

import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const Form = () => {
  const navigate = useNavigate();
  const { createCity, isLoading } = useCities();
  const [lat, lng] = useUrlPosition();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [geocodingError, setGeocodingError] = useState("");

  // Get tomorrow's date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate());
  const tomorrowFormatted = tomorrow.toISOString().split("T")[0];
  useEffect(() => {
    if (!lat && !lng) return;

    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError("");
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();

        if (!data.countryCode)
          throw new Error(
            "That doesn't seem to be a city. Click somewhere else 😉"
          );
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (err) {
        setGeocodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!date && !cityName) return;
    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: {
        lat,
        lng,
      },
    };
    await createCity(newCity);
    navigate("/app/cities");
  }

  if (isLoadingGeocoding) return <Spinner />;

  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <div>
      <form
        action="/"
        className={`${isLoading ? "opacity-20 " : ""} flex flex-col gap-1`}
        onSubmit={handleSubmit}
      >
        <label htmlFor="city" className="w-full">
          City Name
        </label>

        <div className="relative w-full flex items-center">
          <input
            type="text"
            placeholder="Enter city name"
            name="city"
            id="city"
            className="p-1 rounded-lg text-black w-full bg-slate-300"
            value={cityName}
            onChange={() => setCityName(e.target.value)}
          />
          <span className="absolute right-5 text-2xl p-0 shadow-2xl">
            {emoji}
          </span>
        </div>

        <label htmlFor="date">When did you go to ?</label>
        <input
          type="date"
          placeholder="Enter city name"
          name="date"
          id="date"
          className="p-1 rounded-lg text-black bg-slate-300"
          onChange={(e) => setDate(e.target.value)}
          max={tomorrowFormatted}
          required
        />
        <label htmlFor="notes">Notes about your trip to</label>
        <textarea
          type="text"
          placeholder=""
          name="notes"
          id="notes"
          className="w-full rounded-lg p-1 text-black bg-slate-300"
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        />
        <div className="flex justify-between mt-2">
          <Button type="primary">Add</Button>
          <BackButton />
        </div>
      </form>
    </div>
  );
};

export default Form;
