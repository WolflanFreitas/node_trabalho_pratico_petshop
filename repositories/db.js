import pg from "pg";

async function connect() {
    if(global.connection) {
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "postgres://ojediarz:h8GPmVRj3QkgO1--05-oL3mTaS-nX6Dg@babar.db.elephantsql.com/ojediarz"
    });

    global.connection = pool;
    
    return pool.connect();
}

export {connect}