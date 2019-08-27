const express = require('express');
const path = require('path');
const usersService = require('./users-service');
const AuthService = require('../auth/auth-service');
const { requireAuth } = require('../middleware/jwt-auth');

const usersRouter = express.Router();
const jsonBodyParser = express.json();

usersRouter.post('/', jsonBodyParser, (req, res, next) => {
  const { password, username } = req.body;

  for (const field of ['username', 'password']) {
    if (!req.body[field])
      return res.status(400).json({
        error: `Missing '${field}' in request body`
      });
  }

  const passwordError = usersService.validatePassword(password);

  if (passwordError) {
    return res.status(400).json({ error: passwordError });
  }

  usersService
    .hasUserWithUserName(req.app.get('db'), username)
    .then((hasUserWithUserName) => {
      if (hasUserWithUserName) {
        return res.status(400).json({ error: 'Username already taken' });
      }

      return usersService.hashPassword(password).then((hashedPassword) => {
        const newUser = {
          username,
          password: hashedPassword,
          date_created: 'now()'
        };

        return usersService
          .insertUser(req.app.get('db'), newUser)
          .then((user) => {
            return res
              .status(201)
              .location(path.posix.join(req.originalUrl, `/${user.id}`))
              .json(usersService.serializeUser(user));
          });
      });
    })

    .catch(next);
});

usersRouter.get('/characters', requireAuth, (req, res, next) => {
  const authToken = req.get('Authorization');
  const bearerToken = authToken.slice(7, authToken.length);
  const id = AuthService.parseJwt(bearerToken).user_id;
  usersService.getCharactersForUser(req.app.get('db'), id).then((data) => {
    return res.json(data);
  });
});

usersRouter.post(
  '/characters',
  jsonBodyParser,
  requireAuth,
  (req, res, next) => {
    const authToken = req.get('Authorization');
    const bearerToken = authToken.slice(7, authToken.length);
    const id = AuthService.parseJwt(bearerToken).user_id;
    const { name } = req.body;
    usersService
      .createCharacter(req.app.get('db'), name, id)
      .then((character) => {
        return res.json(character);
      });
  }
);

module.exports = usersRouter;
