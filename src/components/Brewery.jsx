import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faMapMarkerAlt,
  faPhoneAlt,
  faDirections,
  faCompass
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Brewery.css";
import { capitalizeFirstLetter } from "../capitalizeFirstLetter";

const Brewery = ({ brewery, index, onSelect }) => {
  const [imageUrl] = useState(
    `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/200/200`
  );

  return (
    <>
      {brewery && (
        <div className="card brewery-card">
          <div className="d-flex flex-wrap">
            <div className="flex-item p-2">
              <img src={imageUrl} alt="beer"></img>
            </div>
            <div className="flex-item p-2">
              <h5 className="brewery-name">
                {index + 1}. {brewery.name}
              </h5>
              <p>{capitalizeFirstLetter(brewery.brewery_type)} brewery</p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {brewery.street}
                <br></br>
                {brewery.city}, {brewery.state}
                <br></br>
                {brewery.postal_code}
              </p>
              {brewery.phone && (
                <p>
                  <a href={`tel:${brewery.phone}`}>
                    <FontAwesomeIcon icon={faPhoneAlt} /> {brewery.phone}
                  </a>
                </p>
              )}
              <p>
                {brewery.website_url && (
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                )}{" "}
                <a href={brewery.website_url}>{brewery.website_url}</a>
              </p>
              {brewery.latitude && brewery.longitude && (
                <button
                  className="btn btn-sm btn-dark location-button"
                  onClick={() => onSelect(brewery)}
                >
                  <FontAwesomeIcon icon={faCompass} /> Location
                </button>
              )}
              {brewery.latitude && brewery.longitude && (
                <a
                  href={`https://www.google.com/maps/place/${brewery.latitude},${brewery.longitude}`}
                  className="btn btn-sm btn-dark m-3 directions-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faDirections} /> Get Directions
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
