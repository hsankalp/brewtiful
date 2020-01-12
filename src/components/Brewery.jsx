import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faMapMarkerAlt,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Brewery.css";

const Brewery = ({ brewery, index }) => {
  const randomNumber = Math.floor(Math.random() * 200);
  return (
    <>
      {brewery && (
        <div className="card brewery-card">
          <div className="d-flex flex-wrap">
            <div className="flex-item p-2">
              <img
                src={`https://picsum.photos/id/${randomNumber}/250/250`}
                alt="beer"
              ></img>
            </div>
            <div className="flex-item p-2">
              <h4>
                {index + 1}. {brewery.name}
              </h4>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Brewery;
