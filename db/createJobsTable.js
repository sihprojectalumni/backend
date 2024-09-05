import db from './db.js';

const query = `CREATE TABLE IF NOT EXISTS jobs
(   
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    title TEXT, 
    description TEXT,
    salary REAL,
    location VARCHAR(255),
    companyName TEXT,
    companyDescription TEXT,
    companyLocation VARCHAR(255),
    lastDate DATE,
    noOfSeats INT,
    jobDuration INT,
    closed BOOLEAN DEFAULT FALSE,
    alumniId VARCHAR(255),
    FOREIGN KEY (alumniId) REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

db.query(query, (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('Users table created');
})