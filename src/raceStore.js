const raceStore = {
  1: {
      "name": "Dwarf",
      "desc": " Dwarf TraitsYour dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.",
      "asi": 
          {
                  "Constitution": 2
          }
      ,
      "age": "Physically mature in their 20s, but not socially adults until 50. They live about 350 years.",
      "alignment": "Believing in order, justice, and fair play, dwarves tend toward lawful good.",
      "size": "Medium",
      "size_desc": "Between 4 and 5 feet tall, averaging 150 lbs.",
      "speed": 25,
      "languages": ["Common", "Dwarvish"],
      "vision": "Darkvision. Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
      "weap_prof": [15, 21, 4, 6],
      "other_choice": {
        "tools_prof": ["smith's tools", "brewer's supplies", "mason's tools"]
      },
      "traits": {
        "Dwarven Resilience": "You have advantage on saving throws against poison, and you have resistance against poison damage",
        "Stonecunning.": "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
        "Dark Vision": "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
      },
      "subraces": [
          {
              "name": "Hill Dwarf",
              "slug": "hill-dwarf",
              "desc": "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.",
              "asi": 
                  {
                      
                          "Wisdom": 1
                  }
              ,
              "asi_desc": "Ability Score Increase. Your Wisdom score increases by 1",
              "document_slug": "systems-reference-document"
          }
      ]
  },
  2: {
      "name": "Elf",
      "desc": " Elf TraitsYour elf character has a variety of natural abilities, the result of thousands of years of elven refinement.",
      "asi":
          {
    
                  "Dexterity": 2
          },

      "age": "Physically mature in their 20s, but not considered adults until around 100. They live about 700 years.",
      "alignment": "Loving freedom and self-expression, elves tend toward chaotic good.",
      "size": "Medium",
      "size_desc": "Between 5 and 6 feet tall, with slender builds.",
      "speed": 30,
      "languages": ["Common", "Elvish"],
      "skill_prof": ["perception"],
      "traits": {
        "Darkvision": "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
        "Fey Ancestry": "You have advantage on saving throws against being charmed, and magic can’t put you to sleep.",
        "Trance": "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice.After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
      },
      "subraces": [
          {
              "name": "High Elf",
              "slug": "high-elf",
              "desc": "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many fantasy gaming worlds, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.",
              "asi":
                  {
                          "Intelligence": 1
                  },
              "asi_desc": "Ability Score Increase. Your Intelligence score increases by 1.",
              "document_slug": "systems-reference-document"
          }
      ]
  },
  3: {
      "name": "Halfling",
      "desc": " Halfling TraitsYour halfling character has a number of traits in common with all other halflings.",
      "asi":
          {
                  "Dexterity": 2
          },
      "age": "Adults at 20, they live until about 150.",
      "alignment": "Kind, orderly, and traditional, halflings tend toward lawful good.",
      "size": "Small",
      "size_desc": "Average about 3 feet tall and weigh 40 lbs.",
      "speed": 25,
      "languages": ["Common", "Halfling"],
      "traits": 
      {
        "Lucky": "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll",
        "Brave": "You have advantage on saving throws against being frightened.",
        "Halfling Nimbleness": "You can move through the space of any creature that is of a size larger than yours."
      },
      "subraces": [
          {
              "name": "Lightfoot",
              "slug": "lightfoot",
              "desc": "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others.Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life.",
              "asi":
                  {
                          "Charisma": 1
                  },
              "asi_desc": "Ability Score Increase. Your Charisma score increases by 1.",
              "document_slug": "systems-reference-document"
          }
      ]
  },
  4: {
      "name": "Human",
      "desc": " Human TraitsIt’s hard to make generalizations about humans, but your human character has these traits.",
      "asi": 
          {
                  "Strength": 1,
                  "Dexterity": 1,
                  "Constitution": 1,
                  "Intelligence": 1,
                  "Wisdom": 1,
                  "Charisma": 1
          },
        
      "age": "Adults in late teens, they live less than 100 years.",
      "alignment": "Humans tend toward no particular alignment.",
      "size": "Medium",
      "size_desc": "Varying widely from 5 feet to well over 6 feet tall.",
      "speed": 30,
      "languages": ["Common", "CHOICE"]
  },
  5: {
      "name": "Dragonborn",
      "desc": " Dragonborn TraitsYour draconic heritage manifests in a variety of traits you share with other dragonborn.",
      "asi": {
        "Strength": 2,
        "Charisma": 1
      },
      "age": "Adults by 15, they live to be about 80.",
      "alignment": "Tending toward extreme, they're generally very good--but when they're evil, they're evil.",
      "size": "Medium",
      "size_desc": "Well over 6 feet tall and averaging 250 lbs.",
      "speed": 30,
      "languages": ["Common", "Draconic"],
      "traits": {"Draconic Ancestry":"Choose one type of dragon on the following screen. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.Breath Weapon. You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.After you use your breath weapon, you can’t use it again until you complete a short or long rest.Damage Resistance. You have resistance to the damage type associated with your draconic ancestry."},
      "subraces": []
  },
  6: {
      "name": "Gnome",
      "desc": " Gnome TraitsYour gnome character has certain characteristics in common with all other gnomes.",
      "asi": {
        "Intelligence": 2
      },
      "age": "Settle as adults by 40m and live between 350 and 500 years.",
      "alignment": "Gnomes are generally good but they could be lawful scholars or chaotic ticksters.",
      "size": "Small",
      "size_desc": "Between 3 and 4 feet tall, averaging 40 lbs.",
      "speed": 25,
      "languages": ["Common", "Gnomish"],
      "traits": {
        "Darkvision": "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
        "Gnome Cunning": "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."},
      "subraces": [
          {
              "name": "Rock Gnome",
              "slug": "rock-gnome",
              "desc": " Rock GnomeAs a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.",
              "asi": [
                  {
                      "attributes": [
                          "Constitution"
                      ],
                      "value": 1
                  }
              ],
              "asi_desc": "Ability Score Increase. Your Constitution score increases by 1.",
              "document_slug": "systems-reference-document"
          }
      ]
  },
  7: {
      "name": "Half-Elf",
      "desc": " Half-Elf TraitsYour half-elf character has some qualities in common with elves and some that are unique to half-elves.",
      "asi": {
        "Charisma": 2,
        "Other": [1, 1]
      },
      "age": "Adults in their early 20s, they can live 180 years.",
      "alignment": "Scoffing and rules and leaders, half-elves tend toward the chaos of their elvish ancestors.",
      "size": "Medium",
      "size_desc": "Range from 5 to 6 feet tall.",
      "speed": 30,
      "languages": ["Common", "Elvish", "CHOICE"],
      "skill_prof": ["CHOICE", "CHOICE"],
      "traits": {
        "Fey Ancestry": "You have advantage on saving throws against being charmed, and magic can’t put you to sleep.",
        "Darkvision.": "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
      },
      "subraces": []
  },
  8: {
      "name": "Half-Orc",
      "desc": " Half-Orc TraitsYour half-orc character has certain traits deriving from your orc ancestry.",
      "asi": {
        "Strength": 2,
        "Constitution": 1
      },
      "age": "Adults at 14, rarely living longer than 75 years.",
      "alignment": "Orcs have a tendency toward chaos and are not particularly inclined toward good.",
      "size": "Medium",
      "size_desc": "Larger and bulkier than humans, ranging from 5 to well over 6 feet tall.",
      "speed": 30,
      "languages": ["Common", "Orc"],
      "vision": "",
      "skill_prof": ["intimidation"],
      "traits": {
        "Relentless Endurance": "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.",
        "Savage Attacks": "When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.",
        "Darkvision": "Darkvision. Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
      },
      "subraces": []
  },
  9: {
    "name": "Tiefling",
    "desc": " Tiefling TraitsTieflings share certain racial traits as a result of their infernal descent.",
    "asi": {
      "Intelligence": 1,
      "Charisma": 2
    },
    "age": "Tieflings around 20 and live around 100 years.",
    "alignment": "Most tieflings tend toward chaotic evil.",
    "size": "Medium",
    "size_desc": "Same size and build as humans.",
    "speed": 30,
    "languages": ["Common", "Infernal"],
    "traits": {
      "Hellish Resistance": "You have resistance to fire damage.",
      "Infernal Legacy": "You know the *thaumaturgy* cantrip. When you reach 3rd level, you can cast the *hellish rebuke* spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the *darkness* spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
      "Darkvision": "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
    },
    "subraces": []
  }
}

module.exports = raceStore;