const express = require('express');
const charactersService = require('./characters-service');
const { requireAuth } = require('../middleware/jwt-auth');

const charactersRouter = express.Router();
const jsonBodyParser = express.json();

charactersRouter.route('/:characterId')
.get(requireAuth, (req, res) => {
  charactersService
    .getCharacterById(req.app.get('db'), req.params.characterId)
    .then((character) => {
      return res.json(character.character);
    });
})
.delete(requireAuth, (req, res) => {
  charactersService
    .deleteCharacter(req.app.get('db'), req.params.characterId)
    .then(() => res.send(201))
})

charactersRouter
.route('/:characterId/name')
.patch(requireAuth, jsonBodyParser, (req, res, next) => {
  const newData = req.body.newData;
  console.log(newData);
  const { characterId } = req.params;
  charactersService
    .updateName(req.app.get('db'), characterId, newData)
    .then((character) => {
      return res.json(character.character);
    })
    .catch(next);
});

charactersRouter
  .route('/:characterId/race')
  .patch(requireAuth, jsonBodyParser, (req, res, next) => {
    const { newData } = req.body;
    const { characterId } = req.params;
    charactersService
      .updateRace(req.app.get('db'), characterId, newData)
      .then((character) => {
        return res.json(character.character);
      })
      .catch(next);
  });

charactersRouter
  .route('/:characterId/class')
  .patch(requireAuth, jsonBodyParser, (req, res, next) => {
    const { newData } = req.body;
    const { characterId } = req.params;
    charactersService
      .updateClass(req.app.get('db'), characterId, newData)
      .then((character) => {
        return res.json(character.character);
      })
      .catch(next);
  });

charactersRouter
  .route('/:characterId/background')
  .patch(requireAuth, jsonBodyParser, (req, res, next) => {
    const { newData} = req.body;
    const { characterId } = req.params;
    charactersService
      .updateBackground(req.app.get('db'), characterId, newData)
      .then((character) => {
        return res.json(character.character);
      })
      .catch(next);
  });

  charactersRouter
  .route('/:characterId/asi')
  .patch(requireAuth, jsonBodyParser, (req, res, next) => {
    const { name, index } = req.body;
    const { characterId } = req.params;
    charactersService
      .updateAsi(req.app.get('db'), characterId, index, name)
      .then((character) => {
        return res.json(character.character);
      })
      .catch(next);
  });

  charactersRouter
  .route('/:characterId/prof')
  .patch(requireAuth, jsonBodyParser, (req, res, next) => {
    const { name, index } = req.body;
    const { characterId } = req.params;
    charactersService
      .updateCheckProf(req.app.get('db'), characterId, index, name)
      .then((character) => {
        return res.json(character.character);
      })
      .catch(next);
  });

  charactersRouter
  .route('/:characterId/base')
  .patch(requireAuth, jsonBodyParser, (req, res, next) => {
    const { stat, num } = req.body;
    const { characterId } = req.params;
    charactersService
      .updateStatBase(req.app.get('db'), characterId, stat, num)
      .then((character) => {
        return res.json(character.character);
      })
      .catch(next);
  });

  charactersRouter
  .route('/:characterId/alignment')
  .patch(requireAuth, jsonBodyParser, (req, res, next) => {
    const { newData } = req.body;
    const { characterId } = req.params;
    charactersService
      .updateAlignment(req.app.get('db'), characterId, newData)
      .then((character) => {
        return res.json(character.character);
      })
      .catch(next);
  });

  charactersRouter
  .route('/:characterId/weapon')
  .patch(requireAuth, jsonBodyParser, (req, res, next) => {
    const { name, index } = req.body;
    const { characterId } = req.params;
    charactersService
      .updateWeapon(req.app.get('db'), characterId, index, name)
      .then((character) => {
        return res.json(character.character);
      })
      .catch(next);
  });

  charactersRouter
  .route('/:characterId/armor')
  .patch(requireAuth, jsonBodyParser, (req, res, next) => {
    const { index, name } = req.body;
    const { characterId } = req.params;
    charactersService
      .updateArmor(req.app.get('db'), characterId, index, name)
      .then((character) => {
        return res.json(character.character);
      })
      .catch(next);
  });

  charactersRouter
  .route('/:characterId/equipment')
  .patch(requireAuth, jsonBodyParser, (req, res, next) => {
    const { name, index } = req.body;
    console.log(name, index);
    const { characterId } = req.params;
    charactersService
      .updateEquipment(req.app.get('db'), characterId, index, name)
      .then((character) => {
        return res.json(character.character);
      })
      .catch(next);
  });

module.exports = charactersRouter;
