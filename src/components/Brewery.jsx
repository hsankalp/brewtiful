import React from "react";
import "../styles/Brewery.css";

const Brewery = ({ brewery, index }) => {
  const randomNumber = Math.floor(Math.random() * 200);
  return (
    <>
      {brewery && (
        <div className="card">
          <div className="d-flex flex-wrap">
            <div className="flex-item p-2">
              <img
                src={`https://picsum.photos/id/${randomNumber}/200/200`}
                alt="beer"
              ></img>
            </div>
            <div className="flex-item p-2">
              <h4>
                {index + 1}. {brewery.name}
              </h4>
              <p>
                {brewery.brewery_type.replace(
                  brewery.brewery_type.charAt(0),
                  brewery.brewery_type.charAt(0).toUpperCase()
                )}{" "}
                brewery
              </p>
              <p>
                Location: {brewery.street}, {brewery.city}, {brewery.state} -
                {brewery.postal_code}
              </p>
              <p>Phone: {brewery.phone}</p>
              <p>
                Website <a href={brewery.website_url}>{brewery.website_url}</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Brewery;
