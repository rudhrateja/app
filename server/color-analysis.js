const tinycolor = require("tinycolor2");

function getSuggestedColors(baseColor) {
  const color = tinycolor(baseColor);
  return [
    color.lighten(20).toHexString(),
    color.darken(20).toHexString(),
    color.complement().toHexString(),
    color.triad().map((c) => c.toHexString()),
  ].flat();
}

module.exports = { getSuggestedColors };

