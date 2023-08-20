USE sys;
DROP SCHEMA IF EXISTS support_ticket_platform;

CREATE SCHEMA support_ticket_platform;
USE support_ticket_platform;

DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS contacts;

CREATE TABLE companies (
	company_id INT PRIMARY KEY,
    company_name VARCHAR(250),
    company_address VARCHAR(250),
    company_main_contact_id INT
);


CREATE TABLE contacts (
	contact_id INT PRIMARY KEY,
    contact_first_name VARCHAR(40),
    contact_last_name VARCHAR(80),
    contact_email VARCHAR(160) UNIQUE,
    contact_phone_number BIGINT UNSIGNED
);

INSERT INTO companies (company_id, company_name, company_address, company_main_contact_id)
	VALUES(1, "Blue Castle IT", "Somewhere in CT", 1);
INSERT INTO contacts (contact_id, contact_first_name, contact_last_name, contact_email, contact_phone_number)
	VALUES(1, "Diana", "Scott", "dscott@bluecastleit.com", 151515151515151); 
