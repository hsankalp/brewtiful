import React from "react";
import Brewery from "./Brewery";
import { useFetch } from "../hooks/FetchHook";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { properties } from "../properties";
import "../styles/Breweries.css";

const Breweries = ({ name, city, filter }) => {
  const filterToApply = filter === "all" ? "" : filter;
  const url = `${properties.breweryUrl}?by_name=${name}&by_city=${city}&by_type=${filterToApply}&per_page=20`;

  const [data, isLoading, error] = useFetch(url);

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage />;

  const getBreweries = breweries => {
    if (breweries) {
      if (breweries.length !== 0)
        return breweries.map((brewery, idx) => (
          <Brewery key={brewery.id} index={idx} brewery={brewery} />
        ));
      else
        return (
          <div className="no-results-message">
            <h5>
              No results for {name} {city} {filter}
            </h5>
          </div>
        );
    }
  };

  return <>{getBreweries(data)}</>;
};

export default Breweries;
