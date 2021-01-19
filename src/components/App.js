import { useCallback, useEffect, useState } from "react";
import "../style/App.css";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import { useFetch } from "../useFetch";
/* const url = "https://rickandmortyapi.com/api/character/"; */
function App() {
  const [name, setName] = useState("");

  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/");

  const [filters, setFilters] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
  });

  const { loading, data, error } = useFetch(url);

  const handleSetName = (e) => {
    setName(e.target.value);
    setFilters((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFiltering = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const makeArrayFromFilters = useCallback(() => {
    const filtersArray = [];
    for (const key in filters) {
      if (filters[key] !== undefined) {
        filtersArray.push(`${key}=${filters[key]}`);
      }
    }
    return filtersArray;
  }, [filters]);

  useEffect(() => {
    const activeFilters = makeArrayFromFilters(filters);
    let query = activeFilters.join("&");
    let url = `https://rickandmortyapi.com/api/character/?${query}`;

    setUrl(url);
  }, [filters, makeArrayFromFilters]);

  if (loading) {
    return (
      <p className="content" style={{ color: "white" }}>
        Loading...
      </p>
    );
  }

  return (
    <>
      <Filters
        name={name}
        handleFiltering={handleFiltering}
        handleSetName={handleSetName}
        filters={filters}
      />
      {error ? (
        <p className="content" style={{ color: "white" }}>
          {error}
        </p>
      ) : (
        <CharactersList characters={data} />
      )}
    </>
  );
}

export default App;
