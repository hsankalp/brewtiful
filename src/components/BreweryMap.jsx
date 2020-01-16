import React, { useEffect, useContext } from "react";
import L from "leaflet";
import "../styles/BreweryMap.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { properties } from "../properties";
import { LocationContext } from "../context/LocationContext";

const BreweryMap = () => {
  const { brewery } = useContext(LocationContext);
  useEffect(() => {
    const map = L.map("map", {
      center: brewery
        ? [brewery.latitude, brewery.longitude]
        : properties.defaultPosition,
      zoom: 17
    });

    L.tileLayer(properties.tileLayer, {
      maxZoom: 19
    }).addTo(map);

    brewery && L.marker([brewery.latitude, brewery.longitude]).addTo(map);
    return () => {
      map.remove();
    };
  }, [brewery]);

  return <div id="map"></div>;
};

export default BreweryMap;
