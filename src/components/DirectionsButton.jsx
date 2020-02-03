import React from "react";

const DirectionsButton = ({ lat, long }) => {
  return (
    <a
      href={`https://www.google.com/maps/place/${lat},${long}`}
      className="btn btn-outline-dark btn-sm m-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open in Google Maps
    </a>
  );
};

export default DirectionsButton;
