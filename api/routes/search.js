const express = require("express");
const router = express.Router();
const { API_KEY, URL } = require("../constants");
const axios = require("axios");

router.get("/movie", (req, res) => {
  axios
    .get(
      `${URL}/search/movie?api_key=${API_KEY}&page=${
        req.query.page || 1
      }&query=${req.query.query}`
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
