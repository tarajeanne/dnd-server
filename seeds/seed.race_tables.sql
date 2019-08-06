BEGIN;

TRUNCATE
  dnd_races;

INSERT INTO dnd_races (name, description, age, alignment, size, speed, weapon_proficiencies, languages, skills, ability_score, other_choice)
VALUES
('Dwarf', 'Short but tough, these mountain-dwellers are slow to trust, but remember forever.', 'Physically adult in 20s but still socially young until 50. They live 350 years.','Generally lawful, tending toward good.', 'Medium', '25', '{1, 4, 7, 9}', '{"Common", "Dwarvish"}', '{3, 6, 8}', '{"constitution": 2}', '{"tools": ["smith", "brewer", "mason"]}');

COMMIT;