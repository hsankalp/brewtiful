import React, { useState } from "react";
import "../styles/Home.css";
import Breweries from "./Breweries";
import Search from "./Search";
import Filter from "./Filter";

const Home = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("Ann Arbor");

  const handleSearch = (name, location) => {
    setName(name);
    setLocation(location);
  };

  return (
    <div className="container">
      <Search onSearch={handleSearch} />
      <Filter />
      <Breweries name={name} city={location} />
    </div>
  );
};

export default Home;
