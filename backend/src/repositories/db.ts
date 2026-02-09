import { Pool } from 'pg';
import 'dotenv/config';

const pool = new Pool({

    connectionString: process.env.DATABASE_URL,
    user: !process.env.DATABASE_URL ? process.env.DB_USER : undefined,
    host: !process.env.DATABASE_URL ? process.env.DB_HOST : undefined,
    database: !process.env.DATABASE_URL ? process.env.DB_NAME : undefined,
    password: !process.env.DATABASE_URL ? process.env.DB_PASSWORD : undefined,
    port: !process.env.DATABASE_URL ? Number(process.env.DB_PORT) : undefined,

    ssl: process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false
});

export const runDB = async () => {
    try {
        const client = await pool.connect();
        console.log("Connected to PostgreSQL successfully");
        client.release();
    } catch (err) {
        console.error("Postgres connection error:", err);
        throw err;
    }
};

export default pool;