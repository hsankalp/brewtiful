import React, { useRef, useState, useEffect } from "react";
import "../styles/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDebounce } from "../hooks/DebounceHook";
import { properties } from "../properties";

const Search = ({ onSearch }) => {
  const [name, setName] = useState("");
  const locationRef = useRef("");
  const [suggestions, setSuggestions] = useState([]);

  const searchText = useDebounce(name, 500);

  useEffect(() => {
    fetch(`${properties.breweryUrl}/autocomplete?query=${searchText}`)
      .then(resp => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json();
      })
      .then(data => {
        setSuggestions(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [searchText]);

  const handleChange = e => {
    setName(e.target.value);
    e.target.value.trim().length == 0 && setSuggestions([]);
  };

  const handleSuggestionClick = suggestion => {
    onSearch(suggestion, locationRef.current.value);
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
