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

CREATE TABLE services (
    service_id SERIAL PRIMARY KEY,
    description VARCHAR NOT NULL,
    value NUMERIC NOT NULL,
    animal_id INT NOT NULL,
    CONSTRAINT fk_animals FOREIGN KEY (animal_id) REFERENCES animals (animal_id)
);