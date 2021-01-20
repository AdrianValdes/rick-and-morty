import React from "react";
import CharacterCard from "./CharacterCard";
export default function CharactersList({ data }) {
  if (data === undefined) return <p>No results...</p>;

  return (
    <main className="content">
      <div className="characters-grid">
        {data.results === undefined ? (
          <CharacterCard {...data} key={data.id} />
        ) : (
          data.results.map((character) => (
            <CharacterCard {...character} key={character.id} />
          ))
        )}
      </div>
    </main>
  );
}
