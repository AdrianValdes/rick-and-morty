import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [maxNumber, setMaxNumber] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        let request = await fetch(url);
        let response = await request.json();
        if (response.error) {
          setLoading(false);
          return setError(response.error);
        }
        if (response.info) {
          setMaxNumber(response.info.count);
        }
      
        setData(response);
        setLoading(false);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return { loading, data, error, maxNumber };
}
