import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import ColorPicker from "./components/ColorPicker";
import Suggestions from "./components/Suggestions";
import "./styles.css";

function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [suggestedColors, setSuggestedColors] = useState([]);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    fetch("/suggest-colors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ color }),
    })
      .then((res) => res.json())
      .then((data) => setSuggestedColors(data.suggestions))
      .catch((err) => console.error("Error fetching suggestions:", err));
  };

  return (
    <div className="app-container">
      <h1>Color Harmony App</h1>
      <FileUpload />
      <ColorPicker onSelectColor={handleColorSelection} />
      {selectedColor && (
        <div>
          <h3>Selected Color: <span style={{ background: selectedColor }}>{selectedColor}</span></h3>
        </div>
      )}
      <Suggestions colors={suggestedColors} />
    </div>
  );
}

export default App;

