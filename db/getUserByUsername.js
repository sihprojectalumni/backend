import db from './db.js';

const getUserByUsername = async (username) => {
    const query = `SELECT * FROM users WHERE username = '${username}'`;
    const status = new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err) {
                resolve({status: 'error'});
            }
            if(result.length === 0) {
                resolve({status: 'fail'});
            }
            resolve({status: 'success' , user: result[0]});
        })});
    
    return status;
}

export default getUserByUsername;