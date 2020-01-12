import React, { useState, useEffect } from "react";
import Brewery from "./Brewery";
import "../styles/Breweries.css";

const Breweries = ({ name, city, onSelect }) => {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    const url = `https://api.openbrewerydb.org/breweries?by_name=${name}&by_city=${city}`;
    console.log(`fetching data from ${url}`);
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setBreweries(data);
      });
  }, [name, city]);

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
        <h5 className="error-message">{`No Results for ${name} ${city}`}</h5>
      )}
    </>
  );
};

export default Breweries;
