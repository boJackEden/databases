CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(50) NOT NULL,
  room_name VARCHAR(50) NOT NULL,
  text TEXT,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

