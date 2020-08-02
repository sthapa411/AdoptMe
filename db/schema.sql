-- Drops the adoptme if it exists currently --
DROP DATABASE IF EXISTS adoptme_db;
-- Creates the "adoptme_db" database --
CREATE DATABASE adoptme_db;

USE adoptme_db;

CREATE TABLE animal (
    id int NOT NULL AUTO_INCREMENT,
    --image BLOB NOT NULL,
    type varchar(100) NOT NULL,
    location varchar(255) NOT NULL,
    url 
    PRIMARY KEY id
);

--INSERT INTO dst_tbl (i, s) SELECT val, name FROM src_tbl;

--To copy only certain rows, add a WHERE clause that selects those rows:

--INSERT INTO dst_tbl SELECT * FROM src_tbl
--WHERE val > 100 AND name LIKE 'A%';
--The SELECT statement can produce values from expressions, too. For example, the following statement counts the number of times each name occurs in src_tbl and stores both the counts and the names in dst_tbl:

--INSERT INTO dst_tbl (i, s) SELECT COUNT(*), name
--FROM src_tbl GROUP BY name;

