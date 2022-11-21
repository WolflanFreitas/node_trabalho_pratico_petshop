CREATE TABLE owners (
    owner_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    phone VARCHAR NOT NULL
);

CREATE TABLE animals (
    animal_id SERIAL PRIMARY KEY,
    owner_id INT NOT NULL,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    CONSTRAINT fk_owners FOREIGN KEY (owner_id) REFERENCES owners (owner_id)
);