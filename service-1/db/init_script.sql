CREATE TABLE users (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 50 ) UNIQUE NOT NULL
)

INSERT INTO users (name, email) VALUES ('wandri putra', 'wandriputra@gmail.com')