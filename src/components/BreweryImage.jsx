import React, { useState } from "react";
import { getImageById } from "../helper/utility";
import defaultImage from "../images/default-image.jpg";

const BreweryImage = ({ id }) => {
  const [imageUrl, setImageUrl] = useState(
    `https://picsum.photos/id/${getImageById(id)}/200/200`
  );

  const setDefaultImg = () => {
    setImageUrl(defaultImage);
  };

  return <img src={imageUrl} alt="beer" onError={setDefaultImg}></img>;
};

export default BreweryImage;
