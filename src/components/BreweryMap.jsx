import React, { useEffect } from "react";
import L from "leaflet";
import "../styles/BreweryMap.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

const BreweryMap = ({ position }) => {
  useEffect(() => {
    const map = L.map("map", {
      center: position,
      zoom: 17,
      zoomControl: false
    });
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 19
      }
    ).addTo(map);
    L.marker(position).addTo(map);
    return () => {
      map.remove();
    };
  }, [position]);

  return <div id="map"></div>;
};

export default BreweryMap;
