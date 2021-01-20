import { useCallback, useEffect, useRef, useState } from "react";
import "../style/App.css";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import { useFetch } from "../useFetch";
import Error from "./Error";
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
  const [element, setElement] = useState(null);
  const { loading, data, error, maxNumber } = useFetch(url);

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

  const handleRandomFetch = () => {
    let randomCharacterIndex = Math.floor(Math.random() * maxNumber);
    let url = `https://rickandmortyapi.com/api/character/${randomCharacterIndex}`;

    setUrl(url);
  };

  if (loading) {
    return (
      <h2 className="content" style={{ color: "white" }}>
        Loading...
      </h2>
    );
  }

  return (
    <>
      <Filters
        name={name}
        handleFiltering={handleFiltering}
        handleSetName={handleSetName}
        filters={filters}
        handleRandomFetch={handleRandomFetch}
      />
      {error ? <Error error={error} /> : <CharactersList data={data} />}
      <div ref={setElement} className="buttonContainer">
        <button className="buttonStyle">Load More</button>
      </div>
    </>
  );
}

export default App;
