CREATE DATABASE
IF NOT EXISTS eat_da_burger;

CREATE DATABASE eat_da_burger;
USE eat_da_burger;

CREATE TABLE burgers
(
	id int NOT NULL
	AUTO_INCREMENT,
	burger_name varchar
	(255) NOT NULL,
	devour_it BOOLEAN DEFAULT TRUE,
	PRIMARY KEY
	(id)
);