const knex = require('knex');
const jwt = require('jsonwebtoken');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('Auth Endpoints', function() {
  let db;
  const { testUsers } = helpers.makeFixtures();
  const testUser = testUsers[0];

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL
    });
    app.set('db', db);
    helpers.cleanTables(db);
  });

  after('disconnect from db', () => db.destroy());

  afterEach('cleanup', () => helpers.cleanTables(db));

  describe('POST /api/auth/login', () => {
    beforeEach('insert users', () => helpers.seedUsers(db, testUsers));

    const requiredFields = ['username', 'password'];

    requiredFields.forEach((field) => {
      const loginAttemptBody = {
        username: testUser.username,
        password: testUser.password
      };

      it(`responds with 400 required error when '${field}' is missing`, () => {
        delete loginAttemptBody[field];

        return supertest(app)
          .post('/api/auth/login')
          .send(loginAttemptBody)
          .expect(400, {
            error: `Missing '${field}' in request body`
          });
      });
    });

    requiredFields.forEach((field) => {
      const loginAttemptBody = {
        username: testUser.username,
        password: testUser.password
      };
      it('responds 400 when bad username or password', () => {
        loginAttemptBody[field] = 'invalidAttempt';
        return supertest(app)
          .post('/api/auth/login')
          .send(loginAttemptBody)
          .expect(400, { error: 'Incorrect username or password' });
      });
    });

    it('responds with 200 and JWT auth token when valid credentials', () => {
      const validUser = {
        username: testUser.username,
        password: testUser.password
      };

      const expectedToken = jwt.sign(
        {
          user_id: testUser.id
        },
        process.env.JWT_SECRET,
        {
          subject: testUser.username,
          expiresIn: process.env.JWT_EXPIRY,
          algorithm: 'HS256'
        }
      );

      return supertest(app)
        .post('/api/auth/login')
        .send(validUser)
        .expect(200, {
          authToken: expectedToken
        });
    });
  });
});
