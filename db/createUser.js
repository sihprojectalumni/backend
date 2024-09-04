import db from './db.js';
import tokenGenerator from '../hashmeathods/tokenGenerator.js';
import hasher from '../hashmeathods/hasher.js';

const createUser = async (user) => {
    const token = tokenGenerator();
    const hashedPassword = hasher(user.password);
    const query = `INSERT INTO users (id, name, email, username, password) VALUES ('${token}', '${user.name}', '${user.email}', '${user.username}', '${hashedPassword}')`;
    const status = new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err) {
                resolve({status: 'error'});
            }
            resolve({status: 'success', token: token});
        });
    })
    return status;
};

export default createUser;