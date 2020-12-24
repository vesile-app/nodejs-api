const express = require('express')
const router = express.Router()
const axios = require('axios')
const https = require("https")
require('https').globalAgent.options.rejectUnauthorized = false
const { checkUserRegisterInfo, checkUserLoginInfo } = require('../middlewares/auth')
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/register', (req, res) => {
  console.log('here', req.body)
  axios.post("https://localhost:44384/api/auth/Register", {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  }).then(response => {
    
    res.status(200).json(response.data)
  }).catch(err => res.status(404).json(err))
})

router.post('/login/:email/:password', (req, res) => {
  console.log(req.params.email);
  console.log(req.params.password);
  axios.post("https://localhost:44384/api/auth/Login", {
    email: req.params.email,
    password: req.params.password
  }).then(response => {
    res.status(200).json(response.data)
  }).catch(err => res.json(err))
})

module.exports = router;