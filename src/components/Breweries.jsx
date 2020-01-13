import React, { useState, useEffect } from "react";
import Brewery from "./Brewery";
import "../styles/Breweries.css";
import { properties } from "../properties";

const Breweries = ({ name, city, filter, onSelect }) => {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    const url = `${
      properties.breweryUrl
    }?by_name=${name}&by_city=${city}&by_type=${
      filter === "all" ? "" : filter
    }&per_page=50`;
    console.log(`fetching data from ${url}`);
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setBreweries(data);
      });
  }, [name, city, filter]);

  const handleSelect = (location, name) => {
    onSelect(location, name);
  };

  return (
    <>
      {breweries.length !== 0 ? (
        breweries.map((brewery, idx) => (
          <Brewery
            key={brewery.id}
            index={idx}
            brewery={brewery}
            onSelect={handleSelect}
          />
        ))
      ) : (
        <h5 className="error-message">{`No Results for ${name} ${city} ${filter}`}</h5>
      )}
    </>
  );
};

export default Breweries;
