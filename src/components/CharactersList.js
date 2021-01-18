import React from "react";
import CharacterCard from "./CharacterCard";
export default function CharactersList({ characters }) {
  return (
    <main id="content">
      <div className="characters-grid">
        {characters.map((character) => (
          <CharacterCard {...character} key={character.id} />
        ))}
      </div>
    </main>
  );
}
