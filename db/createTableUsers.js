import db from './db.js';

const createUserTable = `CREATE TABLE IF NOT EXISTS users (id VARCHAR(255) PRIMARY KEY, name VARCHAR(255), email VARCHAR(255) UNIQUE, username VARCHAR(20) UNIQUE, password VARCHAR(255), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`;

db.query(createUserTable, (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('Users table created');
})