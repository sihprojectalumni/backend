import express from 'express';
import getUserByToken from '../db/getUserByToken.js';
import createJob from '../db/createJob.js';
const router = express.Router();


router.post('/', async (req, res) => {
    const data = req.body;
    if( 
        !data.title || 
        !data.description || 
        !data.location || 
        !data.salary || 
        !data.lastDate || 
        !data.noOfSeats || 
        !data.jobDuration ||
        !data.companyName || 
        !data.companyDescription || 
        !data.companyLocation ||
        !data.userToken
    )
    {
        res.status(400).send({status:"error", message: 'Missing required data'});
        return;
    }

    const checkUser = await getUserByToken(data.userToken);
    console.log(checkUser);
    if(checkUser.status === 'fail' || checkUser.status === 'error') {
        res.status(400).send({status: "error", message: 'Invalid user'});
        return;
    }

    if (checkUser.user.type !== 'alumni') {
        res.status(401).send({status: "error", message: 'Cannot Create Job'});
        return;
    }

    const status = await createJob(data);
    console.log(status);
    res.status(200).json(status);
    return;
})

export default router;