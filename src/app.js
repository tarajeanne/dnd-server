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

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/api/characters', charactersRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

app.get('/classes', (req, res) => {
  res.json(classStore);
})
app.get('/races', (req, res) => {
  res.json(classStore);
})
app.get('/backgrounds', (req, res) => {
  res.json(classStore);
})

app.use(function errorHandler(error, req, res, next) {
  let response;

  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error'} };
  }

  else {
    console.error(error);
    response = { message: error.message, error };
  }

  res.status(500).json(response);
});

module.exports = app;