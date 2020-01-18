import React, { useRef } from "react";
import "../styles/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ onSearch }) => {
  const nameEl = useRef("");
  const locationEl = useRef("");

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(nameEl.current.value, locationEl.current.value);
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
            ref={nameEl}
          />
        </div>
        <div className="search-item">
          <input
            type="text"
            className="form-control"
            id="brewery-location"
            placeholder="&#xf041;  Search by city"
            ref={locationEl}
          />
        </div>
        <div className="search-button">
          <button type="submit" className="btn btn-dark">
            <FontAwesomeIcon icon={faSearch} />{" "}
            <span className="search-button-text">Search</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
