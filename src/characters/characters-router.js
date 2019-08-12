const express = require('express');
const charactersService = require('./character-service')
const backgroundStore = require('./stores/backgroundStore');
const raceStore = require('./stores/raceStore');
const classStore = require('./stores/classStore');
const { requireAuth } = require('../middleware/jwt-auth');

const charactersRouter = express.Router();
const jsonBodyParser = express.json();

charactersRouter
  .route('/:characterId')
  .get(requireAuth, (req, res) => {
    res.json(charactersService.getCharacter(req.params.characterId))
  });

charactersRouter
  .route('/:characterId/races')
  .patch((requireAuth, jsonBodyParser, (req, res, next) => {
    const { race } = req.body;
    const { characterId } = req.params;
    charactersService.updateRace(req.app.get('db'), characterId, race)
    .then(character => {
      res
        .status(200)
        .json(charactersService.serializeCharacter(character))
    })
    .catch(next)
  }));

charactersRouter
  .route('/:characterId/classes')
  .get((req, res) => {
    res.json(classStore);
  });
  
 charactersRouter
  .route('/:characterId/backgrounds')
  .get((req, res) => {
    res.json(backgroundStore);
  })