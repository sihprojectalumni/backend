import express from 'express';
import getUserByUsername from '../db/getUserByUsername.js';
import getUserByMail from '../db/getUserByMail.js';
import passwordChecker from '../hashmeathods/passwordChecker.js';

const router = express.Router();


router.post('/', async (req, res) => {
    const user = req.body;
    if (!user.info || !user.password){
        res.status(400).json({status: 'fail', message: 'Missing credentials'});
        return;
    }
    
    if(user.info.includes('@')){
        const checkMail = await getUserByMail(user.info);
        if (checkMail.status === 'error'){
            res.status(500).json({status: 'error', message: 'Internal server error'});
            return;
        }
        if(checkMail.status === 'fail'){
            res.status(404).json({status: 'fail', message: 'User not found'});
            return;
        }

        const pass = await passwordChecker(user.password, checkMail.user.password);
        if(pass){
            res.json({status: 'success', token: checkMail.user.id});
            return;
        }
        res.status(401).json({status: 'fail', message: "Invalid email or password"});
        return;
    }
    const checkUsername = await getUserByUsername(user.info);
    if (checkUsername.status === 'error'){
        res.status(500).json({status: 'error', message: 'Internal server error'});
        return;
    }
    if(checkUsername.status === 'fail'){
        res.status(404).json({status: 'fail', message: 'User not found'});
        return;
    }
    const pass = await passwordChecker(user.password, checkUsername.user.password);
    if(pass){
        res.json({status: 'success', token: checkUsername.user.id});
        return;
    }
    res.status(401).json({status: 'fail', message: "Invalid username or password"});
    return;
})

export default router;