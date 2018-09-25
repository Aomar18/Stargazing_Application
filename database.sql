CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);

CREATE TABLE location (
    id SERIAL PRIMARY KEY,
    person_id integer,
    title VARCHAR(100),
    longitude VARCHAR(7),
    latitude VARCHAR(7),
    description VARCHAR(200),
    bortle_value integer,
    NELM integer,
    constellations_visible BOOLEAN,
    name_constellation VARCHAR(200),
    image_path VARCHAR(2000),
    address VARCHAR(100),
    userinput_date TIMESTAMP,
    date_posted TIMESTAMP,
);

CREATE TABLE rating (
	id SERIAL PRIMARY KEY,
	person_id integer,
	location_id integer,
	rating integer
);

CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	comment VARCHAR(200), 
	location_id integer,
	person_id integer,
	comment_time TIMESTAMP
);

INSERT INTO "comments" ("comment" , "location_id" , "person_id") VALUES ('nice post' , 1 , 1
);

SELECT "location".*, "person"."id" as person_id, "person"."username" FROM  "location" JOIN "person"
ON "person"."id" = "location"."person_id";


SELECT "location".*, "person"."id" as person_id, "person"."username" FROM  "location" JOIN "person"
ON "person"."id" = "location"."person_id" 
WHERE "person"."id" = $1;


