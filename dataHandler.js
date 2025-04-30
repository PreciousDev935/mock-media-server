const express = require("express");
const app = express();
const path = require("path");
const { getMovies, getSeries, getSongs } = require("./dataHandler");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/movies", (req, res) => {
  res.json(getMovies());
});

app.get("/api/series", (req, res) => {
  res.json(getSeries());
});

app.get("/api/songs", (req, res) => {
  res.json(getSongs());
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
