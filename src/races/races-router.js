const express = require('express')
const raceStore = require('../raceStore');

const racesRouter = express.Router();

racesRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(raceStore)
  });

module.exports = racesRouter;