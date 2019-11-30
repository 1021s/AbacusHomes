CREATE DATABASE zobinHood;

USE zobinHood;

CREATE TABLE pricing (
	priceid INT NOT NULL AUTO_INCREMENT,
	price INT NOT NULL,
	Listing_id CHAR(3) NOT NULL,
	PRIMARY KEY ( priceid )
);

/* Execute this file from terminal by typing: 
	mysql -uroot < /...relPath.../schema.sql
Pay attention to if this has been done before as you may need to DROP table_name and/or DROP database_name */