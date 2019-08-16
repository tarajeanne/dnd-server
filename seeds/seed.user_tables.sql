BEGIN;

TRUNCATE user_character, users, characters RESTART IDENTITY CASCADE;

INSERT INTO users (username, password)
VALUES
('testuser', '$2y$08$/HIuIwNc4u/RDOzaK3wM7eSgXK0lJfV3C/CwDPqmtkvLoSe7Sgv6y');

COMMIT;