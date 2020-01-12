import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faMapMarkerAlt,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Brewery.css";

const Brewery = ({ brewery, index, onSelect }) => {
  const randomNumber = Math.floor(Math.random() * 200);

  const handleClick = brewery => {
    if (brewery.latitude && brewery.longitude) {
      onSelect([brewery.latitude, brewery.longitude]);
    } else {
      alert(`Location not available for ${brewery.name}`);
    }
  };

  return (
    <>
      {brewery && (
        <div className="card brewery-card">
          <div className="d-flex flex-wrap">
            <div className="flex-item p-2">
              <img
                src={`https://picsum.photos/id/${randomNumber}/200/200`}
                alt="beer"
              ></img>
            </div>
            <div className="flex-item p-2">
              <h5 className="brewery-name">
                {index + 1}. {brewery.name}
              </h5>
              <p>
                {brewery.brewery_type.replace(
                  brewery.brewery_type.charAt(0),
                  brewery.brewery_type.charAt(0).toUpperCase()
                )}{" "}
                brewery
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {brewery.street}
                <br></br>
                {brewery.city}, {brewery.state}
                <br></br>
                {brewery.postal_code}
              </p>
              <p>
                <FontAwesomeIcon icon={faPhoneAlt} /> {brewery.phone}
              </p>
              <p>
                {brewery.website_url && (
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                )}{" "}
                <a href={brewery.website_url}>{brewery.website_url}</a>
              </p>
              {brewery.latitude && brewery.longitude && (
                <button
                  className="btn btn-sm btn-dark location-button"
                  onClick={() => handleClick(brewery)}
                >
                  Location
                </button>
              )}
              {brewery.latitude && brewery.longitude && (
                <a
                  href={`https://www.google.com/maps/place/${brewery.latitude},${brewery.longitude}`}
                  className="btn btn-sm btn-dark m-3 directions-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Brewery;
