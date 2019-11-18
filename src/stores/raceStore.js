const raceStore = [
  {
    id: 1,
    name: 'Dwarf',
    desc:
      'Proud warriors and miners from the mountains who value culture and tradition.',
    asi: [
      {
        name: 'Constitution',
        variable: false,
        depends_on: 'race',
        magnitude: 2
      }
    ],
    age:
      'Physically mature in their 20s, but not socially adults until 50. They live about 350 years.',
    alignment:
      'Believing in order, justice, and fair play, dwarves tend toward lawful good.',
    size: 'Medium',
    size_desc: 'Between 4 and 5 feet tall, averaging 150 lbs.',
    speed: 25,
    languages: [
      {
        name: 'Dwarvish',
        variable: false,
        depends_on: 'race'
      }
    ],
    weap_prof: [
      {
        weapid: 15,
        variable: false,
        depends_on: 'race'
      },
      {
        weapid: 21,
        variable: false,
        depends_on: 'race'
      },
      {
        weapid: 4,
        variable: false,
        depends_on: 'race'
      },
      {
        weapid: 6,
        variable: false,
        depends_on: 'race'
      }
    ],
    other_prof: [
      {
        name: '',
        variable: true,
        depends_on: 'race',
        options: ['smith\'s tools', 'brewer\'s supplies', 'mason\'s tools']
      },
      {
        name: 'Stonecunning',
        desc:
          'Whenever you make a History check related to stonework, add double your proficiency bonus to the check.',
        depends_on: 'race',
        variable: false
      },
      {
        name: 'Dwarven Resilience',
        desc:
          'You have advantage on saving throws against poison, and you have resistance against poison damage',
        variable: false,
        depends_on: 'race'
      }
    ],
    skills_and_features: [
      {
        name: 'Darkvision',
        desc:
          'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.',
        variable: false,
        depends_on: 'race'
      }
    ],
    subraces: [
      {
        name: 'Hill Dwarf',
        slug: 'hill-dwarf',
        desc:
          'As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.',
        asi: {
          Wisdom: 1
        },
        asi_desc: 'Ability Score Increase. Your Wisdom score increases by 1',
        document_slug: 'systems-reference-document'
      }
    ]
  },
  {
    id: 2,
    name: 'Elf',
    desc:
      'Slender, graceful, beautiful people who live in ancient forests or glittering spires. The magical result of thousands of years of refinement.',
    asi: [
      {
        name: 'Dexterity',
        variable: false,
        depends_on: 'race',
        magnitude: 2
      }
    ],
    weap_prof: [],

    age:
      'Physically mature in their 20s, but not considered adults until around 100. They live about 700 years.',
    alignment:
      'Loving freedom and self-expression, elves tend toward chaotic good.',
    size: 'Medium',
    size_desc: 'Between 5 and 6 feet tall, with slender builds.',
    speed: 30,
    languages: [
      {
        name: 'Elvish',
        variable: false,
        depends_on: 'race'
      }
    ],
    check_prof: [
      {
        name: 'Perception',
        variable: false,
        depends_on: 'race'
      }
    ],

    other_prof: [
      {
        name: 'Fey Ancestry',
        desc:
          'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.',
        depends_on: 'race',
        variable: false
      }
    ],
    skills_and_features: [
      {
        name: 'Darkvision',
        desc:
          'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.',
        variable: false,
        depends_on: 'race'
      },
      {
        name: 'Trance',
        desc:
          'You can meditate for 4 hours for the same effect that other creatures get from 8 hours of sleep.',
        variable: false,
        depends_on: 'race'
      }
    ],
    subraces: [
      {
        name: 'High Elf',
        slug: 'high-elf',
        desc:
          'As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many fantasy gaming worlds, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.',
        asi: [
          {
            name: 'Intelligence',
            variable: false,
            depends_on: 'race',
            magnitude: 1
          }
        ],
        weap_prof: [],
        asi_desc:
          'Ability Score Increase. Your Intelligence score increases by 1.',
        document_slug: 'systems-reference-document'
      }
    ]
  },
  {
    id: 3,
    name: 'Halfling',
    desc:
      ' Halfling TraitsYour halfling character has a number of traits in common with all other halflings.',
    asi: [{
      name: 'Dexterity',
      variable: false,
      depends_on: 'race',
      magnitude: 2
    }],
    weap_prof: [],
    age: 'Adults at 20, they live until about 150.',
    alignment:
      'Kind, orderly, and traditional, halflings tend toward lawful good.',
    size: 'Small',
    size_desc: 'Average about 3 feet tall and weigh 40 lbs.',
    speed: 25,
    languages:
    [
      {
        name: 'Halfling',
        variable: false,
        depends_on: 'race'
      }
    ],
    traits: {
      Lucky:
        'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll',
      Brave: 'You have advantage on saving throws against being frightened.',
      'Halfling Nimbleness':
        'You can move through the space of any creature that is of a size larger than yours.'
    },
    subraces: [
      {
        name: 'Lightfoot',
        slug: 'lightfoot',
        desc:
          'As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others.Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life.',
        asi: {
          Charisma: 1
        },
        asi_desc: 'Ability Score Increase. Your Charisma score increases by 1.',
        document_slug: 'systems-reference-document'
      }
    ]
  },
  {
    id: 4,
    name: 'Human',
    desc:
      'The youngest and most prolific race of them all, humans don\'t have many general traits.',
    asi: [
      {
        name: 'Strength',
        variable: false,
        depends_on: 'race',
        magnitude: 1
      },
      {
        name: 'Constitution',
        variable: false,
        depends_on: 'race',
        magnitude: 1
      },
      {
        name: 'Dexterity',
        variable: false,
        depends_on: 'race',
        magnitude: 1
      },
      {
        name: 'Wisdom',
        variable: false,
        depends_on: 'race',
        magnitude: 1
      },
      {
        name: 'Intelligence',
        variable: false,
        depends_on: 'race',
        magnitude: 1
      },
      {
        name: 'Charisma',
        variable: false,
        depends_on: 'race',
        magnitude: 1
      }
    ],
    weap_prof: [],
    age: 'Adults in late teens, they live less than 100 years.',
    alignment: 'Humans tend toward no particular alignment.',
    size: 'Medium',
    size_desc: 'Varying widely from 5 feet to well over 6 feet tall.',
    speed: 30,
    languages: [
      {
        name: '',
        variable: true,
        depends_on: 'race'
      }
    ]
  },
  {
    id: 5,
    name: 'Dragonborn',
    desc:
      'Proud descendants of dragons, the Dragonborn are devoted to their clan above all else.',
    asi: [
      {
        name: 'Strength',
        variable: false,
        depends_on: 'race',
        magnitude: 2
      },
      {
        name: 'Charisma',
        variable: false,
        depends_on: 'race',
        magnitude: 1
      }
    ],
    weap_prof: [],
    age: 'Adults by 15, they live to be about 80.',
    alignment:
      'Tending toward extreme, they\'re generally very good--but when they\'re evil, they\'re evil.',
    size: 'Medium',
    size_desc: 'Well over 6 feet tall and averaging 250 lbs.',
    speed: 30,
    languages: [
      {
        name: 'Draconic',
        variable: false,
        depends_on: 'race'
      }
    ],
    skills_and_features: [
      {
        name: 'Breath weapon',
        desc:
          'Once per long or short rest, you can use your action to exhale destructive energy, determined by your Draconic Ancestry. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. You have resistance to the damage type associated with your draconic ancestry.',
        variable: false,
        depends_on: 'race'
      }
    ]
  },
  {
    id: 6,
    name: 'Gnome',
    desc:
      ' Gnome TraitsYour gnome character has certain characteristics in common with all other gnomes.',
    asi: [{
      name: 'Intelligence',
      variable: false,
      depends_on: 'race',
      magnitude: 2
    }],
    weap_prof: [],
    age: 'Settle as adults by 40m and live between 350 and 500 years.',
    alignment:
      'Gnomes are generally good but they could be lawful scholars or chaotic ticksters.',
    size: 'Small',
    size_desc: 'Between 3 and 4 feet tall, averaging 40 lbs.',
    speed: 25,
    languages:  [
      {
        name: 'Gnomish',
        variable: false,
        depends_on: 'race'
      }
    ],
    traits: {
      Darkvision:
        'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
      'Gnome Cunning':
        'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.'
    },
    subraces: [
      {
        name: 'Rock Gnome',
        slug: 'rock-gnome',
        desc:
          ' Rock GnomeAs a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.',
        asi: [
          {
            attributes: ['Constitution'],
            value: 1
          }
        ],
        asi_desc:
          'Ability Score Increase. Your Constitution score increases by 1.',
        document_slug: 'systems-reference-document'
      }
    ]
  },
  {
  //   id: 7,
  //   name: 'Half-Elf',
  //   desc:
  //     ' Half-Elf TraitsYour half-elf character has some qualities in common with elves and some that are unique to half-elves.',
  //   asi: [{
  //     name: 'Charisma',
  //     variable: false,
  //     depends_on: 'race',
  //     magnitude: 2
  //   },
  //   {
  //     name: '',
  //     variable: true,
  //     depends_on: 'race',
  //     magnitude: 1,
  //     norepeat: true
  //   },
  //   {
  //     name: '',
  //     variable: true,
  //     depends_on: 'race',
  //     magnitude: 1,
  //     norepeat: true
  //   }],
  //   weap_prof: [],
  //   age: 'Adults in their early 20s, they can live 180 years.',
  //   alignment:
  //     'Scoffing and rules and leaders, half-elves tend toward the chaos of their elvish ancestors.',
  //   size: 'Medium',
  //   size_desc: 'Range from 5 to 6 feet tall.',
  //   speed: 30,
  //   languages:  [
  //     {
  //       name: 'Elvish',
  //       variable: false,
  //       depends_on: 'race'
  //     },
  //     {
  //       name: '',
  //       variable: true,
  //       depends_on: 'race'
  //     }
  //   ],
  //   check_prof: [
  //     {
  //       name: '',
  //       variable: true,
  //       depends_on: 'race',
  //       norepeat: true
  //     },
  //     {
  //       name: '',
  //       variable: true,
  //       depends_on: 'race',
  //       norepeat: true
  //     }
  //   ],
  //   traits: {
  //     'Fey Ancestry':
  //       'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.',
  //     'Darkvision.':
  //       'Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
  //   },
  //   subraces: []
  // },
    {
      id: 8,
      name: 'Half-Orc',
      desc:
        ' Half-Orc TraitsYour half-orc character has certain traits deriving from your orc ancestry.',
      asi: [{
        name: 'Strength',
        magnitude: 2,
        variable: false,
        depends_on: 'race'
      },
      {
        name: 'Constitution',
        magnitude: 1,
        variable: false,
        depends_on: 'race'
      }],
      weap_prof: [],
      age: 'Adults at 14, rarely living longer than 75 years.',
      alignment:
        'Orcs have a tendency toward chaos and are not particularly inclined toward good.',
      size: 'Medium',
      size_desc:
        'Larger and bulkier than humans, ranging from 5 to well over 6 feet tall.',
      speed: 30,
      languages: [{
        name: 'Orc',
        variable: false,
        depends_on: 'race'
      }],
      check_prof: [{
        name: 'Intimidation',
        variable: false,
        depends_on: 'race',
      }],
      traits: {
        'Relentless Endurance':
          'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.',
        'Savage Attacks':
          'When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.',
        Darkvision:
          'Darkvision. Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
      },
      subraces: []
    },
    {
      id: 9,
      name: 'Tiefling',
      desc:
        ' Tiefling TraitsTieflings share certain racial traits as a result of their infernal descent.',
      asi: [{
        name: 'Intelligence',
        magnitude: 1,
        variable: false,
        depends_on: 'race'
      },
      {
        name: 'Charisma',
        magnitude: 2,
        variable: false,
        depends_on: 'race'
      }],
      weap_prof: [],
      age: 'Tieflings mature around 20 and live around 100 years.',
      alignment: 'Most tieflings tend toward chaotic evil.',
      size: 'Medium',
      size_desc: 'Same size and build as humans.',
      speed: 30,
      languages: [{
        name: 'Infernal',
        variable: false,
        depends_on: 'race'
      }],
      traits: {
        'Hellish Resistance': 'You have resistance to fire damage.',
        'Infernal Legacy':
          'You know the *thaumaturgy* cantrip. When you reach 3rd level, you can cast the *hellish rebuke* spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the *darkness* spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
        Darkvision:
          'Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
      },
      subraces: []
    }
];

module.exports = raceStore;
