const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const movies = require("./api/routes/movies");
const search = require("./api/routes/search");
const auth = require("./api/routes/auth");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/movies", movies);
app.use("/search", search);
app.use("/auth", auth);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
