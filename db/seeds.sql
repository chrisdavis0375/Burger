USE burger_db;

CREATE TABLE burger(
    id INT AUTO_INCREMENT NOT NULL,
    burer_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY(id)
);