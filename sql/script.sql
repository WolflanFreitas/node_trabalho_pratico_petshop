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

INSERT INTO owners (name, phone) VALUES ('Alda Valentim', '(39) 98566-1222');
INSERT INTO owners (name, phone) VALUES ('Nicolas Avelar', '(28) 97432-0379');
INSERT INTO owners (name, phone) VALUES ('Emilly Baptista', '(31) 99545-2457');
INSERT INTO owners (name, phone) VALUES ('Beatriz Bonilha', '(35) 98054-4724');
INSERT INTO owners (name, phone) VALUES ('Nataniel Faleiro', '(33) 99594-3315');
INSERT INTO owners (name, phone) VALUES ('Richard Santos', '(27) 99597-9170');

INSERT INTO animals (name, type, owner_id) VALUES ('Billy', 'Cachorro', 1);
INSERT INTO animals (name, type, owner_id) VALUES ('Nala', 'Cachorro', 2);
INSERT INTO animals (name, type, owner_id) VALUES ('Mimi', 'Gato', 2);
INSERT INTO animals (name, type, owner_id) VALUES ('Dory', 'Cachorro', 3);
INSERT INTO animals (name, type, owner_id) VALUES ('Lulu', 'Cachorro', 4);
INSERT INTO animals (name, type, owner_id) VALUES ('Bob', 'Cachorro', 5);
INSERT INTO animals (name, type, owner_id) VALUES ('Milu', 'Cachorro', 5);
INSERT INTO animals (name, type, owner_id) VALUES ('Emmy', 'Gato', 5);
INSERT INTO animals (name, type, owner_id) VALUES ('Amora', 'Cachorro', 6);

INSERT INTO services (description, value, animal_id) VALUES ('Banho', 30, 1);
INSERT INTO services (description, value, animal_id) VALUES ('Banho', 30, 5);
INSERT INTO services (description, value, animal_id) VALUES ('Banho', 30, 6);
INSERT INTO services (description, value, animal_id) VALUES ('Banho', 30, 9);
INSERT INTO services (description, value, animal_id) VALUES ('Banho e Tosa', 60, 2);
INSERT INTO services (description, value, animal_id) VALUES ('Banho e Tosa', 60, 7);
INSERT INTO services (description, value, animal_id) VALUES ('Consulta', 200, 3);
INSERT INTO services (description, value, animal_id) VALUES ('Consulta', 200, 8);
INSERT INTO services (description, value, animal_id) VALUES ('Consulta', 200, 2);