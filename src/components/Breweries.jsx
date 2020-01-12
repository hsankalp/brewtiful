import React, { useState, useEffect } from "react";
import Brewery from "./Brewery";

const Breweries = ({ city }) => {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries/?by_city=${city}`)
      .then(resp => resp.json())
      .then(data => {
        setBreweries(data);
      });
  }, []);

  return (
    <>
      {breweries.map((brewery, idx) => (
        <Brewery key={brewery.id} index={idx} brewery={brewery} />
      ))}
    </>
  );
};

export default Breweries;
