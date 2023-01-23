DROP DATABASE IF EXISTS `bibli`;
CREATE DATABASE  IF NOT EXISTS `bibli` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `bibli`;


DROP TABLE IF EXISTS `books`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `borrows`;

CREATE TABLE `users` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `name` varchar(255) DEFAULT NULL,
      `birthday` varchar(255) DEFAULT NULL,
      PRIMARY KEY (`id`)
);

INSERT INTO `users` (`name`, `birthday`) VALUES ("Julien Omont", "04/10/1985");
INSERT INTO `users` (`name`, `birthday`) VALUES ("Diane Orluc", "16/04/1982");

CREATE TABLE `books` (
     `id` INT NOT NULL AUTO_INCREMENT,
     `title` varchar(255) DEFAULT NULL,
     `author` varchar(255) DEFAULT NULL,
     `genre` varchar(255) DEFAULT NULL,
     `description` varchar(1500) DEFAULT NULL,
     `cover` varchar(1500) DEFAULT NULL,
     PRIMARY KEY (`id`)
);

INSERT INTO `books`(`title`, `author`, `genre`) VALUES("Harry Potter à l'école des sorciers", "J.K. ROWLING", "Fantastique");
INSERT INTO `books`(`title`, `author`, `genre`) VALUES("L'amour dure trois ans", "Frédéric Beigbeder", "Roman");
INSERT INTO `books`(`title`, `author`, `genre`) VALUES("Akira", "Katsuhiro Otomo", "Manga");
INSERT INTO `books`(`title`, `author`, `genre`) VALUES("Foundation ", "Isaac Asimov", "Science-fiction");




