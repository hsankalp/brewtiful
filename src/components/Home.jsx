import React, { useState } from "react";
import "../styles/Home.css";
import Breweries from "./Breweries";
import Search from "./Search";
import BreweryMap from "./BreweryMap";

const Home = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("Ann Arbor");
  const [position, setPosition] = useState([42.25362, -83.7343]);

  const handleSearch = (name, location) => {
    setName(name);
    setLocation(location);
  };

  const handleSelect = location => {
    setPosition(location);
  };

  return (
    <div className="row">
      <div className="col-lg-4 col-sm-12 breweries">
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
