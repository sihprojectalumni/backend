import db from './db.js';

const createUserTable = `CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    username VARCHAR(20) UNIQUE,
    password VARCHAR(255) NOT NULL,
    type VARCHAR(255),
    course VARCHAR(255) NOT NULL,
    working_place VARCHAR(255),
    year YEAR NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db.query(createUserTable, (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('Users table created');
})