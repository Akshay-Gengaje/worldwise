import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "./Button";

const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className="h-full w-full text-white bg-dark-2 relative "
      onClick={() => navigate("form")}
    >
      <h1>Map</h1>
      <p>
        Position: {lat}, {lng}
      </p>
      <Button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 50 });
        }}
      >
        Change pos
      </Button>
    </div>
  );
};

export default Map;
