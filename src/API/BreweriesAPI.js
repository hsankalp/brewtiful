import { properties } from "../properties";

export const getBreweries = (name, city, filter) => {
  const filterToApply = filter === "all" ? "" : filter;
  const url = `${properties.breweryUrl}?by_name=${name}&by_city=${city}&by_type=${filterToApply}&per_page=50`;
  return fetch(url).then(resp => {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp.json();
  });
};
