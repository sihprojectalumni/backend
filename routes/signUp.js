import express from 'express';
import getUserByUsername from '../db/getUserByUsername.js';
import getUserByMail from '../db/getUserByMail.js';
import createUser from '../db/createUser.js';
const router = express.Router();

router.post('/', async (req, res) => { // Changed the path to '/' since it's already defined in index.js
    const user = req.body;
    if(!user.name || !user.email || !user.username || !user.password || !user.type || !user.course || !user.year) {
        res.status(400).json({status: 'fail', message: 'All fields are required'});
        return;
    }
    const checkMail = await getUserByMail(user.email);
    if(checkMail.status === 'success') {
        res.status(400).json({status: 'fail', message: 'Email already exists'});
        return;
    }
    const checkUsername = await getUserByUsername(user.username);
    if(checkUsername.status === 'success') {
        res.status(400).json({status: 'fail', message: 'Username already exists'});
        return;
    }
    const status = await createUser(user);
    res.status(200).json(status);
}); 

export default router;