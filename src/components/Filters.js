import React from "react";

export default function Filters({
  name,
  handleFiltering,
  handleSetName,
  filters,
}) {
  return (
    <div className="filters">
      <button className="random-button">Random Character</button>
      <form onSubmit={(e) => e.preventDefault()} id="filter-form">
        <div>
          <label htmlFor="filter-name">Character name</label>
          <input name="name" value={name} onChange={handleSetName} />
          {/*  <button type="submit"> Search </button> */}
        </div>
        <fieldset>
          <legend>Status</legend>
          <label>
            <input
              onChange={(e) => handleFiltering(e)}
              checked={filters.status === ""}
              name="status"
              className="status-radio"
              type="radio"
              value=""
            />
            All
          </label>
          <label>
            <input
              onChange={(e) => handleFiltering(e)}
              name="status"
              className="status-radio"
              type="radio"
              value="alive"
              checked={filters.status === "alive"}
            />
            Alive
          </label>
          <label>
            <input
              onChange={(e) => handleFiltering(e)}
              name="status"
              className="status-radio"
              type="radio"
              value="dead"
              checked={filters.status === "dead"}
            />
            Dead
          </label>
          <label>
            <input
              onChange={(e) => handleFiltering(e)}
              name="status"
              className="status-radio"
              type="radio"
              value="unknown"
              checked={filters.status === "unknown"}
            />
            Unknown
          </label>
        </fieldset>

        <fieldset>
          <legend>Species</legend>
          <label>
            <input
              onChange={(e) => handleFiltering(e)}
              checked={filters.species === ""}
              name="species"
              className="species-radio"
              type="radio"
              value=""
            />
            All
          </label>
          <label>
            <input
              onChange={(e) => handleFiltering(e)}
              checked={filters.species === "human"}
              name="species"
              className="species-radio"
              type="radio"
              value="human"
            />
            Human
          </label>
          <label>
            <input
              onChange={(e) => handleFiltering(e)}
              checked={filters.species === "alien"}
              name="species"
              className="species-radio"
              type="radio"
              value="alien"
            />
            Alien
          </label>
          <label>
            <input
              onChange={(e) => handleFiltering(e)}
              checked={filters.species === "robot"}
              name="species"
              className="species-radio"
              type="radio"
              value="robot"
            />
            Robot
          </label>
          <label>
            <input
              onChange={(e) => handleFiltering(e)}
              checked={filters.species === "humanoid"}
              name="species"
              className="species-radio"
              type="radio"
              value="humanoid"
            />
            Humanoid
          </label>
          <label>
            <input
              onChange={(e) => handleFiltering(e)}
              checked={filters.species === "mythological Creature"}
              name="species"
              className="species-radio"
              type="radio"
              value="mythological Creature"
            />
            Mythological Creature
          </label>
          <label>
            <input
              onChange={(e) => handleFiltering(e)}
              checked={filters.species === "unknown"}
              name="species"
              className="species-radio"
              type="radio"
              value="unknown"
            />
            Unknown
          </label>
        </fieldset>
        <fieldset>
          <legend>Gender</legend>
          <label>
            <input
              name="gender"
              className="gender-radio"
              type="radio"
              value=""
              onChange={(e) => handleFiltering(e)}
              checked={filters.gender === ""}
            />
            All
          </label>
          <label>
            <input
              onChange={(e) => handleFiltering(e)}
              checked={filters.gender === "female"}
              name="gender"
              className="gender-radio"
              type="radio"
              value="female"
            />
            Female
          </label>
          <label>
            <input
              onChange={(e) => handleFiltering(e)}
              checked={filters.gender === "male"}
              name="gender"
              className="gender-radio"
              type="radio"
              value="male"
            />
            Male
          </label>
          <label>
            <input
              onChange={(e) => handleFiltering(e)}
              checked={filters.gender === "genderless"}
              name="gender"
              className="gender-radio"
              type="radio"
              value="genderless"
            />
            Genderless
          </label>
          <label>
            <input
              onChange={(e) => handleFiltering(e)}
              checked={filters.gender === "unknown"}
              name="gender"
              className="gender-radio"
              type="radio"
              value="unknown"
            />
            Unknown
          </label>
        </fieldset>
      </form>
    </div>
  );
}
