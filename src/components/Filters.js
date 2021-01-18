import React from "react";

export default function Filters() {
  return (
    <div className="filters">
      <button className="random-button">Random Character</button>
      <form id="filter-form">
        <div>
          <label htmlFor="filter-name">Character name</label>
          <input />
          <button> Search </button>
        </div>
        <fieldset>
          <legend>Status</legend>
          <label>
            <input
              name="status"
              className="status-radio"
              type="radio"
              value=""
              defaultChecked
            />
            All
          </label>
          <label>
            <input
              name="status"
              className="status-radio"
              type="radio"
              value="Alive"
            />
            Alive
          </label>
          <label>
            <input
              name="status"
              className="status-radio"
              type="radio"
              value="Dead"
            />
            Dead
          </label>
          <label>
            <input
              name="status"
              className="status-radio"
              type="radio"
              value="Unknown"
            />
            Unknown
          </label>
        </fieldset>

        <fieldset>
          <legend>Species</legend>
          <label>
            <input
              name="species"
              className="species-radio"
              type="radio"
              value=""
              defaultChecked
            />
            All
          </label>
          <label>
            <input
              name="species"
              className="species-radio"
              type="radio"
              value="Human"
            />
            Human
          </label>
          <label>
            <input
              name="species"
              className="species-radio"
              type="radio"
              value="Alien"
            />
            Alien
          </label>
          <label>
            <input
              name="species"
              className="species-radio"
              type="radio"
              value="Robot"
            />
            Robot
          </label>
          <label>
            <input
              name="species"
              className="species-radio"
              type="radio"
              value="Humanoid"
            />
            Humanoid
          </label>
          <label>
            <input
              name="species"
              className="species-radio"
              type="radio"
              value="Mythological Creature"
            />
            Mythological Creature
          </label>
          <label>
            <input
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
              defaultChecked
            />
            All
          </label>
          <label>
            <input
              name="gender"
              className="gender-radio"
              type="radio"
              value="Female"
            />
            Female
          </label>
          <label>
            <input
              name="gender"
              className="gender-radio"
              type="radio"
              value="Male"
            />
            Male
          </label>
          <label>
            <input
              name="gender"
              className="gender-radio"
              type="radio"
              value="Genderless"
            />
            Genderless
          </label>
          <label>
            <input
              name="gender"
              className="gender-radio"
              type="radio"
              value="Unknown"
            />
            Unknown
          </label>
        </fieldset>
      </form>
    </div>
  );
}
