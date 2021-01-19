import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        let request = await fetch(url);
        let response = await request.json();

        if (response.error) {
          return setError(response.error);
        }
        const { results } = response;
        setData(results);
        setLoading(false);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }
    fetchData();
  }, [url]);
  return { loading, data, error };
}
