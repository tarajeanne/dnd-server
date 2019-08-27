const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function makeUsersArray() {
  return [
    {
      id: 1,
      username: 'userfortesting1',
      password: 'userfortesting1'
    },
    {
      id: 2,
      username: 'userfortesting2',
      password: 'userfortesting2'
    },
    {
      id: 3,
      username: 'userfortesting3',
      password: 'userfortesting3'
    },
    {
      id: 4,
      username: 'userfortesting4',
      password: 'userfortesting4'
    }
  ];
}

function makeCharactersArray() {
  return [
    {
      id: '1',
      character: JSON.stringify({
        name: 'Sabrill',
        ac: 0,
        race: '',
        class: '',
        physical_desc: '',
        other_desc: '',
        background: '',
        alignment: '',
        size: '',
        speed: 0,
        languages: [
          {
            name: 'Common',
            variable: false,
            depends_on: null
          }
        ],
        other_prof: [],
        asi: [],
        tool_prof: [],
        weap_prof: [],
        save_prof: [],
        check_prof: [],
        armor_prof: [],
        skills_and_features: [],
        prof_bonus: 2,
        hitDice: '',
        hp: 0,
        abilities: {
          constitution: {
            base: 0,
            total: 0,
            mod: 0
          },
          strength: {
            base: 0,
            total: 0,
            mod: 0
          },
          dexterity: {
            base: 0,
            total: 0,
            mod: 0
          },
          charisma: {
            base: 0,
            total: 0,
            mod: 0
          },
          intelligence: {
            base: 0,
            total: 0,
            mod: 0
          },
          wisdom: {
            base: 0,
            total: 0,
            mod: 0
          }
        },
        ability_checks: {
          acrobatics: {
            mod: 0,
            prof: 0,
            total: 0
          },
          'animal handling': {
            mod: 0,
            prof: 0,
            total: 0
          },
          arcana: {
            mod: 0,
            prof: 0,
            total: 0
          },
          athletics: {
            mod: 0,
            prof: 0,
            total: 0
          },
          deception: {
            mod: 0,
            prof: 0,
            total: 0
          },
          history: {
            mod: 0,
            prof: 0,
            total: 0
          },
          insight: {
            mod: 0,
            prof: 0,
            total: 0
          },
          intimidation: {
            mod: 0,
            prof: 0,
            total: 0
          },
          investigation: {
            mod: 0,
            prof: 0,
            total: 0
          },
          medicine: {
            mod: 0,
            prof: 0,
            total: 0
          },
          nature: {
            mod: 0,
            prof: 0,
            total: 0
          },
          perception: {
            mod: 0,
            prof: 0,
            total: 0
          },
          performance: {
            mod: 0,
            prof: 0,
            total: 0
          },
          persuasion: {
            mod: 0,
            prof: 0,
            total: 0
          },
          religion: {
            mod: 0,
            prof: 0,
            total: 0
          },
          'sleight of hand': {
            mod: 0,
            prof: 0,
            total: 0
          },
          stealth: {
            mod: 0,
            prof: 0,
            total: 0
          },
          survival: {
            mod: 0,
            prof: 0,
            total: 0
          }
        },
        weapons: [],
        armor: [],
        equipment: [],
        spells_known: [],
        spell_slots: [],
        spells_memorized: []
      })
    },
    {
      id: '2',
      character: JSON.stringify({
        name: 'Cal',
        ac: 0,
        race: '',
        class: '',
        physical_desc: '',
        other_desc: '',
        background: '',
        alignment: '',
        size: '',
        speed: 0,
        languages: [
          {
            name: 'Common',
            variable: false,
            depends_on: null
          }
        ],
        other_prof: [],
        asi: [],
        tool_prof: [],
        weap_prof: [],
        save_prof: [],
        check_prof: [],
        armor_prof: [],
        skills_and_features: [],
        prof_bonus: 2,
        hitDice: '',
        hp: 0,
        abilities: {
          constitution: {
            base: 0,
            total: 0,
            mod: 0
          },
          strength: {
            base: 0,
            total: 0,
            mod: 0
          },
          dexterity: {
            base: 0,
            total: 0,
            mod: 0
          },
          charisma: {
            base: 0,
            total: 0,
            mod: 0
          },
          intelligence: {
            base: 0,
            total: 0,
            mod: 0
          },
          wisdom: {
            base: 0,
            total: 0,
            mod: 0
          }
        },
        ability_checks: {
          acrobatics: {
            mod: 0,
            prof: 0,
            total: 0
          },
          'animal handling': {
            mod: 0,
            prof: 0,
            total: 0
          },
          arcana: {
            mod: 0,
            prof: 0,
            total: 0
          },
          athletics: {
            mod: 0,
            prof: 0,
            total: 0
          },
          deception: {
            mod: 0,
            prof: 0,
            total: 0
          },
          history: {
            mod: 0,
            prof: 0,
            total: 0
          },
          insight: {
            mod: 0,
            prof: 0,
            total: 0
          },
          intimidation: {
            mod: 0,
            prof: 0,
            total: 0
          },
          investigation: {
            mod: 0,
            prof: 0,
            total: 0
          },
          medicine: {
            mod: 0,
            prof: 0,
            total: 0
          },
          nature: {
            mod: 0,
            prof: 0,
            total: 0
          },
          perception: {
            mod: 0,
            prof: 0,
            total: 0
          },
          performance: {
            mod: 0,
            prof: 0,
            total: 0
          },
          persuasion: {
            mod: 0,
            prof: 0,
            total: 0
          },
          religion: {
            mod: 0,
            prof: 0,
            total: 0
          },
          'sleight of hand': {
            mod: 0,
            prof: 0,
            total: 0
          },
          stealth: {
            mod: 0,
            prof: 0,
            total: 0
          },
          survival: {
            mod: 0,
            prof: 0,
            total: 0
          }
        },
        weapons: [],
        armor: [],
        equipment: [],
        spells_known: [],
        spell_slots: [],
        spells_memorized: []
      })
    }
  ];
}

