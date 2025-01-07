const express = require("express");
const multer = require("multer");
const colorAnalysis = require("./color-analysis");

const app = express();
const upload = multer();

app.use(express.json());

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  if (file) {
    // Process uploaded file (color extraction, etc.)
    res.json({ message: "File uploaded successfully" });
  } else {
    res.status(400).json({ error: "No file uploaded" });
  }
});

app.post("/suggest-colors", (req, res) => {
  const { color } = req.body;
  const suggestions = colorAnalysis.getSuggestedColors(color);
  res.json({ suggestions });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

