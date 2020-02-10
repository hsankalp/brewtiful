import React, { useState } from "react";
import { getImageById } from "../helper/utility";
import defaultImage from "../images/default-image.jpg";

const BreweryImage = ({ id }) => {
  const [imageUrl, setImageUrl] = useState(
    `https://picsum.photos/id/${getImageById(id)}/150/150`
  );

  const setDefaultImg = () => {
    setImageUrl(defaultImage);
  };

  return (
    <img src={imageUrl} width="150px" alt="beer" onError={setDefaultImg}></img>
  );
};

export default BreweryImage;
