import React, { useState } from "react";
import "../styles/Search.css";

const Search = props => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.onSearch(name, location);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleLocationChange = e => {
    setLocation(e.target.value);
  };

  return (
    <>
      <form className="search-box" onSubmit={handleSubmit}>
        <div className="search-item">
          <input
            type="text"
            className="form-control"
            id="brewery-name"
            placeholder="&#xf0fc;  Search breweries"
            onChange={handleNameChange}
          />
        </div>
        <div className="search-item">
          <input
            type="text"
            className="form-control"
            id="brewery-location"
            placeholder="&#xf041;  Search by city"
            onChange={handleLocationChange}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-dark search-button">
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
