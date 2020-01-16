import React, { useState } from "react";
import "../styles/Home.css";
import Breweries from "./Breweries";
import Search from "./Search";
import BreweryMap from "./BreweryMap";
import { properties } from "../properties";
import Filter from "./Filter";
import { LocationContext } from "../context/LocationContext";

const Home = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState(properties.defaultCity);
  const [brewery, setBrewery] = useState();
  const [filter, setFilter] = useState("");

  const handleSearch = (name, location) => {
    setName(name);
    setLocation(location);
  };

  const handleFilter = type => {
    setFilter(type);
  };

  return (
    <div className="row">
      <LocationContext.Provider value={{ brewery, setBrewery }}>
        <div className="col-lg-5 col-sm-12 breweries">
          <Search onSearch={handleSearch} />
          <Filter onFilter={handleFilter} />
          <Breweries name={name} city={location} filter={filter} />
        </div>
        <div className="col-lg-7 col-sm-12">
          <BreweryMap />
        </div>
      </LocationContext.Provider>
    </div>
  );
};

export default Home;
