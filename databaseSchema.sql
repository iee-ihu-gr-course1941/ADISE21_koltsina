CREATE DATABASE IF NOT EXISTS koltsinadb;

CREATE TABLE IF NOT EXISTS Game (
    id int(11) AUTO_INCREMENT,
    turn int(11) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Players (
    id int(11) AUTO_INCREMENT,
    username varchar(45) DEFAULT NULL,
    player_no int(11) DEFAULT NULL,
    game_id int(11) DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (game_id) REFERENCES Game(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- ----------------------------------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Deck (
    id int(11) AUTO_INCREMENT,
    card_number varchar(45) NOT NULL,
    card_shape varchar(45) NOT NULL,
    in_hand boolean DEFAULT FALSE,
    player_id int(11) DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (player_id) REFERENCES Players(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- ----------------------------------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Log (
    id int(11) AUTO_INCREMENT,
    logger text(10000),
    PRIMARY KEY (id)
);

INSERT INTO Game (id, turn) VALUES (1, 1);
