import React, { useEffect } from "react";
import L from "leaflet";
import "../styles/BreweryMap.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { properties } from "../properties";

const BreweryMap = ({ position }) => {
  useEffect(() => {
    const map = L.map("map", {
      center: position || properties.defaultPosition,
      zoom: 17,
      zoomControl: false
    });
    L.tileLayer(properties.tileLayer, {
      maxZoom: 19
    }).addTo(map);
    position && L.marker(position).addTo(map);
    return () => {
      map.remove();
    };
  }, [position]);

  return <div id="map"></div>;
};

export default BreweryMap;
