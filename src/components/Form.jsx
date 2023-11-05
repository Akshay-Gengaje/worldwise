import React from "react";
import Button from "./Button";

import BackButton from "./BackButton";

const Form = () => {

  return (
    <div>
      <form action="/" className="flex flex-col gap-1">
        <label htmlFor="city" className="w-full">
          City Name
        </label>
        <input
          type="text"
          placeholder="Enter city name"
          name="city"
          id="city"
          className="p-1 rounded-lg"
        />
        <label htmlFor="date">When did you go to ?</label>
        <input
          type="datetime-local"
          placeholder="Enter city name"
          name="date"
          id="date"
          className="p-1 rounded-lg"
        />
        <label htmlFor="notes">Notes about your trip to</label>
        <textarea
          type="text"
          placeholder=""
          name="notes"
          id="notes"
          className="w-full rounded-lg p-1"
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
