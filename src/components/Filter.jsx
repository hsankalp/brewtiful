import React, { useState } from "react";
import "../styles/Filters.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { properties } from "../properties";
import { capitalizeFirstLetter } from "../utility";

const Filter = ({ onFilter }) => {
  const [filterCard, setFilterCard] = useState(false);
  const [selected, setSelected] = useState(properties.breweryTypes[0]);

  const handleChange = e => {
    setSelected(e.target.value);
    onFilter(e.target.value);
  };

  const handleClick = () => {
    setFilterCard(!filterCard);
  };

  return (
    <>
      <div className="filter-button">
        <button className="btn btn-dark" onClick={handleClick}>
          <FontAwesomeIcon icon={faFilter} /> Filter
        </button>
      </div>
      {filterCard && (
        <div className="filter-card d-flex flex-wrap">
          {properties.breweryTypes.map(type => (
            <div className="flex-item radio-item" key={type}>
              <input
                value={type}
                type="radio"
                onChange={handleChange}
                checked={selected === type}
              />
              <label className="pl-2">{capitalizeFirstLetter(type)}</label>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Filter;
