import {connect} from './db.js';

async function insertOwner(owner) {
    const conn = await connect();

    try {
        const sql = "INSERT INTO owners (name, phone) VALUES ($1, $2) RETURNING *";
        const values = [owner.name, owner.phone];
        const res = await conn.query(sql, values);

        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function updateOwner(owner) {
    const conn = await connect();

    try {
        const sql = "UPDATE owners SET name = $1, phone = $2 WHERE owner_id = $3 RETURNING *";
        const values = [owner.name, owner.phone, owner.owner_id];
        const res = await conn.query(sql, values);

        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function getOwners() {
    const conn = await connect();

    try {
        const sql = "SELECT * FROM owners ORDER BY owner_id";
        const res = await conn.query(sql);

        return res.rows;
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function getOwner(id) {
    const conn = await connect();

    try {
        const sql = "SELECT * FROM owners WHERE owner_id = $1";
        const values = [id];
        const res = await conn.query(sql,values);

        if(!res.rows[0]) {
            throw new Error("Owner not found!")
        }

        return res.rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function deleteOwner(id) {
    const conn = await connect();

    try {
        const sql = "DELETE FROM owners WHERE owner_id = $1";
        const values = [id];
        await conn.query(sql,values);
    } catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}


export default {
    insertOwner,
    getOwners,
    getOwner,
    deleteOwner,
    updateOwner
}