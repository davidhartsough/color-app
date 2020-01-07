import React, { useState } from "react";
import { generateRandomColor } from "./utils";
import "./ColorCreator.css";

export default function ColorCreator({ createColor }) {
  const [name, setName] = useState("");
  const [hue, setHue] = useState(0);
  const handleNameChange = ({ target }) => setName(target.value);
  const handleHueChange = ({ target }) => setHue(target.value);
  function handleClick() {
    const newColor = {
      name,
      hsl: `hsl(${hue}, 100%, 50%)`
    };
    createColor(newColor);
    setName("");
    setHue(0);
  }
  const createRandomColor = () => createColor(generateRandomColor());
  return (
    <div className="color-creator">
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Hue:
        <input
          type="number"
          value={hue}
          onChange={handleHueChange}
          min="0"
          max="355"
          step="5"
        />
      </label>
      <div className="actions">
        <button onClick={handleClick} disabled={!name.length}>
          Create color
        </button>
        <p style={{ marginRight: 8 }}>Or...</p>
        <button onClick={createRandomColor}>Generate random color</button>
      </div>
    </div>
  );
}
