import React, { useState } from "react";
import "../styles/Home.css";
import Breweries from "./Breweries";
import Search from "./Search";
import BreweryMap from "./BreweryMap";
import Filter from "./Filter";
import BreweryProvider from "../context/BreweryProvider";

const Home = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearch = (name, location) => {
    setName(name);
    setLocation(location);
  };

  const handleFilter = type => {
    setFilter(type);
  };

  return (
    <BreweryProvider>
      <div className="row">
        <div className="col-lg-5 col-sm-12 col-md-12 breweries">
          <Search onSearch={handleSearch} />
          <Filter onFilter={handleFilter} />
          <Breweries name={name} city={location} filter={filter} />
        </div>
        <div className="col-lg-7 col-sm-12 col-md-12">
          <BreweryMap />
        </div>
      </div>
    </BreweryProvider>
  );
};

export default Home;
