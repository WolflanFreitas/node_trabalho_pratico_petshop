import {connect} from './db.js';

async function insertAnimal(animal) {
    const conn = await connect();

    try {
        const sql = "INSERT INTO animals (name, type, owner_id) VALUES ($1, $2, $3) RETURNING *";
        const values = [animal.name, animal.type, animal.owner_id];
        const res = await conn.query(sql, values);

        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function updateAnimal(animal) {
    const conn = await connect();

    try {
        const sql = "UPDATE animals SET name = $1, type = $2, owner_id = $3 WHERE animal_id = $4 RETURNING *";
        const values = [animal.name, animal.type, animal.owner_id, animal.animal_id];
        const res = await conn.query(sql, values);

        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function getAnimals() {
    const conn = await connect();

    try {
        const sql = "SELECT * FROM animals ORDER BY animal_id";
        const res = await conn.query(sql);

        return res.rows;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function getAnimal(id) {
    const conn = await connect();

    try {
        const sql = "SELECT * FROM animals WHERE animal_id = $1";
        const values = [id];
        const res = await conn.query(sql,values);

        if(!res.rows[0]) {
            throw new Error("Animal not found!")
        }

        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function deleteAnimal(id) {
    const conn = await connect();

    try {
        const sql = "DELETE FROM animals WHERE animal_id = $1";
        const values = [id];
        await conn.query(sql,values);
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function getAnimalsByOwnerId(owner_id) {
    const conn = await connect();

    try {
        const sql = "SELECT * FROM animals WHERE owner_id = $1";
        const values = [owner_id];
        const res = await conn.query(sql,values);

        if(!res.rows) {
            throw new Error("Animals not found!")
        }

        return res.rows;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

export default {
    insertAnimal,
    getAnimals,
    getAnimal,
    deleteAnimal,
    updateAnimal,
    getAnimalsByOwnerId
}