import db from "./db.js";

const getJobById = async (jobId) => {
    const query = `SELECT * FROM jobs WHERE id = ?`;
    const values = [jobId];

    const job = new Promise((resolve, reject) => {
        db.query(query, values, (err, result) => {
            if (err) {
                resolve({ status: 'error', message: err.message });
            } else {
                if (result.length === 0) {
                    resolve({ status: 'fail', message: 'Job not found' });
                } else {
                    resolve({ status: 'success', job: result[0] });
                }
            }
        });
    });

    return job;
}

export default getJobById;