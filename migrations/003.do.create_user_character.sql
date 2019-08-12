CREATE TABLE user_character (
  user_id INTEGER REFERENCES users(id) NOT NULL,
  character_id TEXT REFERENCES characters(id) NOT NULL,
  date_modified TIMESTAMP,
  PRIMARY KEY (user_id, character_id)
)