const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const movies = require("./api/routes/movies");
const search = require("./api/routes/search");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/movies", movies);
app.use("/search", search);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
