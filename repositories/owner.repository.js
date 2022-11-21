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

export default {
    insertOwner
}