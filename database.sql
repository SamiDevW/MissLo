DROP DATABASE IF EXISTS misslo;
CREATE DATABASE misslo;
USE misslo;
CREATE TABLE users
(
idUser int PRIMARY KEY  AUTO_INCREMENT,
name varchar(100),
email varchar(100) unique,
username varchar(100),
password varchar(100),
user_role varchar(50) CHECK (user_role IN ('benevole','association'))
);
CREATE TABLE missions
(
idMission int  PRIMARY KEY  AUTO_INCREMENT,
title varchar(100),
description text ,
startDate datetime,
endDate datetime,
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
idUser int,
FOREIGN KEY (idUser) REFERENCES users(idUser) ON DELETE CASCADE
);

CREATE TABLE candidatures (
    idCandidature INT AUTO_INCREMENT PRIMARY KEY,
    idMission INT,
    idUser INT,
    status VARCHAR(50) DEFAULT 'en attente' CHECK (status IN ('acceptee', 'refusee', 'en attente')),
    UNIQUE (idMission, idUser),
    FOREIGN KEY (idMission) REFERENCES missions(idMission) ON DELETE CASCADE,
    FOREIGN KEY (idUser) REFERENCES users(idUser) ON DELETE CASCADE
);