const express = require("express");
const router = express.Router();
const { API_KEY, URL } = require("../constants");
const axios = require("axios");

router.get("/popular", (req, res) => {
  axios
    .get(`${URL}/movie/popular?api_key=${API_KEY}`)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => res.status(404).json(err));
});

var today = new Date().toJSON().slice(0, 10);
var oneMonthAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
  .toJSON()
  .slice(0, 10);

router.get("/discover", (req, res) => {
  console.log(oneMonthAgo);
  axios
    .get(
      `${URL}/discover/movie?api_key=${API_KEY}&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${today}&page=${
        req.query.page || 1
      }`
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => res.status(400).json(err));
});

router.get(`/:movieId`, (req, res) => {
  axios
    .get(
      `${URL}/movie/${req.params.movieId}?api_key=${API_KEY}&append_to_response=videos,images,keywords,recommendations,credits`
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
