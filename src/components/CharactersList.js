import React from "react";
import CharacterCard from "./CharacterCard";
export default function CharactersList({ characters }) {
  if (characters === undefined) return <p>No results...</p>;
  return (
    <main className="content">
      <div className="characters-grid">
        {characters &&
          characters.map((character) => (
            <CharacterCard {...character} key={character.id} />
          ))}
      </div>
    </main>
  );
}
