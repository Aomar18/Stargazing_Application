CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    address VARCHAR (100) NOT NULL,
    profile_img VARCHAR (1000) NOT NULL
);


CREATE TABLE location (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    longitude VARCHAR(7),
    latitude VARCHAR(7),
    description VARCHAR(200),
    image_path VARCHAR(2000),
    location_address VARCHAR(100),
    created_date TIMESTAMP(100)
);