import { useState, useEffect } from "react";

export const useFetch = (url, dependencies) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    console.log("Fetching data");
    fetch(url)
      .then(resp => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(true);
        setIsLoading(false);
      });
  }, [url, dependencies]);

  return [data, isLoading, error];
};
