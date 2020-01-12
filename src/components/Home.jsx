import React from "react";
import "../styles/Home.css";
import Breweries from "./Breweries";

const Home = () => {
  return (
    <div className="container">
      <input type="text" className="form-control" placeholder="Search"></input>
      <Breweries />
    </div>
  );
};

export default Home;
