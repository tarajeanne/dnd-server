# DnD Character Creator Server

Deployed server URL: [https://polar-escarpment-46272.herokuapp.com/api/)

## Technology Used

Node.js
Framework: Express
Testing: Mocha/Chai, Supertest
Auth/Security: jwt, xss, helmet

## Local dev setup

If using user :

```bash
mv example.env .env
createdb -U POSTGRESUSER symptom-tracker
createdb -U POSTGRESUSER symptom-tracker-test
```

If your postgres user has a password be sure to set it in `.env` for all appropriate fields. Or if using a different user, update appropriately.

```bash
npm install
npm run migrate
env MIGRATION_DB_NAME=symptom-tracker-test npm run migrate
```

And `npm test` should work at this point

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
