DROP TABLE IF EXISTS dnd_races;

CREATE TABLE dnd_races (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  image TEXT,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  age TEXT,
  alignment TEXT,
  size TEXT,
  speed TEXT,
  weapon_proficiencies INTEGER ARRAY,
  languages TEXT ARRAY,
  skills INTEGER ARRAY,
  ability_score JSON,
  other_choice JSON
);

CREATE TABLE dnd_classes (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  image TEXT,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  hitdice TEXT NOT NULL,
  HP1: TEXT NOT NULL,
  
)