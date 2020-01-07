import React from "react";
import "./ColorList.css";

export default ({ colorData, handleColorClick }) => (
  <div className="color-list">
    <p>Click a color to see a different saturation.</p>
    <ul>
      {colorData.map(({ name, hsl }, index) => (
        <li
          key={`${name}-${hsl}-${index}`}
          style={{ color: hsl }}
          onClick={() => handleColorClick(index)}
        >
          {name}
        </li>
      ))}
    </ul>
  </div>
);
