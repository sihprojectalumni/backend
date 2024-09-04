import db from './db.js';

const getUserByMail = async (mail) => {
    const query = `SELECT * FROM users WHERE email = '${mail}'`;
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

export default getUserByMail;