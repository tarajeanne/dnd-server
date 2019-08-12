const backgroundStore = [
  {
    id: 1,
    name: 'Acolyte',
    desc: 'You have spent your life in the service of a temple to a specific god or pantheon of gods.',
    skill_prof: [
      {
        name: 'Insight',
        variable: false,
        depends_on: 'background',
      },
      {
        name: 'Religion',
        variable: false,
        depends_on: 'background',
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
    feature: 'As an acolyte, you command the respect of those who share your faith, and you can perform the religfious ceremonies of your deity. You and your adventuring companions can expectr to receive free healing and care at a tepmple, shrine, or other established presence of your faith, though you must provice any material components needed for spells. Tho you share your religion will support you (but only you) at a modest lifestyle.'
  },
  {
    id: 2,
    name: 'Charlatan',
    desc: 'You have always had a way with people. You know what makes them tick, you can tease out their hearts\' desires after a few minutes of conversation, and with a few leading questions you can read them like they were children\s books.',
    skill_prof: ['Deception', 'Sleight of Hand'],
    tool_prof: ['Disguise kit', 'Forgery kit'],
    equipment: {
      'Fine clothes': 1,
      'Disguise kit': 1,
      'gp': 15
    },
    equipment_choice: {
      choose: 1,
      from: ['Ten stoppered bottles filled with colored liquid', 'A set of weighted dice', 'a deck of marked cards', 'A signet ring of an imaginary duke']
    },
    feature: 'False Identity: YOu have created a second identity that includes documentation, established acquaintances, and disguises that allow youb to assume that persona. Additionally, you can forge documents including official papers and personal lettrs, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.'
  }
];

module.exports = backgroundStore;