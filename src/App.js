import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import ColorCreator from "./ColorCreator";
import ColorList from "./ColorList";
import { changeSaturation } from "./utils";
import "./App.css";

export default function App() {
  const [colorData, setColorData] = useState([]);
  useEffect(() => {
    fetch("./colors.json")
      .then(response => response.json())
      .then(({ colors }) => setColorData(colors))
      .catch(console.warn);
  }, []);
  const createColor = newColor => setColorData([...colorData, newColor]);
  const handleColorClick = index => {
    const colors = [...colorData];
    colors[index].hsl = changeSaturation(colors[index].hsl);
    setColorData(colors);
  };
  if (!colorData.length) return <Loader />;
  return (
    <section>
      <ColorCreator createColor={createColor} />
      <ColorList colorData={colorData} handleColorClick={handleColorClick} />
    </section>
  );
}
