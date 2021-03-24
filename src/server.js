const knex = require('knex');
const app = require('./app');
const { PORT, DB_URL } = require('./config');

const db = knex({
  client: 'pg',
  connection: DB_URL,
  ssl: true
});

app.set('db', db);

app.listen(PORT, () => {
  `Server listening at http://localhost:${PORT}`;
});
