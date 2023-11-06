import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useCities } from "../context/CitiesContext";
import { useGeolocation } from "../hooks/useGeoLocation";

const Map = () => {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [searchParams] = useSearchParams();
  const {
    isLoading: isLoadingPosition,
    position: geoLocationPosition,
    getPosition,
  } = useGeolocation();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if(geoLocationPosition){
      setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng])
    }
  }, [geoLocationPosition]);
  return (
    <div className="flex-1 overflow-hidden relative">
      <button
        className="absolute z-20 bottom-20 right-[50%] bg-green-600 px-2 py-2 rounded-xl uppercase font-bold"
        onClick={getPosition}
      >
        {isLoadingPosition ? "Loading" : "Use Your Position"}
      </button>
      <MapContainer
        center={mapPosition}
        zoom={3}
        scrollWheelZoom={true}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: "10",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities?.map((city) => (
          <Marker position={mapPosition} key={city.id}>
            <Popup>
              <span>{city.emoji} &nbsp;</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={[mapLat || 40, mapLng || 0]} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

export default Map;

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
