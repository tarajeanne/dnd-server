const xss = require('xss');
const bcrypt = require('bcryptjs');
const cuid = require('cuid');
const charactersService = require('../characters/characters-service');

const UsersService = {
  hasUserWithUserName(db, username) {

    return db('users')
      .where({ username })
      .first()
      .then((user) => !!user);
  },

  insertUser(db, newUser) {
      return db
      .insert(newUser)
      .into('users')
      .returning('*')
      .then(([user]) => user);
  },

  validatePassword(password) {
    if (password.length < 8) {
      return 'Password must be longer than 8 characters';
    }

    if (password.length > 72) {
      return 'Password must be fewer than 72 characters';
    }

    if (password.startsWith(' ') || password.endsWith(' ')) {
      return 'Password must not start or end with empty spaces';
    }

    return null;
  },

  hashPassword(password) {
    return bcrypt.hash(password, 8);
  },

  serializeUser(user) {
    return {
      id: user.id,
      username: xss(user.username),
      date_created: new Date(user.date_created)
    };
  },
  getCharactersForUser(db, userId) {
    return db
      .from('user_character')
      .select('user_character.character_id')
      .where('user_character.user_id', userId)
      .then(res => {
        const ids = res.map(id => id.character_id);
        return db
          .select('*')
          .from('characters')
          .whereIn('id', ids)
      })
  },

  createCharacter(db, name, userId) {
    return db
      .insert({id: cuid(),
        character: JSON.stringify({
          name: name,
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
          tool_prof:[],
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
      })
      .into('characters')
      .returning('*')
      .then(([character]) => character)
      .then((character) => 
        db
          .into('user_character')
          .insert({user_id: userId, character_id: character.id})
          .returning('character_id')
          .then(([character_id]) => {
            return(character_id);
          })
          .then(character_id => charactersService.getCharacterById(db, character_id)
          )
      );
  }
};

module.exports = UsersService;
