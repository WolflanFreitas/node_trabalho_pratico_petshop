import dotenv from "dotenv";
import pg from "pg";
dotenv.config();
async function connect() {
    if(global.connection) {
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    global.connection = pool;
    
    return pool.connect();
}

export {connect}