const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let movies = [
  { id: 1, title: "War Room", genre: "Drama", year: 2015 },
  { id: 2, title: "The Forge", genre: "Faith/Drama", year: 2024 },
  { id: 3, title: "Maleficent", genre: "Fantasy", year: 2014 },
  {
    id: 4,
    title: "Snow White and the Huntsman",
    genre: "Fantasy/Adventure",
    year: 2012,
  },
  { id: 5, title: "The Wicked", genre: "Horror/Thriller", year: 2013 },
  { id: 6, title: "Meet the Khumalos", genre: "Comedy/Family", year: 2023 },
  { id: 7, title: "Honey 2", genre: "Dance/Drama", year: 2011 },
  { id: 8, title: "Overcomer", genre: "Faith/Drama", year: 2019 },
  { id: 9, title: "Enchanted", genre: "Fantasy/Romance", year: 2007 },
];


let series = [
  { id: 1, title: "All American", genre: "Drama/Sports", seasons: 5 },
  { id: 2, title: "All American: Homecoming", genre: "Drama/Sports", seasons: 3,},
  { id: 3, title: "Game of Thrones", genre: "Fantasy/Drama", seasons: 8 },
  { id: 4, title: "Blood & Water", genre: "Mystery/Teen Drama", seasons: 4 },
  { id: 5, title: "Prison Break", genre: "Action/Thriller", seasons: 5 },
  { id: 6, title: "The Chosen", genre: "Historical/Drama", seasons: 3 },
];

let songs = [
  { id: 1,title: "Jireh", artist: "Maverick City Music & Elevation Worship",genre: "Gospel/Christian",year: 2022,},
  {id: 2,title: "Grateful",artist: "Maverick City Music", genre: "Gospel/Christian", year: 2021, },
  {id: 3,title: "What A Beautiful Name", artist: "Hillsong Worship", genre: "Worship/Christian", year: 2016,},
  {id: 4,title: "For Your Glory",artist: "Dr. Tumi",genre: "Gospel/Christian",year: 2019,},
  {id: 5,title: "So Will I (100 Billion X)",artist: "Hillsong Worship",genre: "Worship/Christian",year: 2017,},
];

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.get("/series", (req, res) => {
  res.json(series);
});

app.get("/songs", (req, res) => {
  res.json(songs);
});

app.post("/movies", (req, res) => {
  const newMovie = req.body;
  movies.push(newMovie);
  res.json(movies);
});

app.post("/series", (req, res) => {
  const newSeries = req.body;
  series.push(newSeries);
  res.json(series);
});

app.post("/songs", (req, res) => {
  const newSong = req.body;
  songs.push(newSong);
  res.json(songs);
});

app.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  movies = movies.filter((movie) => movie.id != id);
  res.json(movies);
});

app.delete("/series/:id", (req, res) => {
  const { id } = req.params;
  series = series.filter((serie) => serie.id != id);
  res.json(series);
});

app.delete("/songs/:id", (req, res) => {
  const { id } = req.params;
  songs = songs.filter((song) => song.id != id);
  res.json(songs);
});

app.put("/movies/:id", (req, res) => {
  const { id } = req.params;
  const updatedMovie = req.body;
  movies = movies.map((movie) => (movie.id == id ? updatedMovie : movie));
  res.json(movies);
});

app.put("/series/:id", (req, res) => {
  const { id } = req.params;
  const updatedSeries = req.body;
  series = series.map((serie) => (serie.id == id ? updatedSeries : serie));
  res.json(series);
});

app.put("/songs/:id", (req, res) => {
  const { id } = req.params;
  const updatedSong = req.body;
  songs = songs.map((song) => (song.id == id ? updatedSong : song));
  res.json(songs);
});

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
