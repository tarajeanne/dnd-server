const express = require('express');
const charactersService = require('./characters-service');
const { requireAuth } = require('../middleware/jwt-auth');

const charactersRouter = express.Router();
const jsonBodyParser = express.json();

charactersRouter.route('/:characterId').get(requireAuth, (req, res) => {
  charactersService
    .getCharacterById(req.app.get('db'), req.params.characterId)
    .then((character) => {
      return res.json(character.character);
    });
});

charactersRouter
  .route('/:characterId/races')
  .patch(requireAuth, jsonBodyParser, (req, res, next) => {
    const { race } = req.body;
    const { characterId } = req.params;
    charactersService
      .updateRace(req.app.get('db'), characterId, race)
      .then((character) => {
        return res.json(character.character);
      })
      .catch(next);
  });

charactersRouter
  .route('/:characterId/classes')
  .patch(requireAuth, jsonBodyParser, (req, res, next) => {
    const { newClass } = req.body;
    const { characterId } = req.params;
    charactersService
      .updateClass(req.app.get('db'), characterId, newClass)
      .then((character) => {
        return res.json(character.character);
      })
      .catch(next);
  });

charactersRouter
  .route('/:characterId/backgrounds')
  .patch(requireAuth, jsonBodyParser, (req, res, next) => {
    const { background } = req.body;
    const { characterId } = req.params;
    charactersService
      .updateBackground(req.app.get('db'), characterId, background)
      .then((character) => {
        return res.json(character.character);
      })
      .catch(next);
  });

module.exports = charactersRouter;
