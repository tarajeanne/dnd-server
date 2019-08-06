const weaponStore = {
      1: {
          "name": "Club",
          "category": "Simple Melee Weapons",
          "cost_num": "1",
          "cost_curr": 'sp',
          "dice_count": "1d4",
          "damage_type": "bludgeoning",
          "weight": "2",
          "properties": [
              "light"
          ]
      },
      2: {
          "name": "Dagger",
          "category": "Simple Melee Weapons",
          "cost_num": "2",
          "cost_curr": 'gp',
          "dice_count": "1d4",
          "damage_type": "piercing",
          "weight": "1",
          "properties": [
              "finesse",
              "light",
              "thrown (range 20/60)"
          ]
      },
      3: {
          "name": "Greatclub",
          "category": "Simple Melee Weapons",
          "cost_num": "2",
          "cost_curr": "sp",
          "dice_count": "1d8",
          "damage_type": "bludgeoning",
          "weight": "10",
          "properties": [
              "two-handed"
          ]
      },
      4: {
          "name": "Handaxe",
          "category": "Simple Melee Weapons",
          "cost_num": "5",
          "cost_curr": "gp",
          "dice_count": "1d6",
          "damage_type": "slashing",
          "weight": "2",
          "properties": [
              "light",
              "thrown (range 20/60)"
          ]
      },
      5: {
          "name": "Javelin",
          "category": "Simple Melee Weapons",
          "cost_num": "5",
          "cost_curr": "sp",
          "dice_count": "1d6",
          "damage_type": "piercing",
          "weight": "2",
          "properties": [
              "thrown (range 30/120)"
          ]
      },
      6: {
          "name": "Light hammer",
          "category": "Simple Melee Weapons",
          "cost_num": "2",
          "cost_curr": "gp",
          "dice_count": "1d4",
          "damage_type": "bludgeoning",
          "weight": "2",
          "properties": [
              "light",
              "thrown (range 20/60)"
          ]
      },
      7: {
          "name": "Mace",
          "category": "Simple Melee Weapons",
          "cost_num": "5 gp",
          "dice_count": "1d6",
          "damage_type": "bludgeoning",
          "weight": "4",
          "properties": []
      },
      8: {
          "name": "Quarterstaff",
          "category": "Simple Melee Weapons",
          "cost_num": "2",
          "cost_curr": "sp",
          "dice_count": "1d6",
          "damage_type": "bludgeoning",
          "weight": "4",
          "properties": [
              "versatile (1d8)"
          ]
      },
      9: {
          "name": "Sickle",
          "category": "Simple Melee Weapons",
          "cost_num": "1", 
          "cost_curr": "gp",
          "dice_count": "1d4",
          "damage_type": "slashing",
          "weight": "2",
          "properties": [
              "light"
          ]
      },
      10: {
          "name": "Spear",
          "category": "Simple Melee Weapons",
          "cost_num": "1",
          "cost_curr": "gp",
          "dice_count": "1d6",
          "damage_type": "piercing",
          "weight": "3",
          "properties": [
              "thrown (range 20/60)",
              "versatile (1d8)"
          ]
      },
      11: {
          "name": "Crossbow, light",
          "category": "Simple Ranged Weapons",
          "cost_num": "25", 
          "cost_curr": "gp",
          "dice_count": "1d8",
          "damage_type": "piercing",
          "weight": "5",
          "properties": [
              "ammunition (range 80/320)",
              "loading",
              "two-handed"
          ]
      },
      12: {
          "name": "Dart",
          "category": "Simple Ranged Weapons",
          "cost_num": "5",
          "cost_curr": "cp",
          "dice_count": "1d4",
          "damage_type": "piercing",
          "weight": "1/4",
          "properties": [
              "finesse",
              "thrown (range 20/60)"
          ]
      },
      13: {
          "name": "Shortbow",
          "category": "Simple Ranged Weapons",
          "cost_num": "25",
          "cost_curr": "gp",
          "dice_count": "1d6",
          "damage_type": "piercing",
          "weight": "2",
          "properties": [
              "ammunition (range 80/320)",
              "two-handed"
          ]
      },
      14: {
          "name": "Sling",
          "category": "Simple Ranged Weapons",
          "cost_num": "1", 
          "cost_curr": "sp",
          "dice_count": "1d4",
          "damage_type": "bludgeoning",
          "weight": "0",
          "properties": [
              "ammunition (range 30/120)"
          ]
      },
      15: {
          "name": "Battleaxe",
          "category": "Martial Melee Weapons",
          "cost_num": "10",
          "cost_curr": "gp",
          "dice_count": "1d8",
          "damage_type": "slashing",
          "weight": "4",
          "properties": [
              "versatile (1d10)"
          ]
      },
      16: {
          "name": "Flail",
          "category": "Martial Melee Weapons",
          "cost_num": "10",
          "cost_curr": "gp",
          "dice_count": "1d8",
          "damage_type": "bludgeoning",
          "weight": "2",
          "properties": []
      },
      17: {
          "name": "Glaive",
          "category": "Martial Melee Weapons",
          "cost_num": "20",
          "cost_curr": "gp",
          "dice_count": "1d10",
          "damage_type": "slashing",
          "weight": "6",
          "properties": [
              "heavy",
              "reach",
              "two-handed"
          ]
      },
      18: {
          "name": "Greataxe",
          "category": "Martial Melee Weapons",
          "cost_num": "30",
          "cost_curr": "gp",
          "dice_count": "1d12",
          "damage_type": "slashing",
          "weight": "7",
          "properties": [
              "heavy",
              "two-handed"
          ]
      },
      19: {
          "name": "Greatsword",
          "category": "Martial Melee Weapons",
          "cost_num": "50",
          "cost_curr": "gp",
          "dice_count": "2d6",
          "damage_type": "slashing",
          "weight": "6",
          "properties": [
              "heavy",
              "two-handed"
          ]
      },
      20: {
          "name": "Halberd",
          "category": "Martial Melee Weapons",
          "cost_num": "20",
          "cost_curr": "gp",
          "dice_count": "1d10",
          "damage_type": "slashing",
          "weight": "6",
          "properties": [
              "heavy",
              "reach",
              "two-handed"
          ]
      },
      21: {
          "name": "Lance",
          "category": "Martial Melee Weapons",
          "cost_num": "10",
          "cost_curr": "gp",
          "dice_count": "1d12",
          "damage_type": "piercing",
          "weight": "6",
          "properties": [
              "reach",
              "special"
          ]
      },
      22: {
          "name": "Longsword",
          "category": "Martial Melee Weapons",
          "cost_num": "15",
          "cost_curr": "gp",
          "dice_count": "1d8",
          "damage_type": "slashing",
          "weight": "3",
          "properties": [
              "versatile (1d10)"
          ]
      },
      23: {
          "name": "Maul",
          "category": "Martial Melee Weapons",
          "cost_num": "10",
          "cost_curr": "gp",
          "dice_count": "2d6",
          "damage_type": "bludgeoning",
          "weight": "10",
          "properties": [
              "heavy",
              "two-handed"
          ]
      },
      24: {
          "name": "Morningstar",
          "category": "Martial Melee Weapons",
          "cost_num": "15",
          "cost_curr": "gp",
          "dice_count": "1d8",
          "damage_type": "piercing",
          "weight": "4",
          "properties": null
      },
      25: {
          "name": "Pike",
          "category": "Martial Melee Weapons",
          "cost_num": "5",
          "cost_curr": "gp",
          "dice_count": "1d10",
          "damage_type": "piercing",
          "weight": "18",
          "properties": [
              "heavy",
              "reach",
              "two-handed"
          ]
      },
      26: {
          "name": "Rapier",
          "category": "Martial Melee Weapons",
          "cost_num": "25",
          "cost_curr": "gp",
          "dice_count": "1d8",
          "damage_type": "piercing",
          "weight": "2",
          "properties": [
              "finesse"
          ]
      },
      27: {
          "name": "Scimitar",
          "category": "Martial Melee Weapons",
          "cost_num": "25",
          "cost_curr": "gp",
          "dice_count": "1d6",
          "damage_type": "slashing",
          "weight": "3",
          "properties": [
              "finesse",
              "light"
          ]
      },
      28: {
          "name": "Shortsword",
          "category": "Martial Melee Weapons",
          "cost_num": "10",
          "cost_curr": "gp",
          "dice_count": "1d6",
          "damage_type": "piercing",
          "weight": "2",
          "properties": [
              "finesse",
              "light"
          ]
      },
      29: {
          "name": "Trident",
          "category": "Martial Melee Weapons",
          "cost_num": "5",
          "cost_curr": "gp",
          "dice_count": "1d6",
          "damage_type": "piercing",
          "weight": "4",
          "properties": [
              "thrown (range 20/60)",
              "versatile (1d8)"
          ]
      },
      30: {
          "name": "War pick",
          "category": "Martial Melee Weapons",
          "cost_num": "5",
          "cost_curr": "gp",
          "dice_count": "1d8",
          "damage_type": "piercing",
          "weight": "2",
          "properties": []
      },
      31: {
          "name": "Warhammer",
          "category": "Martial Melee Weapons",
          "cost_num": "15",
          "cost_curr": "gp",
          "dice_count": "1d8",
          "damage_type": "bludgeoning",
          "weight": "2",
          "properties": [
              "versatile (1d10)"
          ]
      },
      32: {
          "name": "Whip",
          "category": "Martial Melee Weapons",
          "cost_num": "2",
          "cost_curr": "gp",
          "dice_count": "1d4",
          "damage_type": "slashing",
          "weight": "3",
          "properties": [
              "finesse",
              "reach"
          ]
      },
      33: {
          "name": "Blowgun",
          "category": "Martial Ranged Weapons",
          "cost_num": "10",
          "cost_curr": "gp",
          "dice_count": "1",
          "damage_type": "piercing",
          "weight": "1",
          "properties": [
              "ammunition (range 25/100)",
              "loading"
          ]
      },
      34: {
          "name": "Crossbow, hand",
          "category": "Martial Ranged Weapons",
          "cost_num": "75",
          "cost_curr": "gp",
          "dice_count": "1d6",
          "damage_type": "piercing",
          "weight": "3",
          "properties": [
              "ammunition (range 30/120)",
              "light",
              "loading"
          ]
      },
      35: {
          "name": "Crossbow, heavy",
          "category": "Martial Ranged Weapons",
          "cost_num": "50",
          "cost_curr": "gp",
          "dice_count": "1d10",
          "damage_type": "piercing",
          "weight": "18",
          "properties": [
              "ammunition (range 100/400)",
              "heavy",
              "loading",
              "two-handed"
          ]
      },
      36: {
          "name": "Longbow",
          "category": "Martial Ranged Weapons",
          "cost_num": "50",
          "cost_curr": "gp",
          "dice_count": "1d8",
          "damage_type": "piercing",
          "weight": "2",
          "properties": [
              "ammunition (range 150/600)",
              "heavy",
              "two-handed"
          ]
      },
      37: {
          "name": "Net",
          "category": "Martial Ranged Weapons",
          "cost_num": "1",
          "cost_curr": "gp",
          "dice_count": "0",
          "damage_type": "",
          "weight": "3",
          "properties": [
              "special",
              "thrown (range 5/15)"
          ]
      }
}

module.exports = {weaponStore};