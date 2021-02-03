Setting up an Express.js server

first step: To set up a Express.js app server, create a directory for the project to live in.

mkdir apicrud-node-postgres
cd apicrud-node-postgres


second step: We are going to install body-parser cors express pg pg-hstore sequelize.

npm i body-parser cors express pg pg-hstore sequelize

third step: we can either run npm init or npm init -y to create a package.json.

{
  "name": "apicrud-node-postgres",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "pg": "^8.5.1",
    "pg-hstore": "^2.3.3",
    "sequelize": "^6.5.0"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "http://github/bedsongultom/",
  "license": "ISC"
}




CREATE DATABASE userdb
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;



CREATE TABLE public.tblmstuser
(
    userid integer NOT NULL DEFAULT nextval('tblmstuser_userid_seq'::regclass),
    cardid character varying(15) COLLATE pg_catalog."default",
    firstname character varying(20) COLLATE pg_catalog."default",
    lastname character varying(30) COLLATE pg_catalog."default",
    fullname character varying(20) COLLATE pg_catalog."default",
    username character varying(20) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    userlevelid integer,
    jobid integer,
    deptid integer,
    status character varying(1) COLLATE pg_catalog."default" DEFAULT 0,
    CONSTRAINT tblmstuser_pkey PRIMARY KEY (userid)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.tblmstuser
    OWNER to postgres;


INSERT INTO public.tblmstuser(
	cardid, firstname, lastname, fullname, username, password, userlevelid, jobid, deptid, status)
	VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?
); 


