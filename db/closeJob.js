import db from "./db.js";

const closeJob = async (jobId) => {
    const query = `UPDATE jobs SET closed = TRUE WHERE id = ?`;
    const values = [jobId];

    const status = new Promise((resolve, reject) => {
        db.query(query, values, (err, result) => {
            if (err) {
                resolve({ status: 'error', message: err.message });
            } else {
                resolve({ status: 'success', message: 'Job closed SuccessFully' });
            }
        });
    });
    return status;
};

export default closeJob;