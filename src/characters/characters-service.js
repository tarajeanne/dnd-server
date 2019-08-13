const xss = require('xss');
const raceStore = require('../stores/raceStore');
const classStore = require('../stores/classStore');
const backgroundStore = require('../stores/backgroundStore');

const charactersService = {
  getCharactersForUser(db, userId) {
    return db
      .from('user_character')
      .select('user_character.character_id')
      .where('user_character.user_id', userId);
  },

  getCharacterById(db, id) {
    return db
      .from('characters')
      .select('*')
      .where('characters.id', id)
      .first()
      .then((res) => {
        return res;
      });
  },

  createCharacter(db) {
    return db
      .insert({
        character: JSON.stringify({
          name: '',
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
          asi: [],
          weap_prof: [],
          tool_prof: [],
          save_prof: [],
          check_prof: [],
          armor_prof: [],
          skills: {},
          features: {},
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
        charactersService.getCharacterById(db, character.id)
      );
  },

  updateName(db, id, name) {
    let newChar;
    charactersService.getCharacterById(db, id).then((character) => {
      newchar = { ...character };
    });
    newChar.name = name;
    return db('characters')
      .where('id', newChar.id)
      .update({
        character: newchar
      })
      .returning('*');
  },

  updateRace(db, id, newRace) {
    return charactersService.getCharacterById(db, id).then((character) => {
      let newChar = { ...character.character };
      newChar.race = newRace;

      const raceData = raceStore.find(race => race.name.toLowerCase() === newRace.toLowerCase())
      const staticAttributes = ['size', 'speed', 'traits'];

      staticAttributes.forEach((att) => {
        newChar[att] = raceData[att];
      });

      const variableAttributes = ['asi', 'languages', 'weap_prof', 'tool_prof'];

      variableAttributes.forEach((att) => {
        newChar[att] = newChar[att].filter((i) => i.depends_on !== 'race');
        if (raceData[att]) {
          newChar[att].push(...raceData[att]);
        }
      });
      return db('characters')
        .where({ id: id })
        .update({
          character: JSON.stringify(newChar)
        })
        .returning('*')
        .then(([character]) => {
          return character;
        })
        .then(charactersService.getCharacterById(db, character.id));
    });
  },

  updateClass(db, id, newClass) {
    return charactersService.getCharacterById(db, id).then((character) => {
      let newChar = { ...character.character };
      newChar.newClass = newClass;

      console.log(newClass);

      const classData = classStore.find(i => i.name.toLowerCase() === newClass.toLowerCase());
      console.log(classData);

      const staticAttributes = [
        'skills',
        'hit_dice',
        'spell_slots',
        'spells_known',
        'num_spells_known',
        'save_prof'
      ];

      staticAttributes.forEach((att) => {
        newChar[att] = classData[att];
      });

      const variableAttributes = [
        'armor_prof',
        'weap_prof',
        'tool_prof',
        'check_prof',
        'equipment'
      ];
      variableAttributes.forEach((att) => {
        newChar[att] = newChar[att].filter((i) => i.depends_on !== 'class');
        if (classData[att]) {
          newChar[att].push(...classData[att]);
        }
      });
      return db('characters')
        .where('id', id)
        .update({
          character: JSON.stringify(newChar)
        })
        .returning('*')
        .then(([character]) => {
          return character;
        })
        .then(charactersService.getCharacterById(db, character.id));
    });
  },

  updateBackground(db, id, newBackground) {
    return charactersService.getCharacterById(db, id).then((character) => {
      let newChar = { ...character.character };
      newChar.background = newBackground;
      console.log(newBackground);

      const backgroundData = backgroundStore.find(background => background.name.toLowerCase() === newBackground.toLowerCase());
      newChar.feature = backgroundData.feature;
      const variableAttributes = ['check_prof', 'languages', 'equipment'];
      variableAttributes.forEach((att) => {
        newChar[att] = newChar[att].filter(
          (i) => i.depends_on !== 'background'
        );
        if (backgroundData[att]) {
          newChar[att].push(...backgroundData[att]);
        }
      });
      return db('characters')
        .where('id', id)
        .update({
          character: JSON.stringify(newChar)
        })
        .returning('*')
        .then(([character]) => {
          return character;
        })
        .then(charactersService.getCharacterById(db, character.id));
    });
  },

  updateAsi(db, id, index, name) {
    return charactersService.getCharacterById(db, id).then((character) => {
      let newChar = { ...character.character };
      newChar.asi[index].name = name;
      charactersService.updateStats(newChar);
      return db('characters')
        .where('id', id)
        .update({
          character: JSON.stringify(newChar)
        })
        .returning('*')
        .then(([character]) => {
          return character;
        })
        .then(charactersService.getCharacterById(db, character.id));
    });
  },

  updateStatBase(db, id, stat, num) {
    return charactersService.getCharacterById(db, id).then((character) => {
      let newChar = { ...character.character };

      newChar.abilities[stat].base = num;
      charactersService.updateStats(newChar);
      return db('characters')
        .where('id', id)
        .update({
          character: JSON.stringify(newChar)
        })
        .returning('*')
        .then(([character]) => {
          return character;
        })
        .then(charactersService.getCharacterById(db, character.id));
    });
   
  },

  updateCheckProf(db, id, index, name) {
    return charactersService.getCharacterById(db, id).then((character) => {
      let newChar = { ...character.character };
      newChar.check_prof[index].name = name;
      charactersService.updateStats(newChar);
      return db('characters')
        .where('id', id)
        .update({
          character: JSON.stringify(newchar)
        })
        .returning('*')
        .then(([character]) => {
          return character;
        })
        .then(charactersService.getCharacterById(db, character.id));
    });
  
  },

  updateStats(character) {
    for (let stat in character.abilities) {
      character.abilities[stat].total = character.abilities[stat].base;
      character.asi.forEach((asi) => {
        if (asi.name === stat) {
          character.abilities[stat].total =
            character.abilities[stat].base + asi.magnitude;
        }
      });
      character.abilities[stat].mod = Math.trunc(
        (character.abilities[stat].total - 10) / 2
      );
    }
    const strengthChecks = ['strength', 'athletics'];
    const dexChecks = ['dexterity', 'acrobatics', 'sleight of hand', 'stealth'];
    const intChecks = [
      'intelligence',
      'arcana',
      'history',
      'investigation',
      'nature',
      'religion'
    ];
    const wisChecks = [
      'wisdom',
      'animal handling',
      'insight',
      'medicine',
      'perception',
      'survival'
    ];
    const charChecks = [
      'charisma',
      'deception',
      'intimidation',
      'performance',
      'persuasion'
    ];
    const allChecks = [
      strengthChecks,
      dexChecks,
      intChecks,
      wisChecks,
      charChecks
    ];
    for (let check in character.ability_checks) {
      allChecks.forEach((checkList) => {
        if (checkList.includes(check)) {
          character.ability_checks[check].mod =
            character.abilities[checkList[0]].mod;
        }
      });
    }

    character.check_prof.forEach((prof) => {
      if (prof.name) {
        character.ability_checks[prof.name].prof = Math.floor(
          character.prof_bonus * (prof.coef || 1)
        );
      }
    });

    Object.values(character.ability_checks).forEach((check) => {
      check.total = check.mod + check.prof;
    });
  },

  serializeCharacter(character) {
    return {
      name: xss(character.name),
      race: xss(character.race),
      class: xss(character.class),
      physical_desc: xss(character.physical_desc),
      other_desc: xss(character.other_desc),
      background: xss(character.background),
      alignment: xss(character.alignment),
      size: xss(character.size),
      speed: 0,
      languages: [
        {
          name: 'Common',
          variable: false,
          depends_on: null
        }
      ],
      asi: [],
      weap_prof: [],
      tool_prof: [],
      save_prof: [],
      check_prof: [],
      armor_prof: [],
      skills: {},
      features: {},
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
      equipment: [],
      spells_known: [],
      spell_slots: [],
      spells_memorized: []
    };
  }
};

module.exports = charactersService;
