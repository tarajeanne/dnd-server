const backgroundStore = [
  {
    id: 1,
    name: 'Acolyte',
    desc:
      'You have spent your life in the service of a temple to a specific god or pantheon of gods.',
    check_prof: [
      {
        name: 'insight',
        variable: false,
        depends_on: 'background'
      },
      {
        name: 'religion',
        variable: false,
        depends_on: 'background'
      }
    ],
    languages: [
      {
        name: '',
        variable: true,
        depends_on: 'background'
      },
      {
        name: '',
        variable: true,
        depends_on: 'background'
      }
    ],
    equipment: [
      {
        name: 'Holy Symbol',
        variable: false,
        depends_on: 'background',
        quantity: 1
      },
      {
        name: 'Prayer book',
        variable: false,
        depends_on: 'background',
        quantity: 1
      },
      {
        name: 'incense',
        quantity: 5,
        depends_on: 'background',
        variable: false
      },
      {
        name: 'vestments',
        quantity: 1,
        depends_on: 'background',
        variable: false
      },
      {
        name: 'common clothes',
        quantity: 1,
        depends_on: 'background',
        variable: false
      },
      {
        name: 'gp',
        quantity: 15,
        depends_on: 'background',
        variable: false
      }
    ],
    skills_and_features: [
      {
        name: 'Shelter of the Faithful',
        desc:
          'As an acolyte, you command the respect of those who share your faith, and you can perform the religfious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a tepmple, shrine, or other established presence of your faith, though you must provice any material components needed for spells. Tho you share your religion will support you (but only you) at a modest lifestyle.',
        variable: false,
        depends_on: 'background'
      }
    ]
  },
  {
    id: 2,
    name: 'Charlatan',
    desc:
      'You have always had a way with people. You know what makes them tick, you can tease out their hearts\' desires after a few minutes of conversation, and with a few leading questions you can read them like they were childrens books.',
    check_prof: [
      {
        name: 'deception',
        variable: false,
        depends_on: 'background'
      },
      {
        name: 'sleight of hand',
        variable: false,
        depends_on: 'background'
      }
    ],
    tool_prof: [
      {
        name: 'disguise kit',
        variable: false,
        depends_on: 'background'
      },
      {
        name: 'forgery kit',
        variable: false,
        depends_on: 'background'
      }
    ],
    equipment: [
      {
        name: 'Fine clothes',
        quantity: 1,
        depends_on: 'background',
        variable: false
      },
      {
        name: 'Disguise kit',
        depends_on: 'background',
        variable: false
      },
      {
        name: 'gp',
        quantity: 15,
        depends_on: 'background',
        variable: false
      },
      {
        name: '',
        variable: true,
        depends_on: 'background',
        options: [
          'Ten stoppered bottles filled with colored liquid',
          'A set of weighted dice',
          'a deck of marked cards',
          'A signet ring of an imaginary duke'
        ]
      }
    ],
    skills_and_features: [
      {
        name: 'False Identity',
        depends_on: 'background',
        variable: false,
        desc:
          'You have created a second identity that includes documentation, established acquaintances, and disguises that allow youb to assume that persona. Additionally, you can forge documents including official papers and personal lettrs, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.'
      }
    ]
  }
];

module.exports = backgroundStore;
