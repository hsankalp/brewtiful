import React, { useRef, useState } from "react";
import "../styles/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "../hooks/FetchHook";
import { properties } from "../properties";

const Search = ({ onSearch }) => {
  const [name, setName] = useState("");
  const locationRef = useRef("");
  const [suggestions, setSuggestions] = useState([]);

  const [data] = useFetch(
    `${properties.breweryUrl}/autocomplete?query=${name}`,
    name
  );

  const handleChange = e => {
    setName(e.target.value);
    e.target.value.trim().length != 0
      ? setSuggestions(data)
      : setSuggestions([]);
  };

  const handleSuggestionClick = suggestion => {
    setName(suggestion);
    setSuggestions([]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(name, locationRef.current.value);
    setSuggestions([]);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div className="search-item">
        <input
          type="text"
          value={name}
          className="form-control"
          id="brewery-name"
          placeholder="&#xf0fc;  Find breweries"
          onChange={handleChange}
        />
        {suggestions.length !== 0 && (
          <ul className="suggestions">
            {suggestions.map(suggestion => (
              <li
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion.name)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="search-item">
        <input
          type="text"
          className="form-control"
          id="brewery-location"
          placeholder="&#xf041;  by city"
          ref={locationRef}
        />
      </div>
      <div className="search-button">
        <button type="submit" className="btn btn-dark">
          <FontAwesomeIcon icon={faSearch} />
          <span className="search-button-text"> Search</span>
        </button>
      </div>
    </form>
  );
};

export default Search;
