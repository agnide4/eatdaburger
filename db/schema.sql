DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
use burger_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burgerName VARCHAR(25) not NULL,
    devoured boolean DEFAULT FALSE,
    PRIMARY KEY(id)
)