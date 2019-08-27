const knex = require('knex');
const jwt = require('jsonwebtoken');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('Character Endpoints', function() {
  let db;
  const {
    testUsers,
    testCharacters,
    testUserCharacter
  } = helpers.makeFixtures();
  const testCharacter = testCharacters[0];

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());
  before('cleanup', () => helpers.cleanTables(db));

  afterEach('cleanup', () => helpers.cleanTables(db));

  describe('GET /api/characters', () => {
    beforeEach('insert characters', () =>
      helpers.seedUsers(db, testUsers, testCharacters, testUserCharacter)
    );

    it('responds with 200 and character', () => {
      const characterData = testCharacter.character;
      return supertest(app)
        .get(`/api/characters/${testCharacter.id}`)
        .set('Authorization', helpers.makeAuthToken(testUsers[0]))
        .expect(200, JSON.parse(characterData));
    });
  });

  describe('DELETE /api/characters', () => {
    beforeEach('insert characters', () =>
      helpers.seedUsers(db, testUsers, testCharacters, testUserCharacter)
    );

    it('responds with 201 and deletes character', () => {
      return supertest(app)
        .delete(`/api/characters/${testCharacter.id}`)
        .set('Authorization', helpers.makeAuthToken(testUsers[0]))
        .expect(201)
        .expect((res) => {
          db.from('characters')
            .select('*')
            .where({ id: testCharacter.id })
            .first()
            .then((row) => {
              expect(row).to.eql(undefined);
            });
        });
    });
  });

  describe('PATCH endpoints', () => {
    beforeEach('insert characters', () =>
      helpers.seedUsers(db, testUsers, testCharacters, testUserCharacter)
    );

    const endpoints = {
      name: 'Cal',
      race: 'Dwarf',
      alignment: 'Chaotic Good',
      background: 'Acolyte'
    };

    for (attribute in endpoints) {
      it(`/${attribute} responds with 200 and changes ${attribute}`, () => {
        return supertest(app)
          .patch(`/api/characters/${testCharacter.id}/${attribute}`)
          .set('Authorization', helpers.makeAuthToken(testUsers[0]))
          .send({
            newData: endpoints[attribute]
          })
          .expect(200)
          .expect((res) => {
            expect(res.body[attribute]).to.eql(endpoints[attribute]);
          });
      });
    }
  });
});
