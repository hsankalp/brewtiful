import React, { useRef, useState } from "react";
import "../styles/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "../hooks/FetchHook";
import { useDebounce } from "../hooks/DebounceHook";
import { properties } from "../properties";
import { useEffect } from "react";

const Search = ({ onSearch }) => {
  const [name, setName] = useState("");
  const locationRef = useRef("");
  const nameRef = useRef("");
  const [suggestions, setSuggestions] = useState();

  const searchText = useDebounce(name, 500);

  let [data] = useFetch(
    `${properties.breweryUrl}/autocomplete?query=${searchText}`,
    searchText
  );

  useEffect(() => {
    setSuggestions(data);
  }, [data]);

  const handleChange = e => {
    setName(e.target.value);
  };

  let handleSuggestionClick = suggestion => {
    setSuggestions([]);
    onSearch(suggestion, locationRef.current.value);
  };

  let handleSubmit = e => {
    e.preventDefault();
    setSuggestions([]);
    setName("");
    onSearch(nameRef.current.value, locationRef.current.value);
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
          ref={nameRef}
        />
        {suggestions && suggestions.length !== 0 && (
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
