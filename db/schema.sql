DROP DATABASE IF EXISTS eat_da_burger;
CREATE DATABASE eat_da_burger;
USE eat_da_burger;

-- CREATE TABLE burgers
-- (
-- 	id int NOT NULL
-- 	AUTO_INCREMENT,
--     burger_name varchar
-- 	(255) NOT NULL,
--     devour_it BOOLEAN DEFAULT false,
--     PRIMARY KEY
-- 	(id)
-- );

 CREATE TABLE burgers(
id INT AUTO_INCREMENT NOT NULL,
description VARCHAR(255),
createdAt DATETIME default CURRENT_TIMESTAMP,
burger_name varchar(255) NOT NULL,
devour_it BOOLEAN DEFAULT false,
PRIMARY KEY(id)
);