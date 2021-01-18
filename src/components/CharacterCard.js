import React from "react";

export default function CharacterCard({ image, name, species }) {
  return (
    <div className="card">
      <div className="picture-wrap">
        <img src={image} title={name} alt="character" />
      </div>
      <div className="card-footer">
        <h3 className="character-name">{name}</h3>
        <div>{species}</div>
      </div>
    </div>
  );
}
