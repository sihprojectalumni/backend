import express from 'express';
import getJobById from '../db/getJobById.js';
import closeJob from '../db/closeJob.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const data = req.body;
    if(!data.jobId || !data.userToken) {
        res.status(400).json({ status: 'error', message: 'Invalid Request' });
        return;
    }

    const job = await getJobById(data.jobId);
    if(job.status === 'error') {
        res.status(500).json(job);
        return;
    }
    if(job.status === 'fail') {
        res.status(404).json(job);
        return;
    }

    if(job.job.alumniId !== data.userToken) {
        res.status(403).json({ status: 'error', message: 'Unauthorized' });
        return;
    }

    const status = await closeJob(data.jobId);
    res.json(status);
})


export default router;