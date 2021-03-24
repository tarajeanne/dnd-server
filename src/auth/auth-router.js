const express = require('express');
const AuthService = require('./auth-service');
const { requireAuth } = require('../middleware/jwt-auth');
const morgan = require('morgan');

const authRouter = express.Router();
const jsonBodyParser = express.json();

authRouter.post('/login', jsonBodyParser, (req, res, next) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(req.app.get('db'));
  morgan((req, res) => [req.body.username, req.body.password].join(' '));
  const loginUser = { username, password };

  for (const [key, value] of Object.entries(loginUser)) {
    if (value == null) {
      return res.status(400).json({
        error: `Missing '${key}' in request body`
      });
    }
  }

  loginUser.username = loginUser.username.toLowerCase();

  AuthService.getUserWithUserName(req.app.get('db'), loginUser.username)
    .then((dbUser) => {
      if (!dbUser) {
        return res.status(400).json({
          error: 'Incorrect username or password'
        });
      }
      return AuthService.comparePasswords(
        loginUser.password,
        dbUser.password
      ).then((compareMatch) => {
        if (!compareMatch)
          return res.status(400).json({
            error: 'Incorrect username or password'
          });

        const sub = dbUser.username;
        console.log(sub);
        const payload = { user_id: dbUser.id };
        res.send({
          authToken: AuthService.createJwt(sub, payload)
        });
      });
    })
    .catch(next);
});

//refreshes the JWT for auto-logout/auto-refresh
authRouter.post('/refresh', requireAuth, (req, res) => {
  const sub = req.user.username;
  const payload = { user_id: req.user.id };
  res.send({
    authToken: AuthService.createJwt(sub, payload)
  });
});

module.exports = authRouter;
