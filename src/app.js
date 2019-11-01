require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const charactersRouter = require('./characters/characters-router');
const usersRouter = require('./users/users-router');
const authRouter = require('./auth/auth-router');
const backgroundStore = require('./stores/backgroundStore');
const raceStore = require('./stores/raceStore');
const classStore = require('./stores/classStore');
const alignmentStore = require('./stores/alignmentStore');
const {weaponStore, armorStore} = require('./stores/equipmentStore')

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/api/characters', charactersRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

app.get('/api/class', (req, res) => {
  res.json(classStore);
});
app.get('/api/race', (req, res) => {
  res.json(raceStore);
});
app.get('/api/background', (req, res) => {
  res.json(backgroundStore);
});

app.get('/api/alignment', (req, res) => {
  res.json(alignmentStore);
})

app.get('/api/weapon', (req, res) => {
  res.json(weaponStore);
})
app.get('/api/armor', (req, res) => {
  res.json(armorStore);
})

app.use(function errorHandler(error, req, res, next) {
  let response;

  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { error };
  }

  res.status(500).json(response);
});

module.exports = app;
