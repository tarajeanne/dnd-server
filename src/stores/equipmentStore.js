const weaponStore = [
  {
    id: 1,
    name: 'Club',
    category: 'Simple Melee Weapons',
    cost_num: '1',
    cost_curr: 'sp',
    dice_count: '1d4',
    damage_type: 'bludgeoning',
    weight: '2',
    properties: ['light']
  },
  {
    id: 2,
    name: 'Dagger',
    category: 'Simple Melee Weapons',
    cost_num: '2',
    cost_curr: 'gp',
    dice_count: '1d4',
    damage_type: 'piercing',
    weight: '1',
    properties: ['finesse', 'light', 'thrown (range 20/60)']
  },
  {
    id: 3,
    name: 'Greatclub',
    category: 'Simple Melee Weapons',
    cost_num: '2',
    cost_curr: 'sp',
    dice_count: '1d8',
    damage_type: 'bludgeoning',
    weight: '10',
    properties: ['two-handed']
  },
  {
    id: 4,
    name: 'Handaxe',
    category: 'Simple Melee Weapons',
    cost_num: '5',
    cost_curr: 'gp',
    dice_count: '1d6',
    damage_type: 'slashing',
    weight: '2',
    properties: ['light', 'thrown (range 20/60)']
  },
  {
    id: 5,
    name: 'Javelin',
    category: 'Simple Melee Weapons',
    cost_num: '5',
    cost_curr: 'sp',
    dice_count: '1d6',
    damage_type: 'piercing',
    weight: '2',
    properties: ['thrown (range 30/120)']
  },
  {
    id: 6,
    name: 'Light hammer',
    category: 'Simple Melee Weapons',
    cost_num: '2',
    cost_curr: 'gp',
    dice_count: '1d4',
    damage_type: 'bludgeoning',
    weight: '2',
    properties: ['light', 'thrown (range 20/60)']
  },
  {
    id: 7,
    name: 'Mace',
    category: 'Simple Melee Weapons',
    cost_num: '5 gp',
    dice_count: '1d6',
    damage_type: 'bludgeoning',
    weight: '4',
    properties: []
  },
  {
    id: 8,
    name: 'Quarterstaff',
    category: 'Simple Melee Weapons',
    cost_num: '2',
    cost_curr: 'sp',
    dice_count: '1d6',
    damage_type: 'bludgeoning',
    weight: '4',
    properties: ['versatile (1d8)']
  },
  {
    id: 9,
    name: 'Sickle',
    category: 'Simple Melee Weapons',
    cost_num: '1',
    cost_curr: 'gp',
    dice_count: '1d4',
    damage_type: 'slashing',
    weight: '2',
    properties: ['light']
  },
  {
    id: 10,
    name: 'Spear',
    category: 'Simple Melee Weapons',
    cost_num: '1',
    cost_curr: 'gp',
    dice_count: '1d6',
    damage_type: 'piercing',
    weight: '3',
    properties: ['thrown (range 20/60)', 'versatile (1d8)']
  },
  {
    id: 11,
    name: 'Crossbow, light',
    category: 'Simple Ranged Weapons',
    cost_num: '25',
    cost_curr: 'gp',
    dice_count: '1d8',
    damage_type: 'piercing',
    weight: '5',
    properties: ['ammunition (range 80/320)', 'loading', 'two-handed']
  },
  {
    id: 12,
    name: 'Dart',
    category: 'Simple Ranged Weapons',
    cost_num: '5',
    cost_curr: 'cp',
    dice_count: '1d4',
    damage_type: 'piercing',
    weight: '1/4',
    properties: ['finesse', 'thrown (range 20/60)']
  },
  {
    id: 13,
    name: 'Shortbow',
    category: 'Simple Ranged Weapons',
    cost_num: '25',
    cost_curr: 'gp',
    dice_count: '1d6',
    damage_type: 'piercing',
    weight: '2',
    properties: ['ammunition (range 80/320)', 'two-handed']
  },
  {
    id: 14,
    name: 'Sling',
    category: 'Simple Ranged Weapons',
    cost_num: '1',
    cost_curr: 'sp',
    dice_count: '1d4',
    damage_type: 'bludgeoning',
    weight: '0',
    properties: ['ammunition (range 30/120)']
  },
  {
    id: 15,
    name: 'Battleaxe',
    category: 'Martial Melee Weapons',
    cost_num: '10',
    cost_curr: 'gp',
    dice_count: '1d8',
    damage_type: 'slashing',
    weight: '4',
    properties: ['versatile (1d10)']
  },
  {
    id: 16,
    name: 'Flail',
    category: 'Martial Melee Weapons',
    cost_num: '10',
    cost_curr: 'gp',
    dice_count: '1d8',
    damage_type: 'bludgeoning',
    weight: '2',
    properties: []
  },
  {
    id: 17,
    name: 'Glaive',
    category: 'Martial Melee Weapons',
    cost_num: '20',
    cost_curr: 'gp',
    dice_count: '1d10',
    damage_type: 'slashing',
    weight: '6',
    properties: ['heavy', 'reach', 'two-handed']
  },
  {
    id: 18,
    name: 'Greataxe',
    category: 'Martial Melee Weapons',
    cost_num: '30',
    cost_curr: 'gp',
    dice_count: '1d12',
    damage_type: 'slashing',
    weight: '7',
    properties: ['heavy', 'two-handed']
  },
  {
    id: 19,
    name: 'Greatsword',
    category: 'Martial Melee Weapons',
    cost_num: '50',
    cost_curr: 'gp',
    dice_count: '2d6',
    damage_type: 'slashing',
    weight: '6',
    properties: ['heavy', 'two-handed']
  },
  {
    id: 20,
    name: 'Halberd',
    category: 'Martial Melee Weapons',
    cost_num: '20',
    cost_curr: 'gp',
    dice_count: '1d10',
    damage_type: 'slashing',
    weight: '6',
    properties: ['heavy', 'reach', 'two-handed']
  },
  {
    id: 21,
    name: 'Lance',
    category: 'Martial Melee Weapons',
    cost_num: '10',
    cost_curr: 'gp',
    dice_count: '1d12',
    damage_type: 'piercing',
    weight: '6',
    properties: ['reach', 'special']
  },
  {
    id: 22,
    name: 'Longsword',
    category: 'Martial Melee Weapons',
    cost_num: '15',
    cost_curr: 'gp',
    dice_count: '1d8',
    damage_type: 'slashing',
    weight: '3',
    properties: ['versatile (1d10)']
  },
  {
    id: 23,
    name: 'Maul',
    category: 'Martial Melee Weapons',
    cost_num: '10',
    cost_curr: 'gp',
    dice_count: '2d6',
    damage_type: 'bludgeoning',
    weight: '10',
    properties: ['heavy', 'two-handed']
  },
  {
    id: 24,
    name: 'Morningstar',
    category: 'Martial Melee Weapons',
    cost_num: '15',
    cost_curr: 'gp',
    dice_count: '1d8',
    damage_type: 'piercing',
    weight: '4',
    properties: null
  },
  {
    id: 25,
    name: 'Pike',
    category: 'Martial Melee Weapons',
    cost_num: '5',
    cost_curr: 'gp',
    dice_count: '1d10',
    damage_type: 'piercing',
    weight: '18',
    properties: ['heavy', 'reach', 'two-handed']
  },
  {
    id: 26,
    name: 'Rapier',
    category: 'Martial Melee Weapons',
    cost_num: '25',
    cost_curr: 'gp',
    dice_count: '1d8',
    damage_type: 'piercing',
    weight: '2',
    properties: ['finesse']
  },
  {
    id: 27,
    name: 'Scimitar',
    category: 'Martial Melee Weapons',
    cost_num: '25',
    cost_curr: 'gp',
    dice_count: '1d6',
    damage_type: 'slashing',
    weight: '3',
    properties: ['finesse', 'light']
  },
  {
    id: 28,
    name: 'Shortsword',
    category: 'Martial Melee Weapons',
    cost_num: '10',
    cost_curr: 'gp',
    dice_count: '1d6',
    damage_type: 'piercing',
    weight: '2',
    properties: ['finesse', 'light']
  },
  {
    id: 29,
    name: 'Trident',
    category: 'Martial Melee Weapons',
    cost_num: '5',
    cost_curr: 'gp',
    dice_count: '1d6',
    damage_type: 'piercing',
    weight: '4',
    properties: ['thrown (range 20/60)', 'versatile (1d8)']
  },
  {
    id: 30,
    name: 'War pick',
    category: 'Martial Melee Weapons',
    cost_num: '5',
    cost_curr: 'gp',
    dice_count: '1d8',
    damage_type: 'piercing',
    weight: '2',
    properties: []
  },
  {
    id: 31,
    name: 'Warhammer',
    category: 'Martial Melee Weapons',
    cost_num: '15',
    cost_curr: 'gp',
    dice_count: '1d8',
    damage_type: 'bludgeoning',
    weight: '2',
    properties: ['versatile (1d10)']
  },
  {
    id: 32,
    name: 'Whip',
    category: 'Martial Melee Weapons',
    cost_num: '2',
    cost_curr: 'gp',
    dice_count: '1d4',
    damage_type: 'slashing',
    weight: '3',
    properties: ['finesse', 'reach']
  },
  {
    id: 33,
    name: 'Blowgun',
    category: 'Martial Ranged Weapons',
    cost_num: '10',
    cost_curr: 'gp',
    dice_count: '1',
    damage_type: 'piercing',
    weight: '1',
    properties: ['ammunition (range 25/100)', 'loading']
  },
  {
    id: 34,
    name: 'Crossbow, hand',
    category: 'Martial Ranged Weapons',
    cost_num: '75',
    cost_curr: 'gp',
    dice_count: '1d6',
    damage_type: 'piercing',
    weight: '3',
    properties: ['ammunition (range 30/120)', 'light', 'loading']
  },
  {
    id: 35,
    name: 'Crossbow, heavy',
    category: 'Martial Ranged Weapons',
    cost_num: '50',
    cost_curr: 'gp',
    dice_count: '1d10',
    damage_type: 'piercing',
    weight: '18',
    properties: ['ammunition (range 100/400)', 'heavy', 'loading', 'two-handed']
  },
  {
    id: 37,
    name: 'Longbow',
    category: 'Martial Ranged Weapons',
    cost_num: '50',
    cost_curr: 'gp',
    dice_count: '1d8',
    damage_type: 'piercing',
    weight: '2',
    properties: ['ammunition (range 150/600)', 'heavy', 'two-handed']
  },
  {
    id: 38,
    name: 'Net',
    category: 'Martial Ranged Weapons',
    cost_num: '1',
    cost_curr: 'gp',
    dice_count: '0',
    damage_type: '',
    weight: '3',
    properties: ['special', 'thrown (range 5/15)']
  }
];