function makeUserCharacterArray(users, characters) {
  return [
    {
      user_id: users[0].id,
      character_id: characters[0].id,
      date_modified: '2029-01-22T16:28:32.615Z'
    },
    {
      user_id: users[0].id,
      character_id: characters[1].id,
      date_modified: '2029-01-22T16:28:32.615Z'
    },
    {
      user_id: users[1].id,
      character_id: characters[1].id,
      date_modified: '2029-01-22T16:28:32.615Z'
    }
  ];
}

function makeFixtures() {
  const preppedUsers = makeUsersArray().map((user) => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }));

  const testUsers = preppedUsers;
  const testCharacters = makeCharactersArray();
  const testUserCharacter = makeUserCharacterArray(testUsers, testCharacters);
  return { testUsers, testCharacters, testUserCharacter };
}

function cleanTables(db) {
  return db.raw(
    `TRUNCATE
      user_character, 
      characters,
      users
      RESTART IDENTITY CASCADE`
  );
}

function seedUsers(db, users, characters, usercharacter) {
  const preppedUsers = users.map((user) => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }));
  return db
    .into('users')
    .insert(preppedUsers)
    .then(() =>
      db.raw(`Select setval('users_id_seq', ?)`, [users[users.length - 1].id])
    )
    .then(() => {
      return db
        .into('characters')
        .insert(characters)
        .then(() => {
          return db.into('user_character').insert(usercharacter);
        });
    });
}

function seedCharacters(db, characters, usercharacter) {
  return db
    .into('characters')
    .insert(characters)
    .then(() => {
      return db.into('user_character').insert(usercharacter);
    });
}

function makeAuthToken(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
    subject: user.username,
    algorithm: 'HS256'
  });
  return `Bearer ${token}`;
}

module.exports = {
  makeUserCharacterArray,
  makeCharactersArray,
  makeUserCharacterArray,
  makeFixtures,
  cleanTables,
  seedCharacters,
  seedUsers,
  makeAuthToken
};
