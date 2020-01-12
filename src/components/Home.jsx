import React, { useState } from "react";
import "../styles/Home.css";
import Breweries from "./Breweries";
import Search from "./Search";
import BreweryMap from "./BreweryMap";
import { properties } from "../properties";

const Home = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState(properties.defaultCity);
  const [position, setPosition] = useState();

  const handleSearch = (name, location) => {
    setName(name);
    setLocation(location);
  };

  const handleSelect = location => {
    setPosition(location);
  };

  return (
    <div className="row">
      <div className="col-lg-5 col-sm-12 breweries">
        <Search onSearch={handleSearch} />
        <Breweries name={name} city={location} onSelect={handleSelect} />
      </div>
      <div className="col-lg-7 col-sm-12">
        <BreweryMap position={position} />
      </div>
    </div>
  );
};

export default Home;
