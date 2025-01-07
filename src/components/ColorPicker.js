import React from "react";

function ColorPicker({ onSelectColor }) {
  const handleColorPick = (e) => {
    const color = e.target.value;
    onSelectColor(color);
  };

  return (
    <div className="color-picker">
      <h3>Pick a Color</h3>
      <input type="color" onChange={handleColorPick} />
    </div>
  );
}

export default ColorPicker;

