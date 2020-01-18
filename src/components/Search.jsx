import React, { useRef, useEffect } from "react";
import "../styles/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ onSearch }) => {
  const nameRef = useRef("");
  const locationRef = useRef("");

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(nameRef.current.value, locationRef.current.value);
  };

  return (
    <>
      <form className="search-box" onSubmit={handleSubmit}>
        <div className="search-item">
          <input
            type="text"
            className="form-control"
            id="brewery-name"
            placeholder="&#xf0fc;  Find breweries"
            ref={nameRef}
          />
        </div>
        <div className="search-item">
          <input
            type="text"
            className="form-control"
            id="brewery-location"
            placeholder="&#xf041;  in your city"
            ref={locationRef}
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
