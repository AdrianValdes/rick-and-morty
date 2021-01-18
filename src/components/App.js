import { useEffect, useState } from "react";
import "../style/App.css";
import CharactersList from "./CharactersList";
import Filters from "./Filters";

function App() {
  const [characters, setCharacters] = useState([]);

  const url = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    async function getAllCharacters() {
      try {
        let request = await fetch(url);
        let response = await request.json();
        const { results } = response;
        setCharacters(results);
      } catch (error) {
        console.log(error);
      }
    }
    getAllCharacters();
  }, []);

  return (
    <>
      <Filters />
      <CharactersList characters={characters} />
    </>
  );
}

export default App;
