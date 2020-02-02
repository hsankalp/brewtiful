import React, { useState } from "react";
import { BreweryContext } from "./Context";

const BreweryProvider = ({ children }) => {
  const [brewery, setBrewery] = useState();

  return (
    <BreweryContext.Provider value={{ brewery, setBrewery }}>
      {children}
    </BreweryContext.Provider>
  );
};

export default BreweryProvider;
