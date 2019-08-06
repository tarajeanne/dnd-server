const express = reqiure('express')
const raceStore = require('../raceStore')

const racesRouter = express.Router();

racesRouter
  .route('/')
  .get((req, res, next) => {
    res.json(raceStore);
  });

  module.exports = {racesRouter};