const armorStore = [
  {
    id: 1,
    name: 'Padded',
    category: 'Light Armor',
    ac_base: 11,
    ac_mod: 'dex',
    stealth: 'disadvantage'
  },
  {
    id: 2,
    name: 'Leather',
    category: 'Light Armor',
    ac_base: 11,
    ac_mod: 'dex'
  },
  {
    id: 3,
    name: 'Studded Leather',
    category: 'Light Armor',
    ac_base: 12,
    ac_mod: 'dex'
  },
  {
    id: 4,
    name: 'Hide',
    category: 'Medium Armor',
    ac_base: 12,
    ac_mod: 'max2'
  },
  {
    id: 5,
    name: 'Chain shirt',
    category: 'Medium Armor',
    ac_base: 13,
    ac_mod: 'max2'
  },
  {
    id: 6,
    name: 'Scale mail',
    category: 'Medium Armor',
    ac_base: 14,
    ac_mod: 'max2',
    stealth: 'disadvantage'
  },
  {
    id: 7,
    name: 'Breastplate',
    category: 'Medium Armor',
    ac_base: 14,
    ac_mod: 'max2'
  },
  {
    id: 8,
    name: 'Half plate',
    category: 'Medium Armor',
    ac_base: 15,
    ac_mod: 'max2',
    stealth: 'disadvantage'
  },
  {
    id: 9,
    name: 'Ring mail',
    category: 'Heaver Armor',
    ac_base: 14,
    stealth: 'disadvantage'
  },
  {
    id: 10,
    name: 'Chain mail',
    category: 'Heaver Armor',
    ac_base: 16,
    stealth: 'disadvantage',
    strength: 13
  },
  {
    id: 11,
    name: 'Splint',
    category: 'Heavy Armor',
    ac_base: 17,
    stealth: 'disadvantage',
    strength: 15
  },
  {
    id: 12,
    name: 'Plate',
    category: 'Heavy Armor',
    ac_base: 18,
    stealth: 'disadvantage',
    strength: 15
  },
  {
    id: 13,
    name: 'Shield',
    category: 'sheilds',
    ac_base: 2
  }
];

module.exports = { weaponStore, armorStore };
