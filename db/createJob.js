import db from "./db.js";

const createJob = async (job) => {
    const query = `INSERT INTO jobs (title, description, salary, location, companyName, companyDescription, companyLocation, lastDate, noOfSeats, jobDuration, alumniId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        job.title,
        job.description,
        job.salary,
        job.location,
        job.companyName,
        job.companyDescription,
        job.companyLocation,
        job.lastDate,
        job.noOfSeats,
        job.jobDuration,
        job.userToken
    ];

    const status = new Promise((resolve, reject) => {
        db.query(query, values, (err, result) => {
            if (err) {
                resolve({ status: 'error', message: err.message });
            } else {
                resolve({ status: 'success', message: 'Job Created', jobId: result.insertId});
            }
        });
    });

    return status;
};

export default createJob;