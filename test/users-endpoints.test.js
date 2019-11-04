const knex = require('knex');
const jwt = require('jsonwebtoken');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('Users Endpoints', function() {
  let db;
  const {
    testUsers,
    testCharacters,
    testUserCharacter
  } = helpers.makeFixtures();

  const testUser = testUsers[1];

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());
  before('cleanu', () => helpers.cleanTables(db));
  afterEach('cleanup', () => helpers.cleanTables(db));

  describe('POST /api/user', () => {
    beforeEach('insert users', () =>
      helpers.seedUsers(db, testUsers, testCharacters, testUserCharacter)
    );

    it('responds with 200 and creates user', () => {
      const userData = {
        username: 'testing',
        password: 'testingtesting'
      };

      return supertest(app)
        .post('/api/users')
        .send(userData)
        .expect(201)
        .then(() => {
          return db
            .select('*')
            .from('users')
            .where({ username: 'testing' })
            .first()
            .then((res) => {
              expect(res.username).to.equal('testing');
            });
        });
    });
  });

  describe('GET characters by user', () => {
    beforeEach('insert users', () =>
      helpers.seedUsers(db, testUsers, testCharacters, testUserCharacter)
    );

    const expectedChar = testCharacters[1].character;

    it('returns characters associated with that user', () => {
      return supertest(app)
        .get('/api/users/characters')
        .set('Authorization', helpers.makeAuthToken(testUsers[1]))
        .expect(200)
        .expect((res) => {
          expect(res.body[0].character).to.eql(JSON.parse(expectedChar));
        });
    });
  });
});
