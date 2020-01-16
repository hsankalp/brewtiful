import React, { useState, useEffect } from "react";
import Brewery from "./Brewery";
import "../styles/Breweries.css";
import { getBreweries } from "../API/BreweriesAPI";

const Breweries = ({ name, city, filter }) => {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    console.log("Fetching breweries ", name, city, filter);
    getBreweries(name, city, filter)
      .then(data => setBreweries(data))
      .catch(err => alert(err));
  }, [name, city, filter]);

  return (
    <>
      {breweries.length !== 0 ? (
        breweries.map((brewery, idx) => (
          <Brewery key={brewery.id} index={idx} brewery={brewery} />
        ))
      ) : (
        <h5 className="error-message">{`No Results for ${name} ${city} ${filter}`}</h5>
      )}
    </>
  );
};

export default Breweries;
