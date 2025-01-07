import React from "react";

function Suggestions({ colors }) {
  return (
    <div className="suggestions">
      <h3>Suggested Colors</h3>
      <div className="color-grid">
        {colors.map((color, idx) => (
          <div
            key={idx}
            className="color-box"
            style={{ background: color }}
            title={color}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;

