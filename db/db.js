import sql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const db = sql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('Connected to database');
});

export default db;